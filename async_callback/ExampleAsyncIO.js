// Requiring fs module - fs is used for File I/O
let fs = require('fs');

let filename1 = "courseDetails.json";
let filename2 = "sampleData.json";

/*
 Architect thinking:
 I need to read a file, but I don't want my application to freeze while waiting.
 `fs.readFile` is the perfect tool. It takes a callback that will run only when the file is ready.
 This is a non-blocking, asynchronous operation.
*/
// Reading the file Asynchronously - Not blocking the rest of execution
function readFile1(filename1) {
    // Using fs.readFile to read the file asynchronously.
    // The second argument is a callback function that Node.js will execute upon completion.
    fs.readFile(filename1, (err, data) => {
        // The callback follows the error-first pattern. Always check for `err` first.
        if (err) {
            console.log(err);
        } else {
            // If no error, `data` contains the file content.
            console.log("\n\nThe content of the file is \n\n" + data);
            console.log("Completed reading file1");
        }
    });
}

function readFile2(filename2) {
    // This function works the same way as readFile1, for a different file.
    fs.readFile(filename2, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("\n\nThe content of the file is \n\n" + data);
            console.log("Completed reading file2");
        }
    });
}

/*
 Architect thinking:
 I will call both file reading functions one after another.
 Because they are asynchronous, they will likely run in parallel.
 The "All done!" message should appear almost instantly, before the file contents are printed.
 This proves the non-blocking nature of the code.
*/
// Log message before reading the first file
console.log('Before reading the file-1');
readFile1(filename1); // This starts the read, but doesn't wait for it to finish.

// Log message before reading the second file
console.log('Before reading the file-2');
readFile2(filename2); // This also starts and doesn't wait.

// This message will be logged to the console immediately.
console.log('All done!');
