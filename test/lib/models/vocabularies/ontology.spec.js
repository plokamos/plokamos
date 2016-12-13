import _ from "lodash"
import Ontology from "../../../../src/lib/models/vocabularies/ontology"
import Vocabulary from "../../../../src/lib/models/vocabularies/vocabulary"
import Transformation from "../../../../src/lib/models/vocabularies/transformation"

let uri = "http://data.snapdrgn.net/ontology/snap#"
let prefix = "snap:"
let terms = {
    "http://data.snapdrgn.net/ontology/snap#MotherOf": "is mother of",
    "http://data.snapdrgn.net/ontology/snap#HusbandOf": "is husband of",
    "http://data.snapdrgn.net/ontology/snap#CompanionOf": "is companion of"
}

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

let data = {
    bndgBody:
        {
            valid: [
                {
                    g: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                    s: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"},
                    p: {type: "uri", value: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"},
                    o: {type: "uri", value: "http://data.snapdrgn.net/ontology/snap#MotherOf"}
                },
                {
                    g: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                    s: {type: "uri", value: "http://data.perseus.org/people/smith:harmonia-1#this"},
                    p: {type: "uri", value: "http://data.snapdrgn.net/ontology/snap#has-bond"},
                    o: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"}
                },
                {
                    g: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                    s: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"},
                    p: {type: "uri", value: "http://data.snapdrgn.net/ontology/snap#bond-with"},
                    o: {type: "uri", value: "http://data.perseus.org/people/smith:aphrodite-1#this"}
                }
            ],
            nonmatching: [
                {
                    g: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                    s: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"},
                    p: {type: "uri", value: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"},
                    o: {type: "uri", value: "http://data.snapdrgn.net/ontology/snap#MotherOf"}
                },
                {
                    g: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                    s: {type: "uri", value: "http://data.perseus.org/people/smith:harmonia-1#this"},
                    p: {type: "uri", value: "http://data.snapdrgn.net/ontology/snap#has-bond"},
                    o: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"}
                },
                {
                    g: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                    s: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"},
                    p: {type: "uri", value: "http://data.snapdrgn.net/ontology/snap#bond-with"},
                    o: {type: "uri", value: "http://data.perseus.org/people/smith:aphrodite-1#this"}
                }
            ],
            invalid: [
                {
                    g: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                    s: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"},
                    p: {type: "uri", value: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"},
                    o: {type: "uri", value: "http://data.snapdrgn.net/ontology/snap#MotherOf"}
                },
                {
                    g: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                    s: {type: "uri", value: "http://data.perseus.org/people/smith:harmonia-1#this"},
                    p: {type: "uri", value: "http://data.snapdrgn.net/ontology/snap#has-bond"},
                    o: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"}
                },
                {
                    g: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
                    s: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"},
                    p: {type: "uri", value: "http://data.snapdrgn.net/ontology/snap#bond-with"},
                    o: {type: "uri", value: "http://data.perseus.org/people/smith:aphrodite-1#this"}
                }
            ]
        },
    gspoBody: [
        {
            g:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09",
            s:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1",
            p:"http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            o:"http://data.snapdrgn.net/ontology/snap#MotherOf"
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
    binding: {
        g: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09"},
        s: {type: "uri", value: "http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1"},
        p: {type: "uri", value: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"},
        o: {type: "uri", value: "http://data.snapdrgn.net/ontology/snap#MotherOf"}
    },
    gspo: {
        g:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09",
        s:"http://data.perseus.org/collections/urn:cite:perseus:pdljann.56426b01cc0c0132c49b0ada42b1fd09#bond-1",
        p:"http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
        o:"http://data.snapdrgn.net/ontology/snap#MotherOf"
    },
    identifier: "http://data.snapdrgn.net/ontology/snap#MotherOf"
    }

describe('Ontology', function(){
    let ontology = new Ontology(new Vocabulary(uri,prefix,terms), new Transformation(rules))

    describe('#test', function(){
        it('returns a positive value for a matching body of bindings', function(){
            expect(_.sum(_.flattenDeep(ontology.test(data.bndgBody.valid)))).to.be.above(0)
        })
        it('returns a positive value for a matching body of gspo', function(){
            expect(_.sum(_.flattenDeep(ontology.test(data.gspoBody)))).to.be.above(0)
        })
        it('returns a positive value for a matching binding', function(){
            expect(_.sum(_.flattenDeep(ontology.test(data.binding)))).to.be.above(0)
        })
        it('returns a positive value for a matching gspo', function(){
            expect(_.sum(_.flattenDeep(ontology.test(data.gspo)))).to.be.above(0)
        })
        it('returns a positive value for a matching identifier', function(){
            expect(ontology.test(data.identifier)).to.be.above(0)
        })

        it('returns a non-positive value for an invalid body', function(){




        })
        it('returns a non-positive value for a matching gspo', function(){})
    })
})