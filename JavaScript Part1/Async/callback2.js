function displayGreeting(displayName){
    console.log("hello");
    displayName();
    console.log("Good evening")
}

function displayName(){
    console.log("pranetha")
}

displayGreeting(displayName);



// output 
// hello
// pranetha
// good evening