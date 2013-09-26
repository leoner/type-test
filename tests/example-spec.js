define(function(require) {
    var expect = require('expect')
    var $ = require('$')

    describe('A Test Suite', function() {
        var win
        before(function(){
            win = window.open('./open.html', null, 'top=100,left=200,width=800,height=600')
        })

        after(function() {
            // totoro.log('close--')
            win.close()
        })

        it('Test arr type', function(done) {
            setTimeout(function() {
              //totoro.log($.browser, typeof win.obj)
              //totoro.log('------2---', win.obj, $.browser)
              alert(win.fn)
              done()
            }, 500)
        })
    })
})
