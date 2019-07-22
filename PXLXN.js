var CustomConstructor = function CustomConstructor() {
    return 'Wow!';
};

var instanceOfCustomObject = new CustomConstructor();

console.log(instanceOfCustomObject.constructor === CustomConstructor);

console.log(instanceOfCustomObject.constructor);