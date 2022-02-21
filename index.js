// Variables
const dice = document.querySelector(".app__content--dice");
let advice_id = document.querySelector("#advice--id");
let advice_text = document.querySelector(".app__content--quote");

// Get the advice from the API
const getAdvice = async () => {
	await fetch("https://api.adviceslip.com/advice", {
		method: "GET",
		cache: "no-cache",
	})
		.then((response) => response.json())
		.then((data) => data.slip)
		.then((quote) => {
			// console.log(quote);

			advice_id.textContent = quote.id;
			advice_text.textContent = `“${quote.advice}”`;
		});
};

// Add event listener to get new advice
dice.addEventListener("click", getAdvice);
