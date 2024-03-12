function displayGreeting(displayName){
    console.log("hello");
    displayName();
    console.log("Good evening")
}

displayGreeting(function() {
    console.log("Hi good morning");
});


// output: 
// hello
// Hi good morning
// Good evening