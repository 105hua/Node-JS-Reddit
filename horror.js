// The purpose of this Node.JS program is to get a two sentence horror story from the TwoSentenceHorror subreddit and print it out in the console.

const got = require("got"); // Got will be used to return a random.json file from the subreddit into variables that can be printed.

got("https://www.reddit.com/r/TwoSentenceHorror/random.json").then(response => { // Get response from random.json from subreddit.
	let body = JSON.parse(response.body); // Parse the JSON file.
	let horrorTitle = body[0].data.children[0].data.title; // Get the title, as this is usually the first sentence of the horror story.
	let horrorContent = body[0].data.children[0].data.selftext; // Get the text inside of the reddit post, as this holds the second sentence.
	console.log(horrorTitle, "\n\n", horrorContent); // Return the two second horror story.
}).catch(console.error); // Log error in the console should it come to that. It usually never does.