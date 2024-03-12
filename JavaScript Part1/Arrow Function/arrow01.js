const user = {
    username: "Aman",
    price: 990,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage();
// user.username = 'sam';
// user.welcomeMessage();

// console.log(this);


// function chai() {
//     let username = 'Aman Parjapati';
//     console.log(this.username);
// }

// chai()



// const chai = function(){
//     let username = 'Aman Parjapati';
//     console.log(this.username);
// }

// chai()



const chai = () =>{
    let username = 'Aman Parjapati';
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(4,6));


// Implicit arrow function 

// const addTwo = (num1, num2)=>  num1+num2;  OR 
const addTwo = (num1, num2)=>  (num1+num2);

console.log(addTwo(4,10));


// const addTwo = (num1, num2)=>  ({username: 'Parjapati'});

// console.log(addTwo(4,10));

