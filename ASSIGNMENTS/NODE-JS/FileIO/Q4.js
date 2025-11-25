 const fs = require('fs'); 
let arr = ["aaa", "bbb", "ccc"]; 
// Convert array → string with pipe (|) 
let data = arr.join("|"); 
// Write to file names.txt 
fs.writeFile("names.txt", data, (err) => { 
if (err) { 
console.log("Error writing file:", err); 
} else { 
console.log("names.txt written successfully!"); 
} 
}); 

