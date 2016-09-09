import Utils from '../../src/lib/utils'

describe('Utils', function() {
    describe('#hash(str)', function(){
        it('should return a string', function() {
            expect(typeof Utils.hash() === "string")
        })
    })
})