const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

window.onload = getQuote(); getAdvice();
btn.addEventListener("click", getQuote);

function getQuote() {
	fetch("http://quotable.io/random")
		.then(res => res.json())
		.then(data => {
			quote.innerHTML = `"${data.content}"`;
			author.innerHTML = `-${data.author}`;
		})
}


const advicee = document.querySelector("#advice");
const btnAdvice = document.querySelector("#btnAdvice");


btnAdvice.addEventListener("click", getAdvice);

function getAdvice() {
	fetch("https://api.adviceslip.com/advice").
	then(response => {
		return response.json();
	}).then(adviceData => {
		const Adviceobj = adviceData.slip;
		advicee.innerHTML = `"${Adviceobj.advice}"`;
	}).catch(error => {
		console.log(error);
	});

}

// function getAdvice() {
// 	fetch("https://api.adviceslip.com/advice")
// 		.then(res => res.json())
// 		.then(data => {
// 			advicee.innerHTML = `${data.slip.advice}`;
// 		})
// }