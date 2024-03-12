
// The toString method in JavaScript is used to convert an object to a string

const numbers = [1, 2, 3, 4, 5];
const stringRepresentation = numbers.toString();
console.log(stringRepresentation); // Outputs: "1,2,3,4,5"



const num1 = 5;
const num2 = 10;
const result = num1.toString() + num2.toString();
console.log(result); // Outputs: "510"


const myNumber = 42;
const stringNumber = myNumber.toString();
console.log(stringNumber); // Outputs: "42"



const currentDate = new Date();
const dateString = currentDate.toString();
console.log(dateString); // Outputs something like: "Tue Jan 04 2024 12:34:56 GMT+0000 (Coordinated Universal Time)"



const person = {
    name: "John",
    age: 30,
    toString: function() {
      return `Person: ${this.name}, Age: ${this.age}`;
    }
  };
  
const personString = person.toString();
console.log(personString); // Outputs: "Person: John, Age: 30"

