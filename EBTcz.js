var cody = new Object();

cody.living = true;
cody.age = 33;
cody.gender = 'male';
cody.getGender = function() { return cody.gender; };

console.log(
    cody.living,
    cody.age,
    cody.gender,
    cody.getGender
);

cody.living = false;
cody.age = 99;
cody.gender = 'female';
cody.getGender = function() { return 'Gender = ' + cody.gender; };

console.log(cody);