import $ from 'jquery'
import Mustache from 'mustache'
import SNAP from '../../models/ontologies/snap'
/**
 * Class for the Editor interface
 */
class Templates {
    constructor(labels) {
        var substringMatcher = function(strs) {
            return function findMatches(q, cb) {
                var matches, substrRegex;
                matches = [];
                substrRegex = new RegExp(q, 'i');
                $.each(strs, function(i, str) { if (substrRegex.test(str)) { matches.push(str); } });
                cb(matches);
            };
        };
        var names = [
            "http://data.perseus.org/people/smith:Ajax-1#this",
            "http://data.perseus.org/people/smith:Teucrus-1#this",
            "http://data.perseus.org/people/smith:achilles-1#this",
            "http://data.perseus.org/people/smith:acron-1#this",
            "http://data.perseus.org/people/smith:aeacus-1#this",
            "http://data.perseus.org/people/smith:aeneas-1#this",
            "http://data.perseus.org/people/smith:aethlius-1#this",
            "http://data.perseus.org/people/smith:aetolus-1#this",
            "http://data.perseus.org/people/smith:agamemnon-1#this",
            "http://data.perseus.org/people/smith:ajax-1#this",
            "http://data.perseus.org/people/smith:ajax-2#this",
            "http://data.perseus.org/people/smith:amphitrite-1#this",
            "http://data.perseus.org/people/smith:amulius-1#this",
            "http://data.perseus.org/people/smith:andromache-1#this",
            "http://data.perseus.org/people/smith:antigone-1#this",
            "http://data.perseus.org/people/smith:antilochus-1#this",
            "http://data.perseus.org/people/smith:aphrodite-1#this",
            "http://data.perseus.org/people/smith:apollo-1#this",
            "http://data.perseus.org/people/smith:ares-1#this",
            "http://data.perseus.org/people/smith:artemis-1#this",
            "http://data.perseus.org/people/smith:ascanius-1#this",
            "http://data.perseus.org/people/smith:asterodia-1#this",
            "http://data.perseus.org/people/smith:astyanax-1#this",
            "http://data.perseus.org/people/smith:astymedusa-1#this",
            "http://data.perseus.org/people/smith:athena-1#this",
            "http://data.perseus.org/people/smith:calyce-1#this",
            "http://data.perseus.org/people/smith:castor-1#this",
            "http://data.perseus.org/people/smith:charybdis-1#this",
            "http://data.perseus.org/people/smith:circe-1#this",
            "http://data.perseus.org/people/smith:clymenus-1#this",
            "http://data.perseus.org/people/smith:clytaemnestra-1#this",
            "http://data.perseus.org/people/smith:crataeis-1#this",
            "http://data.perseus.org/people/smith:creon-1#this",
            "http://data.perseus.org/people/smith:creon-2#this",
            "http://data.perseus.org/people/smith:cypselus-2#this",
            "http://data.perseus.org/people/smith:deiphobus-1#this",
            "http://data.perseus.org/people/smith:diomedes-1#this",
            "http://data.perseus.org/people/smith:dioscuri-1#this",
            "http://data.perseus.org/people/smith:echidna-1#this",
            "http://data.perseus.org/people/smith:eetion-1#this",
            "http://data.perseus.org/people/smith:electra-4#this",
            "http://data.perseus.org/people/smith:emathion-1#this",
            "http://data.perseus.org/people/smith:endymion-1#this",
            "http://data.perseus.org/people/smith:eos-1#this",
            "http://data.perseus.org/people/smith:epeius-1#this",
            "http://data.perseus.org/people/smith:epicaste-1#this",
            "http://data.perseus.org/people/smith:eriboea-1#this",
            "http://data.perseus.org/people/smith:eteocles-1#this",
            "http://data.perseus.org/people/smith:eteocles-2#this",
            "http://data.perseus.org/people/smith:eurycleia-1#this",
            "http://data.perseus.org/people/smith:eurydice-1#this",
            "http://data.perseus.org/people/smith:euryganeia-1#this",
            "http://data.perseus.org/people/smith:eurysaces-1#this",
            "http://data.perseus.org/people/smith:faustulus-1#this",
            "http://data.perseus.org/people/smith:gaea-1#this",
            "http://data.perseus.org/people/smith:gens-1#this",
            "http://data.perseus.org/people/smith:geryon-1#this",
            "http://data.perseus.org/people/smith:glaucia-1#this",
            "http://data.perseus.org/people/smith:glaucus-7#this",
            "http://data.perseus.org/people/smith:haemon-3#this",
            "http://data.perseus.org/people/smith:hecabe-1#this",
            "http://data.perseus.org/people/smith:hecate-1#this",
            "http://data.perseus.org/people/smith:hector-1#this",
            "http://data.perseus.org/people/smith:helena-1#this",
            "http://data.perseus.org/people/smith:helenus-1#this",
            "http://data.perseus.org/people/smith:hera-1#this",
            "http://data.perseus.org/people/smith:heracles-1#this",
            "http://data.perseus.org/people/smith:heracles-14#this",
            "http://data.perseus.org/people/smith:hermione-1#this",
            "http://data.perseus.org/people/smith:icarius-2#this",
            "http://data.perseus.org/people/smith:ilia-1#this",
            "http://data.perseus.org/people/smith:iocaste-1#this",
            "http://data.perseus.org/people/smith:iphianassa-1#this",
            "http://data.perseus.org/people/smith:iphigeneia-1#this",
            "http://data.perseus.org/people/smith:ismene-1#this",
            "http://data.perseus.org/people/smith:ismene-2#this",
            "http://data.perseus.org/people/smith:julius-1#this",
            "http://data.perseus.org/people/smith:labdacus-1#this",
            "http://data.perseus.org/people/smith:laertes-1#this",
            "http://data.perseus.org/people/smith:laius-1#this",
            "http://data.perseus.org/people/smith:lamia-2#this",
            "http://data.perseus.org/people/smith:laodamas-1#this",
            "http://data.perseus.org/people/smith:laomedon-1#this",
            "http://data.perseus.org/people/smith:laonytus-1#this",
            "http://data.perseus.org/people/smith:laurentia-1#this",
            "http://data.perseus.org/people/smith:leda-1#this",
            "http://data.perseus.org/people/smith:mars-1#this",
            "http://data.perseus.org/people/smith:memnon-1#this",
            "http://data.perseus.org/people/smith:menelaus-1#this",
            "http://data.perseus.org/people/smith:menoeceus-1#this",
            "http://data.perseus.org/people/smith:merope-1#this",
            "http://data.perseus.org/people/smith:molossus-1#this",
            "http://data.perseus.org/people/smith:neis-1#this",
            "http://data.perseus.org/people/smith:nemesis-1#this",
            "http://data.perseus.org/people/smith:neoptolemus-1#this",
            "http://data.perseus.org/people/smith:nicostratus-1#this",
            "http://data.perseus.org/people/smith:numitor-1#this",
            "http://data.perseus.org/people/smith:odysseus-1#this",
            "http://data.perseus.org/people/smith:oedipus-1#this",
            "http://data.perseus.org/people/smith:paeon-3#this",
            "http://data.perseus.org/people/smith:pan-1#this",
            "http://data.perseus.org/people/smith:paris-1#this",
            "http://data.perseus.org/people/smith:patroclus-2#this",
            "http://data.perseus.org/people/smith:peirithous-1#this",
            "http://data.perseus.org/people/smith:penelope-1#this",
            "http://data.perseus.org/people/smith:pergamus-1#this",
            "http://data.perseus.org/people/smith:periboea-1#this",
            "http://data.perseus.org/people/smith:periboea-4#this",
            "http://data.perseus.org/people/smith:phorcys-1#this",
            "http://data.perseus.org/people/smith:phrastor-1#this",
            "http://data.perseus.org/people/smith:polybus-1#this",
            "http://data.perseus.org/people/smith:polydamas-1#this",
            "http://data.perseus.org/people/smith:polydeuces-1#this",
            "http://data.perseus.org/people/smith:polygnotus-7#this",
            "http://data.perseus.org/people/smith:polyneices-1#this",
            "http://data.perseus.org/people/smith:polyxena-1#this",
            "http://data.perseus.org/people/smith:poseidon-1#this",
            "http://data.perseus.org/people/smith:priamus-1#this",
            "http://data.perseus.org/people/smith:protesilaus-1#this",
            "http://data.perseus.org/people/smith:protogeneia-1#this",
            "http://data.perseus.org/people/smith:quintilia-1#this",
            "http://data.perseus.org/people/smith:remus-1#this",
            "http://data.perseus.org/people/smith:roma-3#this",
            "http://data.perseus.org/people/smith:romulus-1#this",
            "http://data.perseus.org/people/smith:romus-2#this",
            "http://data.perseus.org/people/smith:sarpedon-2#this",
            "http://data.perseus.org/people/smith:scamandrius-1#this",
            "http://data.perseus.org/people/smith:scylla-1#this",
            "http://data.perseus.org/people/smith:selene-1#this",
            "http://data.perseus.org/people/smith:silvia-1#this",
            "http://data.perseus.org/people/smith:sthenelus-1#this",
            "http://data.perseus.org/people/smith:tarpeia-1#this",
            "http://data.perseus.org/people/smith:tatius-1#this",
            "http://data.perseus.org/people/smith:tecmessa-1#this",
            "http://data.perseus.org/people/smith:telamon-2#this",
            "http://data.perseus.org/people/smith:telegonus-3#this",
            "http://data.perseus.org/people/smith:telemachus-1#this",
            "http://data.perseus.org/people/smith:teleutias-1#this",
            "http://data.perseus.org/people/smith:teuthras-2#this",
            "http://data.perseus.org/people/smith:theseus-1#this",
            "http://data.perseus.org/people/smith:tiberinus-1#this",
            "http://data.perseus.org/people/smith:tithonus-1#this",
            "http://data.perseus.org/people/smith:triton-1#this",
            "http://data.perseus.org/people/smith:tyndareus-1#this",
            "http://data.perseus.org/people/smith:typhon-1#this",
            "http://data.perseus.org/people/smith:zeus-1#this",
            "http://data.snapdrgn.net/ontology/snap#AcknowledgedFamilyRelationship",
            "http://data.snapdrgn.net/ontology/snap#AdoptedFamilyRelationship",
            "http://data.snapdrgn.net/ontology/snap#AllianceWith",
            "http://data.snapdrgn.net/ontology/snap#AncestorOf",
            "http://data.snapdrgn.net/ontology/snap#AuntOf",
            "http://data.snapdrgn.net/ontology/snap#Bond",
            "http://data.snapdrgn.net/ontology/snap#BrotherOf",
            "http://data.snapdrgn.net/ontology/snap#CasualIntimateRelationshipWith",
            "http://data.snapdrgn.net/ontology/snap#ChildOf",
            "http://data.snapdrgn.net/ontology/snap#ChildOfSiblingOf",
            "http://data.snapdrgn.net/ontology/snap#ClaimedFamilyRelationship",
            "http://data.snapdrgn.net/ontology/snap#CousinOf",
            "http://data.snapdrgn.net/ontology/snap#DaughterOf",
            "http://data.snapdrgn.net/ontology/snap#DescendentOf",
            "http://data.snapdrgn.net/ontology/snap#EmnityFor",
            "http://data.snapdrgn.net/ontology/snap#ExtendedFamilyOf",
            "http://data.snapdrgn.net/ontology/snap#ExtendedHouseholdOf",
            "http://data.snapdrgn.net/ontology/snap#FamilyOf",
            "http://data.snapdrgn.net/ontology/snap#FatherOf",
            "http://data.snapdrgn.net/ontology/snap#FosterFamilyRelationship",
            "http://data.snapdrgn.net/ontology/snap#FreedSlaveOf",
            "http://data.snapdrgn.net/ontology/snap#FreedmanOf",
            "http://data.snapdrgn.net/ontology/snap#FreedwomanOf",
            "http://data.snapdrgn.net/ontology/snap#FriendshipFor",
            "http://data.snapdrgn.net/ontology/snap#GrandchildOf",
            "http://data.snapdrgn.net/ontology/snap#GranddaughterOf",
            "http://data.snapdrgn.net/ontology/snap#GrandfatherOf",
            "http://data.snapdrgn.net/ontology/snap#GrandmotherOf",
            "http://data.snapdrgn.net/ontology/snap#GrandparentOf",
            "http://data.snapdrgn.net/ontology/snap#GrandsonOf",
            "http://data.snapdrgn.net/ontology/snap#GreatGrandfatherOf",
            "http://data.snapdrgn.net/ontology/snap#GreatGrandmotherOf",
            "http://data.snapdrgn.net/ontology/snap#GreatGrandparentOf",
            "http://data.snapdrgn.net/ontology/snap#HalfFamilyRelationship",
            "http://data.snapdrgn.net/ontology/snap#HereditaryFamilyOf",
            "http://data.snapdrgn.net/ontology/snap#HouseSlaveOf",
            "http://data.snapdrgn.net/ontology/snap#HouseholdOf",
            "http://data.snapdrgn.net/ontology/snap#InLawFamilyRelationship",
            "http://data.snapdrgn.net/ontology/snap#IntimateRelationshipWith",
            "http://data.snapdrgn.net/ontology/snap#KinOf",
            "http://data.snapdrgn.net/ontology/snap#LegallyRecognisedRelationshipWith",
            "http://data.snapdrgn.net/ontology/snap#Link",
            "http://data.snapdrgn.net/ontology/snap#MaternalFamilyRelationship",
            "http://data.snapdrgn.net/ontology/snap#MotherOf",
            "http://data.snapdrgn.net/ontology/snap#NephewOf",
            "http://data.snapdrgn.net/ontology/snap#NieceOf",
            "http://data.snapdrgn.net/ontology/snap#ParentOf",
            "http://data.snapdrgn.net/ontology/snap#PaternalFamilyRelationship",
            "http://data.snapdrgn.net/ontology/snap#ProfessionalRelationship",
            "http://data.snapdrgn.net/ontology/snap#QuAC",
            "http://data.snapdrgn.net/ontology/snap#QualifierRelationship",
            "http://data.snapdrgn.net/ontology/snap#SeriousIntimateRelationshipWith",
            "http://data.snapdrgn.net/ontology/snap#SiblingOf",
            "http://data.snapdrgn.net/ontology/snap#SiblingOfParentOf",
            "http://data.snapdrgn.net/ontology/snap#SisterOf",
            "http://data.snapdrgn.net/ontology/snap#SlaveOf",
            "http://data.snapdrgn.net/ontology/snap#SonOf",
            "http://data.snapdrgn.net/ontology/snap#StepFamilyRelationship",
            "http://data.snapdrgn.net/ontology/snap#UncleOf"
        ]
        var self = this

        this.decodeHTML = function(str) {
            var map = {"gt": ">" /* , … */};
            return str.replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi, function ($0, $1) {
                if ($1[0] === "#") {
                    return String.fromCharCode($1[1].toLowerCase() === "x" ? parseInt($1.substr(2), 16) : parseInt($1.substr(1), 10));
                } else {
                    return map.hasOwnProperty($1) ? map[$1] : $0;
                }
            });
        }

