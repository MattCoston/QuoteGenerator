// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// array of quote objects
let quotes = [{
	quote: "To be or not to be",
	source: "William Shakespeare",
	citation: "Hamlet",
	year: "Middle English"
},
{
	quote: "2",
	source: "Harper Lee",
	citation: "PAGE NUMBER",
	year: "2"
},
{
	quote: "3",
	source: "Harper Lee",
	citation: "PAGE NUMBER",
	year: "30"
},
{
	quote: "4",
	source: "Harper Lee",
	citation: "PAGE NUMBER",
	year: "40"
},
{
	quote: "5",
	source: "Harper Lee",
	citation: "PAGE NUMBER",
	year: "50"
},
{
	quote: "6",
	source: "Harper Lee",
	citation: "PAGE NUMBER",
	year: "60"
}];

// generates a number between 1 and 6
quote = Math.floor(Math.random() * 6) + 1;
console.log(quote);

// selects random quote from previously generated quote variable

function getRandomQuote(quote){

	if (quote === 1) {
		randomQuote = (quotes[0]);
		return randomQuote;
	}
	else if (quote === 2) {
		randomQuote = (quotes[1]);
		return randomQuote;
	}
	else if (quote === 3) {
		randomQuote = (quotes[2]);
		return randomQuote;
	}
	else if (quote === 4) {
		randomQuote = (quotes[3]);
		return randomQuote;
	}
	else if (quote === 5) {
		randomQuote = (quotes[4]);
		return randomQuote;
	}
	else if (quote === 6) {
		randomQuote = (quotes[5]);
		return randomQuote;
	}
}


function printQuote() {
	finalQuote = getRandomQuote(randomQuote);
	// document.write("<p class=\"quote\"> finalQuote.quote </p>
	// <p class=\"source\"> [source here]
 //  	<span class=\"citation\"> [citation here] </span>
 //  	<span class=\"year\"> [year here] </span>
	// </p>");
}

console.log(getRandomQuote(quote));
// rgbColor = Math.floor(Math.random() * 255) + 1
// alert(rgbColor);
// onLoad.setBackgroundColor(rgbColor)

// rgbColorFunction();

