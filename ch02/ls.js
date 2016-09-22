// Simple implementation of ls

var fs = require('fs');
var files = fs.readdirSync('.');
for (fn in files) {
  console.log(files[fn]);
}
