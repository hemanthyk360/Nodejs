var fs = require('fs');

// create files
// fs.open('file8.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   }); 

// Add content to the existing file
//if file not existing it will create and append the content
fs.appendFile('file81.txt', 'Hello New content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 


