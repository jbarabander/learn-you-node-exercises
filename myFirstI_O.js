var fs = require('fs');
var filename = process.argv[2];
console.log(fs.readFileSync(filename).toString().split('\n').length - 1);