// Path: provides a way of interacting with directories and file paths inside
// NodeJS. It is a string of characters used to identify a location in a directory structure.
// It is composed of many useful tools and methods that allows the user to access and manipulate paths in a file system.

// basename method
const path = require("path");
file = path.basename("test.json"); // returns the last portion of the path
console.log(file);

// directory name method
const path = require("path");
file = path.dirname("tutorial/test.json"); // returns the directory part of the path
console.log(file);

// join method
const path = require("path");
let dir = "tutorial";
file = path.join("C:", "Users/Danielle/Laptop", dir, "test.json"); //  allows the user to join different parts of the path and returns the complete path
console.log(file);
