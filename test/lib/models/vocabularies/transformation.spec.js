import Transformation from '../../../../src/lib/models/vocabularies/transformation'

let rules =
[[
    {
        constraint:"http://data.perseids.org/meta#Predicate",
        value: "http://data.snapdrgn.net/ontology/snap#has-bond",
        source: "http://data.perseids.org/meta#Subject",
        target: "http://data.perseids.org/meta#Subject"
    },{
        constraint:"http://data.perseids.org/meta#Predicate",
        value: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
        source: "http://data.perseids.org/meta#Object",
        target: "http://data.perseids.org/meta#Predicate"
    },{
        constraint:"http://data.perseids.org/meta#Predicate",
        value: "http://data.snapdrgn.net/ontology/snap#bond-with",
        source: "http://data.perseids.org/meta#Object",
        target: "http://data.perseids.org/meta#Object"
    }
]]

let bodies = {
    singleBndg: {
        in: [
            /*{
                g:{type:"uri",value:"http://data.perseus.org/graphs/persons"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                p:{type:"uri",value:"http://www.w3.org/1999/02/22-rdf-syntax-ns#type"},
                o:{type:"uri",value:"http://www.w3.org/ns/oa#Annotation"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/graphs/persons"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                p:{type:"uri",value:"http://www.w3.org/ns/oa#hasTarget"},
                o:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/graphs/persons"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#target-1"},
                p:{type:"uri",value:"http://www.w3.org/ns/oa#hasSelector"},
                o:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#selector-1"}
            },*/
            {
                g:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"},
                p:{type:"uri",value:"http://www.w3.org/1999/02/22-rdf-syntax-ns#type"},
                o:{type:"uri",value:"http://data.snapdrgn.net/ontology/snap#DaughterOf"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                s:{type:"uri",value:"http://data.perseus.org/people/smith:harmonia-1#this"},
                p:{type:"uri",value:"http://data.snapdrgn.net/ontology/snap#has-bond"},
                o:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"},
                p:{type:"uri",value:"http://data.snapdrgn.net/ontology/snap#bond-with"},
                o:{type:"uri",value:"http://data.perseus.org/people/smith:aphrodite-1#this"}
            }
        ],
        out: [
            {
                //g:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09", todo: enable full annotations and graph property
                s:"http://data.perseus.org/people/smith:harmonia-1#this",
                p:"http://data.snapdrgn.net/ontology/snap#DaughterOf",
                o:"http://data.perseus.org/people/smith:aphrodite-1#this"
            }
        ]
    },
    singleGspo: {
        in: [
            /*{
                g:"http://data.perseus.org/graphs/persons",
                s:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09",
                p:"http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                o:"http://www.w3.org/ns/oa#Annotation"
            },
            {
                g:"http://data.perseus.org/graphs/persons",
                s:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09",
                p:"http://www.w3.org/ns/oa#hasTarget",
                o:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#target-1"
            },
            {
                g:"http://data.perseus.org/graphs/persons",
                s:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#target-1",
                p:"http://www.w3.org/ns/oa#hasSelector",
                o:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#selector-1"
            },*/
            {
                g:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09",
                s:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1",
                p:"http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                o:"http://data.snapdrgn.net/ontology/snap#DaughterOf"
            },
            {
                g:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09",
                s:"http://data.perseus.org/people/smith:harmonia-1#this",
                p:"http://data.snapdrgn.net/ontology/snap#has-bond",
                o:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"
            },
            {
                g:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09",
                s:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1",
                p:"http://data.snapdrgn.net/ontology/snap#bond-with",
                o:"http://data.perseus.org/people/smith:aphrodite-1#this"
            }
        ],
        out: [
            {
                //g:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09",
                s:"http://data.perseus.org/people/smith:harmonia-1#this",
                p:"http://data.snapdrgn.net/ontology/snap#DaughterOf",
                o:"http://data.perseus.org/people/smith:aphrodite-1#this"
            }
        ]
    },
    multipleBndg: {
        in: [
            /*{
                g:{type:"uri",value:"http://data.perseus.org/graphs/persons"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                p:{type:"uri",value:"http://www.w3.org/1999/02/22-rdf-syntax-ns#type"},
                o:{type:"uri",value:"http://www.w3.org/ns/oa#Annotation"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/graphs/persons"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                p:{type:"uri",value:"http://www.w3.org/ns/oa#hasTarget"},
                o:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/graphs/persons"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#target-1"},
                p:{type:"uri",value:"http://www.w3.org/ns/oa#hasSelector"},
                o:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#selector-1"}
            },*/
            {
                g:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"},
                p:{type:"uri",value:"http://www.w3.org/1999/02/22-rdf-syntax-ns#type"},
                o:{type:"uri",value:"http://data.snapdrgn.net/ontology/snap#DaughterOf"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                s:{type:"uri",value:"http://data.perseus.org/people/smith:harmonia-1#this"},
                p:{type:"uri",value:"http://data.snapdrgn.net/ontology/snap#has-bond"},
                o:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"},
                p:{type:"uri",value:"http://data.snapdrgn.net/ontology/snap#bond-with"},
                o:{type:"uri",value:"http://data.perseus.org/people/smith:aphrodite-1#this"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-2"},
                p:{type:"uri",value:"http://www.w3.org/1999/02/22-rdf-syntax-ns#type"},
                o:{type:"uri",value:"http://data.snapdrgn.net/ontology/snap#MotherOf"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                s:{type:"uri",value:"http://data.perseus.org/people/smith:aphrodite-1#this"},
                p:{type:"uri",value:"http://data.snapdrgn.net/ontology/snap#has-bond"},
                o:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-2"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-2"},
                p:{type:"uri",value:"http://data.snapdrgn.net/ontology/snap#bond-with"},
                o:{type:"uri",value:"http://data.perseus.org/people/smith:harmonia-1#this"}
            }
        ],
        out: [
            {
                //g:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09",
                s:"http://data.perseus.org/people/smith:harmonia-1#this",
                p:"http://data.snapdrgn.net/ontology/snap#DaughterOf",
                o:"http://data.perseus.org/people/smith:aphrodite-1#this"
            },
            {
                //g:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09",
                s:"http://data.perseus.org/people/smith:aphrodite-1#this",
                p:"http://data.snapdrgn.net/ontology/snap#MotherOf",
                o:"http://data.perseus.org/people/smith:harmonia-1#this"
            }
        ]
    },
    invalidBndg: {
        in: [],
        out: []
    },
    nonmatchingBndg: {
        in: [
            {
                g:{type:"uri",value:"http://data.perseus.org/graphs/persons"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                p:{type:"uri",value:"http://www.w3.org/1999/02/22-rdf-syntax-ns#type"},
                o:{type:"uri",value:"http://www.w3.org/ns/oa#Annotation"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/graphs/persons"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                p:{type:"uri",value:"http://www.w3.org/ns/oa#hasTarget"},
                o:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"}
            },
            {
                g:{type:"uri",value:"http://data.perseus.org/graphs/persons"},
                s:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#target-1"},
                p:{type:"uri",value:"http://www.w3.org/ns/oa#hasSelector"},
                o:{type:"uri",value:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#selector-1"}
            }
        ],
        out: [{}]
    }
}


describe('Transformation', function(){

    let transform = new Transformation(rules)

    describe('#simplify', function(){
        it('simplifies a bindings body', function(){
            expect(transform.simplify(bodies.singleBndg.in)).to.deep.equal(bodies.singleBndg.out)
        })
        it('simplifies a gspo body', function(){
            expect(transform.simplify(bodies.singleGspo.in)).to.deep.equal(bodies.singleGspo.out)
        })
        //it('simplifies multiple matches at once', function(){
            //expect(transform.simplify(bodies.multipleBndg.in)).to.deep.equal(bodies.multipleBndg.out)
        //})
        it('returns empty object non-matching bodies', function(){
            expect(transform.simplify(bodies.nonmatchingBndg.in)).to.deep.equal(bodies.nonmatchingBndg.out)
        })
    })
    //describe('#expand', function(){})
})