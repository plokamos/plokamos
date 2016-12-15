import OA from '../../../../src/lib/models/ontologies/oa'

describe('OA', function(){
    describe('#getBodies', function(){})
    describe('#getTargets', function(){})
    describe('#getSelectors', function(){})
    describe('#getAnnotator', function(){})
    describe('#makeTitle', function(){})
    describe('#makeMotivation', function(){})
    describe('#makeAnnotatedAt', function(){})
    describe('#makeAnnotatedBy', function(){})
    describe('#makeCore', function(){})
    describe('#makeTarget', function(){})
    describe('#expand', function(){
        it('should have expansion rules for oa:TextQuoteSelector', function() {
            expect(OA.expand("http://www.w3.org/ns/oa#TextQuoteSelector"))
        })
        it('should know how to expand oa:TextQuoteSelector', function() {
            expect(OA.expand("http://www.w3.org/ns/oa#TextQuoteSelector")({id:"", prefix:"", exact:"", suffix:""})) // is a function
        })
        it('should return error on invalidate input', function(){

        })
    })
    describe('#simplify', function(){})
    describe('#create', function(){})
    describe('#query', function(){})
})