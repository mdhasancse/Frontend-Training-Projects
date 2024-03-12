function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback(); // callback is a parameter of fetchdata and processData is argument 
    }, 2000);
}


// This is callback functio
function processData() {
    console.log("Data processed!");
}

fetchData(processData);




// The fetchData function is called with processData as an argument. This means that processData is the callback function that will be 
// executed when the asynchronous operation inside fetchData is complete.
// In this case, after a 2-second delay (simulated by setTimeout), "Data fetched!" is logged to the console, and then processData is invoked.
