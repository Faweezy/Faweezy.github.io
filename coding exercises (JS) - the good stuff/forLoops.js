console.log("Print all even numbers between 10 and 40");

for(var i = -10; i <=19; i++) {
	console.log(i);
}

console.log("Print all even numbers between 10 and 40");

for(var i = 10; i <=40; i+=1) {
	if(i % 2 ===0){
		console.log(i);
	}
}

console.log("Print all odd numbers between 300 and 333");

for(var i = 300; i <=333; i+=1) {
	if(i % 2 !==0){
		console.log(i);
	}
}

console.log("Print all numbers divisible by both 5 AND 3 between 5 and 50");

for(var i = 5; i <=50; i+=1) {
	if(i % 5 === 0 && i % 3 === 0) {
		console.log(i);

	}
}