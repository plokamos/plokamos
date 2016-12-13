import History from '../../../src/lib/models/history'

describe('#History', function(){
    let history = new History({model:{}, applicator:{},bar:{navigation:{append:()=>{}}},getEndpoint:function() {return {read:"",write:"",config:""}}})
    describe('#undo', function(){})
    describe('#redo', function(){})
    describe('#add', function(){})
    describe('#reset', function(){})
    describe('#commit', function(){})
})