// Immediately Invoked Function Expression (IIFE)

(function chai() {  
    // chai()  It is alled name IIFE
    console.log('DB Connected');
})();

// ()()   -----  () --> fun defenition,  ()-->Executuin




// using arrow fun
( () =>{
    console.log("DB Connected two")
})();



// ";" Semicolon is important after execution(); then it will execute other IIFE fun"

( (name) =>{
    // unnamed IIFE with parameter
    console.log(`DB Connected Three ${name}`);
})('Aman');