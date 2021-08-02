// node.js file system module
const fs = require('fs');
let jsonData = null;

// fs.readFile is an async function
fs.readFile('labs.json',
  (err, result) => {
    if (err) {
      console.error('Error while reading file.');
    } else {
      try {
        // De-serialize JSON to JS Object
        jsonData = JSON.parse(result);
        console.log("JSON data parsed.");
      } catch (e) {
        console.log('Not valid JSON.');
      }
    }
  }
);

console.log(jsonData);
