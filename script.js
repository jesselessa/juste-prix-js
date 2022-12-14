//* Step 1 - Selects elements
let input = document.querySelector("#prix");
let error = document.querySelector("span");
let form = document.querySelector("#form");

//* Step 2 - Hide error

error.style.display = "none";

//* Step 3 - Generate a random number between 0 and 100
// In order to generate an integer number between 0 and 100, we have to multiply the generated random number with Math.random() with the number of elements thats we want :
// Math.random() * 100
// Pb = 100 will never be available, therefore, add 1 => 100 + 1
// Math.floor() => we want an integer number
let randomNumber = Math.floor(Math.random() * 101);

//* Step 4 - Check if user enters a number

//* Step 5 - Act when sending the form

//* Step 6 - Create function "check"
