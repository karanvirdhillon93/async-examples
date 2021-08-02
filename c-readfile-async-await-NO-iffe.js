const fs = require('fs/promises');
let jsonData = null;

const getData = async () => {
  try {
    jsonData = JSON.parse(await fs.readFile('labs.json'));
    console.log('JSON Data parsed.');
    console.log(jsonData); // inside async function
  } catch(err) {
    console.log('Error with file. ' + err)
  }
}
getData();
console.log(jsonData); // outside async function