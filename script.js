//* Step 1 - Selects elements
let input = document.querySelector("#prix");
let error = document.querySelector("span");
let form = document.querySelector("#form");

//* Step 2 - Hide error

error.style.display = "none";

//* Step 3 - Create other variables
let randomNumber = Math.floor(Math.random() * 101); // In order to generate an integer number between 0 and 100, we have to multiply the generated random number with Math.random() with the number of elements thats we want :
// Math.random() * 100
// Pb = 100 will never be available, therefore, add 1 => 100 + 1
// Math.floor() => we want the largest integer less than or equal to 100

let strokes = 0; // Number of strokes/moves (everytime a user makes a proposal)

let chosenNumber;

//* Step 4 - Create a function "check"
const check = (number) => {
  // We can create an object => everytime we gonna make a new check, we gonna add an object into our browser (a div with 2 classes : instruction & less/more/correct)

  let instruction = document.createElement("div");

  if (number < randomNumber) {
    // It's more !
    // Add a content "#1 (4) It's more !"
    // Add classes
    instruction.textContent = ` #${strokes} (${number}) C'est plus !`;
    instruction.className = "instruction more";
  } else if (number > randomNumber) {
    // It's less !
    instruction.textContent = ` #${strokes} (${number}) C'est moins !`;
    instruction.className = "instruction less";
  } else {
    // It's correct !
    instruction.textContent = `#${strokes} (${number}) Félicitations, vous avez trouvé le juste prix !`;
    instruction.className = "instruction correct";
  }
  // Add element to our HTML page
  document.querySelector("#instructions").prepend(instruction);
};

//* Step 5 - Check if user enters a number
input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "inline"; // Why not "block" ? An element with "block" takes all the width of the page, the other elements go beneath one another; with "inline", the other elements go next to each other if they are also in display inline
  } else {
    error.style.display = "none";
  }
});

//* Step 6 - Act when sending the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(input.value) || input.value == "") {
    input.style.border = "0.2rem solid red"; // Invalid entry
  } else {
    strokes++; // Calculate number of strokes
    input.style.border = "0.2rem solid grey"; // Valid entry
    chosenNumber = input.value; // Store number chosen by user
    input.value = ""; // Reset input
    check(chosenNumber); // Call our function that checks if chosen number is correct
  }
});
