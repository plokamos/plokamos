import SNAP from '../../models/ontologies/snap'

class Tooltip {
    constructor(app) {
        var jqParent = app.anchor
        jqParent.append($('<div class="margintooltip" style="display: none;"></div>'))
        this.register = (jqElement) => {
            jqElement.hover(function (e) {
                // planned: stringify should check ontology and select simplifier or stringify raw (.value)
                function stringify(obj) {
                    var simplified = SNAP.simplify()(obj)
                    return _.flatten(_.values(simplified)).map((o) => SNAP.label(o.s)+";\n"+SNAP.label(o.p)+";\n"+SNAP.label(o.o)).join("\n\n")
                }
                var graphs = $(this).data('annotations')
                var description = stringify(graphs)//attr(field)
                var tooltip = $('.margintooltip')

                var menuState = document.documentElement.clientWidth - parseInt($("#menu-container").css('width'))
                var deltaH = 0// menuState ? 0 : parseInt($("#menu-container").css('height'));
                var deltaW = 0// menuState ? parseInt($("#menu-container").css('width')) : 0;
                // planned: possibly factor out layout calculations into Utils or somewhere else?
                var parent = $(this.parentElement)
                var position = parent.position()
                var width = Math.min(100, position.left)

                if (width < 60 || !description) {
                    return
                }

                tooltip
                    .css({
                        'border-right': 'solid 2px #FF00FF',
                        'font-size': '13px',
                        'left': position.left - width - 5 + deltaW,
                        'min-height': parent.height(),
                        'padding-right': '7px',
                        'position': 'absolute',
                        'text-align': 'right',
                        'top': position.top + deltaH,
                        'width': width
                    })
                    .text(description)
                    .stop()
                    .fadeIn({
                        duration:100,
                        queue: false
                    })
            }, function () {
                $('.margintooltip').stop()
                $('.margintooltip').fadeOut({
                    duration: 100
                })
            })
        }
    }
}

export default Tooltip