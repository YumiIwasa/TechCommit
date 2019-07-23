var myArray = [[[]]];

var myFunction = function() {
    var myFunction = function() {
        var myFunction = function() {
            //空
        };
    };
};

var foo = [{
    foo: [{
        bar: {
            say: function() {
                return 'hi';
            }
        }
    }]
}];

console.log(foo[0].foo[0].bar.say());