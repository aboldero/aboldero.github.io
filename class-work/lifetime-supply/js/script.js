// Add event listener.  Add click event handler.
document.querySelector('#click-me').onclick = calculate;

function calculate () {
	// Assign variables.
	var currentAge = document.querySelector('#age').value;
	var maxAge = document.querySelector('#max-age').value;
	var drinksPerDay = document.querySelector('#num-per-day').value;
	var favoriteDrink = document.querySelector('#item').value;
	// Transform strings to numbers.
	currentAge = parseInt(currentAge);
	maxAge = parseInt(maxAge);
	drinksPerDay = parseInt(drinksPerDay);
	// Formula: (maxage - age) * drinks per day * 365
	var drinksLeft = (maxAge - currentAge) * drinksPerDay * 365
	document.querySelector('#drink').innerHTML = favoriteDrink;
	document.querySelector('#solution').innerHTML = drinksLeft;

}