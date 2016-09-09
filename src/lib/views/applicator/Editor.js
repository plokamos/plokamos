import Templates from '../annotator/Templates'
import SNAP from '../../models/ontologies/snap'
import OA from '../../models/ontologies/oa'
import Utils from '../../utils'
import _ from 'lodash'
import $ from 'jquery'

class Editor {

    constructor(app) {
        var self = this
        var jqParent = app.anchor
        this.annotator = () => app.annotator
        var origin = {}
        var selector = {}
        var labels = SNAP.labels
        var template = new Templates(labels)
        var button = $('<div class="btn btn-circle btn-info" id="edit_btn" style="display:none;" data-toggle="modal" data-target="#edit_modal"><span class="glyphicon glyphicon-paperclip"></span></div>')
        jqParent.append(button)
        var modal = $('<div id="edit_modal" class="modal fade in" style="display: none; "><div class="well"><div class="modal-header"><a class="close" data-dismiss="modal">×</a><h3>This is a Modal Heading</h3></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-success" data-dismiss="modal">Create</button><button type="submit" class="btn btn-danger" data-dismiss="modal">Cancel</button></div></div>')
        jqParent.append(modal)

        jqParent.mouseup((event) => {

            var selection = document.getSelection();

            // replace starter with
            if (selection && !selection.isCollapsed && button.css('display')==='none' && modal.css('display')==='none') {
                // add selector to modal or button

                var selector = OA.create("http://www.w3.org/ns/oa#TextQuoteSelector")(jqParent,selection);

                var menuState = document.documentElement.clientWidth - parseInt($("#menu-container").css('width'))
                var deltaH = menuState ? window.scrollY+15 : window.scrollY-parseInt($("#menu-container").css('height'))+15;
                var deltaW = menuState ? window.scrollX+parseInt($("#menu-container").css('width'))-10 : window.scrollX-10;
                button.css({display:"block",position:"absolute",left:event.clientX-deltaW,top:event.clientY+deltaH});
                modal.update({},selector)
                origin = {data:()=>{return {}}}
            } else button.css({display:"none"});

        })

        // move starter here and append to jqParent




        var body = modal.find('.modal-body')
        var apply_button = modal.find('.btn-success')
        button.click((e) => {
            // done: show modal (automatically w/ data-toggle)
            // planned: hide button if clicked elsewhere
            button.css('display','none')
        })

        /**
         * We are done editing and are now processing, in order:
         * 1. Pre-existing annotation bodies that have been completely deleted
         * 2. Partially deleted annotation bodies
         * 3. Modified annotation bodies
         * 4. Newly created annotation body
         */
        // planned: make button disabled by default, check if it needs to be enabled
        // note: user = $('body').data('user')
        // note: address = $('body').data('urn') || document.url
        // note: selector = modal.selector
        // note: data =
        // note: delete_graphs contains a list of annotation ids to delete [String]
        apply_button.click((e) => {
            var annotator = this.annotator()
            // NOTE: COMPUTING EDITS
            var NIL = "_________"

            var annotations = origin.data('annotations')
            var dG = body.find('.graph.old.delete')
            var delete_graphs = dG.map((i,el) => $(el).data('graph')).get()
            dG.remove()

            var dT = body.find('.graph.old .triple.delete')
            var delete_triples = _.flatten(
                _.zip(dT.closest('.graph.old').map((i,el) => $(el).data('graph')), dT.map((i,el) => $(el).data('original-subject')), dT.map((i,el) => $(el).data('original-predicate')), dT.map((i,el) => $(el).data('original-object')))
                .map((zipped) => {return {g:zipped[0],s:zipped[1],p:zipped[2],o:zipped[3]}})
                .map((gspo) => SNAP.expand()(gspo, annotations))
            )
            dT.remove()

            var uT = body.find('.graph.old .triple.update')
            var update_triples = _.zip(uT.closest('.graph.old').map((i,el) => $(el).data('graph')), uT.map((i,el) => $(el).data('original-subject')), uT.map((i,el) => $(el).data('original-predicate')), uT.map((i,el) => $(el).data('original-object')), uT.map((i,el) => $(el).data('subject')), uT.map((i,el) => $(el).data('predicate')), uT.map((i,el) => $(el).data('object')))

            var cT = body.find('.graph.new .triple:not(.delete)')
            var cite = Utils.cite(app.getUser()+app.getUrn(),Math.random().toString())
            var new_triples = _.flatten(_.zip(cT.map((i,el) => $(el).data('subject')), cT.map((i,el) => $(el).data('predicate')), cT.map((i,el) => $(el).data('object')))
                .filter((t)=> t[0]!=NIL && t[1]!=NIL && t[2]!=NIL)
                .map((t) => {return {g:cite,s:t[0],p:t[1],o:t[2]}})
                .map((t) => SNAP.expand()(t,annotations)))
            // planned: add title and motivatedby
            // todo: create title for new annotations in frontend, because it uses ontologies
            _.assign(selector,{id:cite+"#sel-"+Utils.hash(JSON.stringify(selector)).slice(0, 4)})
            var selector_triples = OA.expand(selector.type)(selector)
            var create_triples = new_triples.length ? _.concat(new_triples,selector_triples) : []



            // NOTE: APPLYING EDITS BELOW

            body.html('<span class="spinner">JUST A SEC!</span>')
            var acc = []
            annotator
                .drop(delete_graphs)
                .then((res) => {
                    acc.push(res)
                    return annotator.delete(_.concat(delete_triples,delete_graphs.map((id) => annotations[id])))
                })
                .then((res) => {
                    acc.push(res)
                    return annotator.update(_.flatten(update_triples.map((t) => { return SNAP.expand()({ g:t[0], s:t[1], p:t[2], o:t[3] },annotations)})),
                        _.flatten(update_triples.map((t) => { return SNAP.expand()({ g:t[0], s:t[4], p:t[5], o:t[6] },annotations)}))
                    )
                })
                .then((res) => {
                    acc.push(res)
                    return annotator.create(cite,create_triples)
                })
                .then((res) => annotator.apply(_.flatten(acc.concat(res))))

            // planned: this can be improved; the goal is to take a single step in history

            body.html('<span class="okay">OKAY!</span>')
            body.html('<span class="failure">OH NO!</span>')
        })

        modal.update = (data, newSelector) => {
            // done: populate with graphs/triples
            // planned: apply ontology-specific transformations
            var graphs = SNAP.simplify()(data)
            selector = newSelector
            template.init(body,{annotations:Object.keys(graphs).map((k) => { return {g:k,triples:graphs[k]}})})
            // interface.button.click -> get selections and create sparql to delete them
        }

        this.register = (jqElement) => {
            jqElement.click((e) => {
                origin = jqElement
                // planned: make button disappear again
                // planned: merge with selection tool (via a container for plugin buttons)
                var menuState = document.documentElement.clientWidth - parseInt($("#menu-container").css('width'))
                var deltaH = menuState ? window.scrollY : window.scrollY-parseInt($("#menu-container").css('height'));
                var deltaW = menuState ? window.scrollX+parseInt($("#menu-container").css('width')) : window.scrollX;
                button.css({display:"block",position:"absolute",left:e.clientX-deltaW,top:e.clientY+deltaH});
                modal.update(jqElement.data('annotations'),jqElement.data('selector'))
            })
        }

    }
}

export default Editor