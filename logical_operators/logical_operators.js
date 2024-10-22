// AND (&&)
// The AND operator, represented by the symbols "&&", is used to combine two conditions and evaluate whether both are true. 
//If both conditions are true, the result will be… true. Otherwise, it will logically be false. For example:

var age = 25;
var hasDriverLicense = true;

// If the person is over 18 years old and has a driver's license
if (age >= 18 && hasDriverLicense) {
    console.log('The person can drive');
} else {
    console.log('The person cannot drive');
}

// OR (||)
// The OR operator, represented by the symbols "||", is used to combine two conditions and evaluate whether at least one of them is true.
// If one of the conditions is true, the result will be… true. Otherwise, it will logically be false. For example:

var haveApple = true;
var haveBanana = false;

// If the person has an apple or a banana
if (haveApple || haveBanana) {
    console.log('The person has a fruit');
} else {
    console.log('The person does not have a fruit');
}