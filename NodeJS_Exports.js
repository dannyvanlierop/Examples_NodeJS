// Style 1
// Export all manually

// Good: Calling functions inside the module is convenient
// Bad:  module.exports becomes verbose and it's tedious to add new functions

function a() {
    b()
}

function b() {
}

module.exports = {
    a: a,
    b: b
}

// Style 2
// Write all in module.exports

// Good: All functions in the same "package" (only good I could figure out)
// Bad:  Hard to read. Wider indentation. Calling other functions is tedious

module.exports = {
    a: function() {
        module.exports.b()
    },
    b: function() {
    }
}

// Style 3
// Export 'automatically' while writing functions

// Good: module.exports is clean and no hassle needed when adding functions
// Bad: Calling function inside the module is verbose and inconvenient

var exports = {}

exports.a = function() {
    exports.b()
}

exports.b = function() {
}

module.exports = exports


// Style 4
// Good for a utils module

// Good: Calling functions inside module is convenient and module.exports is
//       clean
// Bad:  Syntax is not so clear, though that is arguable

var exports = {}

var a = exports.a = function() {
    b()
}

var b = exports.b = function() {
}

module.exports = exports

// Style 5
//Tools.js
module.exports = function() { 
    this.sum = function(a,b) { return a+b };
    this.multiply = function(a,b) { return a*b };
    //etc
}

//App.js
require('tools.js')();
sum(1,2);
