var numbers = process.argv.slice(2);

// var sum = numbers.reduce(function(x,y){
// 	return Number(x) + Number(y);
// });
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
	sum += Number(numbers[i]);
};

console.log(sum);