        // planned: deal with prefixes
        this.getPrefix = () => {
            return ""
        }

        this.updateValue = (event,text) => {
            var triple = $(event.target).closest('.triple').get(0)
            var token = $(event.target).closest('.token').data('token')
            triple.setAttribute('data-'+token, text)
            if (triple.dataset[token]!=triple.dataset[token+'-original']) $(triple).addClass('update')
        }
        this.translate = labels || {}
        this.view = {
            label: () => {
                return (uri,render) => {
                    var rendered = this.decodeHTML(render(uri))
                    return SNAP.label(rendered) || rendered
                }
            }}
        this.partials = {
            triple: `
              <div class="triple" title="Graph:{{g}} Subject:{{s}} Predicate:{{p}} Object:{{o}}" data-original-subject="{{s}}" data-original-predicate="{{p}}" data-original-object="{{o}}" data-subject="{{s}}" data-predicate="{{p}}" data-object="{{o}}">
                <div class="sentence well container">
                  <div class="token subject col-xs-12 col-md-4" data-token="subject">
                    <input class="typeahead" placeholder="Subject" value="{{#label}}{{s}}{{/label}}">
                  </div>
                  <div class="token predicate col-xs-12 col-md-4" data-token="predicate">
                    <input class="typeahead" placeholder="Predicate" value="{{#label}}{{p}}{{/label}}">
                  </div>
                  <div class="token object col-xs-12 col-md-4" data-token="object">
                    <input class="typeahead" placeholder="Object" value="{{#label}}{{o}}{{/label}}">
                  </div>
                </div>
                <div class="btn-delete"><span class="glyphicon glyphicon-trash"/></div>
              </div>
            `,
            graph:`<div class="graph old" data-graph="{{g}}">{{#triples}}{{> triple}}{{/triples}}</div>`,
            graphs:`{{#annotations}}{{> graph}}{{/annotations}}`,
            // done: add empty graph container to create template and add new triples to it.
            new:`<div class="graph new"/><div style="text-align: center; z-index:5;"><div id="new_button" class="btn btn-circle" style="background-color: #4AA02C; color: white; font-size: 1em; cursor: pointer;">+</div></div>`,
            anchor:`<div class='anchor'><span class="prefix selector">{{selector.prefix}}</span><span class="exact selector">{{selector.exact}}</span><span class="suffix selector">{{selector.suffix}}</span></div>`
        } // planned: add selector and display anchor

