const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

window.onload = getQuote;
btn.addEventListener("click", getQuote);

function getQuote(){
	fetch("http://quotable.io/random")
	.then(res => res.json())
	.then(data => {
		quote.innerHTML = `"${data.content}"`;
		author.innerHTML = `-${data.author}`;
	})
}