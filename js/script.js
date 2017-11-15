
// a couple of variables for use later.
let randomQuote = '';
let finalQuote = '';
let timeoutID;

// array of quote objects

let quotes = [{
	quote: "To be or not to be.  That is the question.",
	source: "William Shakespeare ",
	citation: "Hamlet Act III Scene I ",
	year: "1599-1602 ",
	tags: "Source: Plays"
},
{
	quote: "Atticus told me to delete the adjectives and I'd have the facts.",
	source: "Harper Lee",
	citation: "To Kill a Mockingbird ",
	year: "July 11, 1960 ",
	tags: "Source: American Literature"
},
{
	quote: "One more dance along the razor's edge finished. Almost dead yesterday, maybe dead tomorrow, but alive, gloriously alive, today.",
	source: "Robert Jordan ",
	citation: "Lord of Chaos ",
	year: "October 15, 1994 ",
	tags: "Source: Fantasy"
},
{
	quote: "Not all those who wander are lost.",
	source: "J. R. R. Tolkien ",
	citation: "The Lord of the Rings ",
	year: "",
	tags: "Source: Fantasy"
},
{
	quote: "Make it so.",
	source: "Captain Jean-Luc Picard",
	citation: "Star Trek: The Next Generation",
	year: "S1:E1 - Encounter at Farpoint ",
	tags: "Source: Television"
},
{
	quote: "I took the one less traveled by, And that has made all the difference.",
	source: "Robert Frost ",
	citation: "The Road Not Taken ",
	year: "1916 ",
	tags: "Source: Poetry"
}];

// generates a random number multiplied by the number of quotes objects in the array
// then returns and stores it into a random variable and returns it for use later
function getRandomQuote(){
	var random = quotes[Math.floor(Math.random() * quotes.length)];
	return random;

}

// assigns variable finalQuote to function getRandomQuote
// logs the interaction in console then pushes objects values to the page

function printQuote()
{	
	let finalQuote = getRandomQuote();
	console.log(finalQuote);
	document.getElementById('quote-box').innerHTML = 
	'<p class="quote">' + finalQuote.quote + '</p>' +
	'<p class="source">' + finalQuote.source + '</p>' +
  	'<span class="citation">' + finalQuote.citation + '</span>' +
  	'<span class="year">' + finalQuote.year + '</span>'  + 
  	'<span class="tags">' + finalQuote.tags + '</span> </p>';
}
// color change function for generating three R G B values then changing the background color randomly

function colorChange()
{
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);
		var rgbColor = "rgb(" + r + "," + g + "," + b + ")";
		console.log(rgbColor);

			document.body.style.background = rgbColor;
}

// function to refresh the page after 7 seconds

function timeToRefresh() {
  timeoutID = window.setTimeout(pageRefresh, 7000);
}
// function that reloads the page

function pageRefresh() {
	location.reload();
}

timeToRefresh();

// calls the final printQuote and colorChange function and attaches it to the event listener
printQuote();
colorChange();
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById("loadQuote").addEventListener("click", colorChange, false);