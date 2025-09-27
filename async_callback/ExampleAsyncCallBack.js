/*
 Architect thinking: 
 I need a function that can be executed later, after some other operation completes.
 This is a classic use case for a callback function.
*/
// This method will be provided as a parameter to another function.
function firstCallBackMethod() {
    // This log will appear when the callback is finally executed.
    console.log("Inside the first call back method");
}

/*
 Architect thinking: 
 I want to demonstrate a non-blocking operation. 
 setTimeout is perfect for this. It schedules a function to run in the future
 without stopping the rest of the script.
*/
// Log message before calling setTimeout to show synchronous flow.
console.log("Going to call setTimeout with a delay of 5 seconds");

// Call the function firstCallBackMethod after a 5-second delay.
// setTimeout takes the callback function as the first argument and the delay as the second.
// The script does NOT wait here. It continues to the next line if there is one.
setTimeout(firstCallBackMethod, 5000);
