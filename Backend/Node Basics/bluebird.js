const Promise=require('bluebird')
const fs=require('fs')
let readFileAsync=Promise.promisify(fs.readFile);
 
readFileAsync("./employeeDetails.json").then(JSON.parse).then(function (val) {
    console.log(val);
})
.catch(SyntaxError, function (e) {
    console.error("invalid json in file");
})
.catch(function (e) {
    console.error("unable to read file");
});