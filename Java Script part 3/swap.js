var a = "3";
var b = "8";

function test() {
    var temp = a;
    a = b;
    b = temp;
}


console.log("Before swapping:");
console.log("a is " + a);
console.log("b is " + b);


test();

console.log("After swapping:");
console.log("a is " + a);
console.log("b is " + b);
