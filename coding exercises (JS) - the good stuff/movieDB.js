var movies = [
	{
		title: "Haunted House",
		rating: 4.5,
		hasWatched: true
	},	

	{
		title: "Frozen 2",
		rating: 3.8,
		hasWatched: false
	},

	{
		title: "Rambo: Last Blood",
		rating: 4.7,
		hasWatched: true
	},

	{
		title: "Mad Max Fury Road",
		rating: 4.2,
		hasWatched: false 
	}
]

//old code
// movies.forEach(function(movie) {
// 	var result = "You have ";
// 	if(movie.hasWatched) {
// 		result+= "watched ";
// 	} else {
// 		result+= "have not seen ";
// 	}
// 	result+= "\"" + movie.title + "\" - ";
// 	result+= movie.rating + " stars";
// 	console.log(result);
// })

//clean up the code and put everything in a separate function.

function buildString(movie) {
var result = "You have ";
	if(movie.hasWatched) {
		result+= "watched ";
	} else {
		result+= "have not seen ";
	}
	result+= "\"" + movie.title + "\" - ";
	result+= movie.rating + " stars";
	return result;
}

movies.forEach(function(movie) {
console.log(buildString(movie));
})