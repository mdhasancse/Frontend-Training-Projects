
// The splice method in JavaScript is used for modifying the contents of an array by removing 
//   or replacing existing elements and/or adding new elements

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Removing elements starting from index 2, remove 2 elements
const removedElements = fruits.splice(2, 2);
console.log('Removed Elements:', removedElements); // Outputs: ['orange', 'grape']
console.log('Modified Array:', fruits); // Outputs: ['apple', 'banana', 'kiwi']

// Adding elements starting from index 1, remove 0 elements
fruits.splice(1, 0, 'pear', 'peach');
console.log('Modified Array:', fruits); // Outputs: ['apple', 'pear', 'peach', 'banana', 'kiwi'] 

// Replacing elements starting from index 3, remove 1 element
fruits.splice(3, 1, 'mango');
console.log('Modified Array:', fruits); // Outputs: ['apple', 'pear', 'peach', 'mango', 'kiwi']


