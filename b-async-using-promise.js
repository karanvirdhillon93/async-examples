// promise version of fs module
const fs = require('fs/promises');
let jsonData = null;

fs.readFile('labs.json')
.then(result => {
  jsonData = JSON.parse(result);
  console.log('JSON Data parsed.');
})
.catch(error => {
  console.log('Error with file. ' + error);
});
console.log(jsonData); // still outputs null
