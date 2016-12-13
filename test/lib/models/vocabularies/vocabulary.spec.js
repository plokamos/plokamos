import Vocabulary from "../../../../src/lib/models/vocabularies/vocabulary"

describe('Vocabulary', function(){
    let uri = "http://data.snapdrgn.net/ontology/snap#"
    let prefix = "snap:"
    let terms = {
        "http://data.snapdrgn.net/ontology/snap#MotherOf": "is mother of",
        "http://data.snapdrgn.net/ontology/snap#HusbandOf": "is husband of",
        "http://data.snapdrgn.net/ontology/snap#CompanionOf": "is companion of"
    }
    let vocab = new Vocabulary(uri, prefix, terms)

    describe('#namespace', function(){
        it('should return object w/ uri and prefix', function(){
            expect(vocab.namespace().uri && vocab.namespace().prefix)
        })
        it('should return constructor argument for uri', function(){
            expect(vocab.namespace().uri === uri)
        })
        it('should return constructor argument for prefix', function(){
            expect(vocab.namespace().prefix === prefix)
        })
    })

    describe('#test', function(){
        it('should accept fully qualified resource', function(){
            expect(vocab.test("http://data.snapdrgn.net/ontology/snap#MotherOf"))
        })
        it('should accept prefixed resource', function(){
            expect(vocab.test("snap:MotherOf"))
        })
        it('should accept labeled resource', function(){
            expect(vocab.test("is mother of"))
        })
        it('should reject empty string', function(){
            expect(!vocab.test(""))
        })
        it('should reject blank function call', function(){
            expect(!vocab.test())
        })
    })
    
    describe('#label', function(){
        it('should label fully qualified resources', function(){
            expect(vocab.label("http://data.snapdrgn.net/ontology/snap#MotherOf")==="is mother of")
        })
        it('should label prefixed resources', function(){
            expect(vocab.label("snap:MotherOf")==="is mother of")
        })
        it('should hand through unknown resources', function(){
            expect(vocab.label("http://www.example.org/")==="http://example.org/")
        })
        it('should map non-string arguments to empty string', function(){
            expect(vocab.label()==="")
            expect(vocab.label([])==="")
            expect(vocab.label(12.4)==="")
        })
    })

    describe('#unlabel', function(){
        it('should convert valid labels', function(){
            expect(vocab.unlabel("is mother of")==="http://data.snapdrgn.net/ontology/snap#MotherOf")
        })
        it('should return identity for unmatched strings', function(){
            expect(vocab.unlabel("http://data.snapdrgn.net/ontology/snap#ABCD")==="http://data.snapdrgn.net/ontology/snap#ABCD")
        })
        it('should return empty string for invalid arguments', function(){
            expect(vocab.unlabel()==="")
            expect(vocab.unlabel(true)==="")
            expect(vocab.unlabel({})==="")
        })
    })

    describe('#description', function(){})

    describe('#resources', function(){
        it('should return valid uris', function(){
            expect(vocab.resources()===Object.keys(terms))
        })
    })
    
})