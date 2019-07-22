var CustomConstructor = function() { this.foo = 'bar'; }

var instanceOfCustomObject = new CustomConstructor();
console.log(instanceOfCustomObject instanceof CustomConstructor);

console.log(new Array('foo') instanceof Array);