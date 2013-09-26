define(function(require) {
    var expect = require('expect')
    var $ = require('$')
    var browser = $.browser
    var isIE = browser.msie
    var isOldIE = isIE && parseInt(browser.version) < 10

    describe('A Test Suite', function() {
        var win
        before(function(){
            win = window.open('./open.html', 'open', 'top=100,left=200,width=800,height=600')
        })

        after(function() {
            // totoro.log('close--')
            win.close()
        })

        function isType(type) {
            return function(obj) {
                return {}.toString.call(obj) == "[object " + type + "]"
            }
        }

        var isObject = isType("Object")
        var isString = isType("String")
        var isArray = Array.isArray || isType("Array")
        var isFunction = isType("Function")

        it('Test type', function(done) {
            setTimeout(function() {

                var arr = win.arr
                var obj = win.obj
                var fn = win.fn
                var str = win.str
                var bool = win.bool
                var num = win.num
                var undef = win.undef
                var nul = win.nul

                expect(arr instanceof Array).to.be(false)
                expect(obj instanceof Object).to.be(false)
                expect(fn instanceof Function).to.be(false)

                expect(typeof undef).to.be('undefined')
                expect(typeof num).to.be('number')

                expect(isObject(obj)).to.be(true)

                // test old ie
                if (isIE) {
                    if (isOldIE) {
                        totoro.log('test old ie')
                        expect(typeof fn).to.eql('object')
                        expect(isObject(arr)).to.be(true)
                        expect(isObject(fn)).to.be(true)

                        expect(({}).toString.call(arr)).to.eql("[object Object]")
                        expect(({}).toString.call(fn)).to.eql("[object Object]")
                    } else {
                        totoro.log('test modern ie')
                        expect(typeof fn).to.eql('function')

                        expect(isArray(arr)).to.be(true)
                        expect(isFunction(fn)).to.be(true)

                        expect(({}).toString.call(arr)).to.eql("[object Array]")
                        expect(({}).toString.call(fn)).to.eql("[object Function]")

                    }
                } else {
                      totoro.log('test modern browsers')
                      expect(typeof fn).to.eql('function')

                      expect(isArray(arr)).to.be(true)
                      expect(isFunction(fn)).to.be(true)

                      expect(({}).toString.call(arr)).to.eql("[object Array]")
                      expect(({}).toString.call(fn)).to.eql("[object Function]")
                }
              done()
            }, 500)
        })
    })
})
