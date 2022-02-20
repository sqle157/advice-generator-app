// Variables
const dice = document.querySelector(".app__content--dice");
let advice_id = document.querySelector("#advice--id");
let advice_text = document.querySelector(".app__content--quote");

// Get the advice from the API
const getAdvice = () => {
	fetch("https://api.adviceslip.com/advice")
		.then((response) => response.json())
		.then((data) => data.slip)
		.then((quote) => {
			// console.log(data);
			advice_id.textContent = quote.id;
			advice_text.textContent = "“" + `${quote.advice}` + "”";
		})
		.catch((error) => {
			console.log(error);
		});
};

// Run getAdvice function on page load
window.onload = getAdvice;

// Add event listener to get new advice
dice.addEventListener("click", getAdvice);
