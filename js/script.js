// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
 document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var randomQuote = '';
var finalQuote = '';
// array of quote objects

let quotes = [{
	quote: "To be or not to be.  That is the question.",
	source: "William Shakespeare",
	citation: "Hamlet Act III Scene I",
	year: "1599-1602"
},
{
	quote: "Atticus told me to delete the adjectives and I'd have the facts.",
	source: "Harper Lee",
	citation: "To Kill a Mockingbird",
	year: "July 11, 1960"
},
{
	quote: "One more dance along the razor's edge finished. Almost dead yesterday, maybe dead tomorrow, but alive, gloriously alive, today.",
	source: "Robert Jordan",
	citation: "Lord of Chaos",
	year: "October 15, 1994"
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


function printQuote(randomQuote) {
	for(var i = 0 in randomQuote) {
	alert(Object.values(randomQuote));
}
	// document.write("<p class=\"quote\"> finalQuote.quote </p>
	// <p class=\"source\"> [source here]
 //  	<span class=\"citation\"> [citation here] </span>
 //  	<span class=\"year\"> [year here] </span>
	// </p>");
}
// console.log(finalQuote);
printQuote(randomQuote);
console.log(getRandomQuote(quote));

alert(Object.values(randomQuote));



// for(var i = 0 in randomQuote) {
// 	document.write(randomQuote[i]);
// }
// document.write(Object.values(randomQuote));
// rgbColor = Math.floor(Math.random() * 255) + 1
// alert(rgbColor);
// onLoad.setBackgroundColor(rgbColor)

// rgbColorFunction();

