const got = require("got");

got("https://www.reddit.com/r/terraria/random.json").then(response => {
	let body = JSON.parse(response.body);
	let terrariaTitle = body[0].data.children[0].data.title;
	let terrariaText = body[0].data.children[0].data.selftext;
	console.log(terrariaTitle, "\n\n", terrariaText);
}).catch(console.error);