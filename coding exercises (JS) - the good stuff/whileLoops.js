console.log("Print all numbers between -10 and 19");

var x = -10;
while(x < 20 ) {
	console.log(x);
 x++;}

console.log("Print all even numbers between 10 and 40");

var even = 10;
while(even <=40) {
	if(even % 2 ===0){
	console.log(even);
	}
	even+=1;
}


console.log("Print all odd numbers between 300 and 333");

var odd = 300;
while(odd <= 333) {
	if(odd % 2 !== 0){
	console.log(odd);
	}
	odd+=1;
}

console.log("Print all numbers divisible by both 5 AND 3 between 5 and 50");

var counter = 5;

while(counter <=50) {
	if(counter % 5 ===0 && counter % 3 ===0) {
		console.log(counter);
	}
	counter+=1;
}