        this.init = (jqElement, data) => {
            jqElement.html(Mustache.render("{{> graphs}}{{> new}}{{> anchor}}",Object.assign({},data,self.view),self.partials))

            function activate(el) {
                el.find('div.btn-delete').click((e) => {
                    // done: command list -> does the command list exist in the class or as data-attributes
                    // note: no command list, just marked ui elements
                    // done: add to command list = if (graph.length = 1) delete graph else delete triple
                    // done: if graph.length=1 remove/hide surrounding graph element (except if .new)
                    // done: add surrounding graph element to template
                    var triple = $(e.target).closest('.triple')
                        triple.animate({'height':'0px', 'margin-top':'0px', 'margin-bottom':'0px' },{duration:150, complete:() =>{$(e.target).closest('.triple').hide()}})
                        triple.addClass('delete')
                    if (!triple.siblings(':not(.delete)').length) triple.closest('.graph.old').addClass('delete')
                    // planned: add to history -> nope, reset button maybe
                })
                el.find('.btn-accept').click((e) => {
                    var triple = $(e.target).closest('.triple')
                    var text = triple.find('.tt-input').val()
                    var editing = triple.find('a.editing')
                        if (text.trim()) {
                            editing.text(SNAP.label(text)) // <-- planned: generalize for other ontologies
                            triple.addClass('update')
                            triple.get().forEach((elem) => elem.setAttribute("data-" + editing.data('token'),text))
                        }
                        editing.removeClass('editing')
                })
                // todo: rewrite btn-accept to apply label to entered values
                el.find('#new_button').click((e) => {
                    var triple = $('.graph.new').find('.triple:not(.delete):last')
                    // the following prevents the button from creating a new triple before the previous one has been completed
                    if (!triple.length || (triple.attr('data-subject') && triple.attr('data-predicate') && triple.attr('data-object'))) {
                        var list = $(Mustache.render("{{> triple}}",Object.assign({},{g:"",s:"",p:"",o:""},self.view),self.partials))
                        list.appendTo($('.graph.new'))
                        activate(list)
                    }
                })
                el.find('input').each((i,e) => $(e).typeahead({minLength:3,highlight:true},{source:substringMatcher(names)}))

                el.find('.token').on('typeahead:selected',self.updateValue)
                el.find('.token').on('typeahead:autocompleted', self.updateValue)
                el.find('.token').on('keyup', (e) => {
                    if (e.key.length===1 || e.key==="Backspace") {
                        self.updateValue(e,e.target.value)
                    }
                })

                return el
            }


            // jqElement.find('.tt-menu').insertAfter(this.closest('.group'))
            // planned: move autocomplete element (possibly have to add another container on the outside)
            return activate(jqElement)
        }
    }
}

export default Templates