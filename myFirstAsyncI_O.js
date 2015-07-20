var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename, 'utf8', function(error, data){
		console.log(data.split('\n').length - 1);
});