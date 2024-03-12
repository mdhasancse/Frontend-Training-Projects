

// If the ‘characters’ passed are present in the string, the function returns true, else false.

var str = "Hello Cybrosys";
var is_incl = str.includes('sys');
console.log(is_incl); // The console gives the value true as the string contains the characters ‘sys’.



var str = "Hello Cybrosys";
var is_incl = str.includes('xyz');
console.log(is_incl);  //The console gives a false value as the string does not contain the characters ‘xyz’.