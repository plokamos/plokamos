import Utils from '../../src/lib/utils'

describe('Utils', function() {
    describe('#hash(str)', function(){
        it('should return a string', function() {
            expect(typeof Utils.hash() === "string")
        })
        it('should return uniquely identifying results', function() {
            expect(Utils.hash("a") != Utils.hash("b"))
        })
        it('should be deterministic', function() {
            expect(Utils.hash("a") === Utils.hash("a"))
        })
    })
    describe('#cite(pre,post)', function(){
        it('should return a string', function() {
            expect(typeof Utils.cite() === "string")
        })
        it('should return a CITE identifier', function() {
            expect(Utils.cite("a","b").startsWith("http://data.perseus.org/collections/urn:cite:perseus:pdljann."))
        })
        it('should conform to URN and CITE specifications', function() {
            expect(Utils.cite("a","b"))
            expect(!Utils.cite())
            expect(!Utils.cite(""))
            expect(!Utils.cite("",""))
            let invalid = "%/?#:.@-[]\\\"&<>^`|{}~".split("").map(s => Utils.cite(s,"a") || Utils.cite("a",s)).reduce((acc,b) => acc || b, false)
            expect(!invalid)
        })
    })
})