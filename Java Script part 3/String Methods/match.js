

 //The match method returns an array with the matches got from the string. If there is no match, the method returns null.


 //  string_variable.match(‘expression’);

var str = "Hello Cybrosys";
var match_expr = str.match("sys");
console.log(match_expr); //The console gives an array containing the expression, group, index, and input.



var str = "Hello Cybrosys";
var match_expr = str.match("xyz");
console.log(match_expr); // The console gives ‘null’ as there is no match for the expression in the string.

