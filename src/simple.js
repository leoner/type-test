define(function(require, exports, module) {
    module.exports = function() {
        totoro.log('abc', {name: 1}, 'def')
        totoro.log('aadfsfsaf')
        totoro.log({
            fn: function(){}
        })
        return 'A simple sample.'
    }
})
