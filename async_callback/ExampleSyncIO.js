// Requiring fs module - fs is used for File I/O
let fs = require('fs');
 
// Define the filenames to be read
let filename1 = "courseDetails.json";
let filename2 = "sampleData.json";

/*
 Architect thinking:
 I need to read a file and I must have its content before I proceed.
 The application should wait. `fs.readFileSync` is the right choice here.
 It's a blocking operation, which is sometimes necessary, especially in startup scripts.
*/
// Function to read the first file synchronously
function readFile1(filename1) {
    // Reading the file Synchronously - This BLOCKS the rest of the execution.
    // The program will pause here until the file is fully read.
    let data = fs.readFileSync(filename1);
    console.log("\n\nThe content of the file is \n\n" + data);
    console.log("Completed reading file1");
}
 
// Function to read the second file synchronously
function readFile2(filename2) {
    // This function also blocks execution.
    let data = fs.readFileSync(filename2);
    console.log("\n\nThe content of the file is \n\n" + data);
    console.log("Completed reading file2");
}

/*
 Architect thinking:
 I will call the sync functions sequentially. The "All done!" message will only appear
 after both files have been completely read, one after the other. This demonstrates
 the blocking nature of synchronous I/O.
*/
// Log message before reading the first file
console.log('Before reading file-1');
readFile1(filename1); // Execution pauses here.
 
// This line will only execute after readFile1 is completely finished.
console.log('Before reading file-2');
readFile2(filename2); // Execution pauses here again.
 
// This is the last thing to be logged.
console.log('All done!');
