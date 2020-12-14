const readline = require("readline");
const got = require("got");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Enter a subreddit name: ", function(subreddit) {
	
	const url = "https://www.reddit.com/r/" + subreddit + "/random.json";
	
		got(url).then(response => {
			let body = JSON.parse(response.body);
			let content = JSON.parse(response.body);
			let permalink = content[0].data.children[0].data.permalink;
			let redditUrl = "https://reddit.com" + permalink;
			let redditImage = content[0].data.children[0].data.url;
			let redditTitle = content[0].data.children[0].data.title;
			let redditSelftext = content[0].data.children[0].data.selftext;
			
			console.log(redditTitle);
			console.log("=========");
			console.log(redditSelftext);
			console.log("=========");
			console.log(redditImage);
			console.log("=========");
			console.log(redditUrl);
			
		}).catch(console.error);
	
});