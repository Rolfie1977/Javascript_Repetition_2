/****************************************************
 * LEKTION 1 - Variabler, events og conditionals    *
 ****************************************************/

// Opgave 1
// Du skal i denne opgave redegøre for forskellen mellem en let, var og const.
// Det vil sige at du skal illustrere hvad der sker når man forsøger at ændre en
// var, en let og en const. Du skal bruge console.log til at demonstrere dette.
//_______________________________________________________________________________

// var example
console.log("var example:");
var x = 10;
console.log(x); // Output: 10

x = 20;
console.log(x); // Output: 20

var x = 30; // Omdefinition er tilladt
console.log(x); // Output: 30

// let example
console.log("let example:");

let y = 10;
console.log(y); // Output: 10

y = 20;
console.log(y); // Output: 20

//let y = 30; // Dette vil give en fejl: SyntaxError: Identifier 'y' has already been declared

// const example
console.log("const example:");

const z = 10;
console.log(z); // Output: 10

// z = 20; // Dette vil give en fejl: TypeError: Assignment to constant variable.
// const z = 30; // Dette vil give en fejl: SyntaxError: Identifier 'z' has already been declared

// Opgave 2
// I denne opgave skal du bruge aritmetik til at lave nogle regnestykker.
// Du skal løse følgende:
// 992 + 237 = ?
// 44 - 12 = ?
// 142 * 23 = ?
// 94 / 23  = ?d
// Svarene skal ligesom opgaven ovenfor vises i hver sin console.log

// I denne opgave skal du bruge aritmetik til at lave nogle regnestykker.

// 992 + 237 = ?
console.log("992 + 237 =", 992 + 237); // Output: 1229

// 44 - 12 = ?
console.log("44 - 12 =", 44 - 12); // Output: 32

// 142 * 23 = ?
console.log("142 * 23 =", 142 * 23); // Output: 3266

// 94 / 23  = ?
console.log("94 / 23 =", 94 / 23); // Output: 4.086956521739131

//_______________________________________________________________________________

// Opgave 3
// Du skal nu lave en click counter med et onclick event. Din click counter skal have en knap
// der gennem Javascript får tildelt en eventlistener. Antal af clicks skal vises i DOM´en.
document.addEventListener("DOMContentLoaded", function () {
	let clickCount = 0;
	const clickButton = document.getElementById("clickButton");
	const clickCountDisplay = document.getElementById("clickCount");

	clickButton.addEventListener("click", function () {
		clickCount++;
		clickCountDisplay.textContent = clickCount;
	});
});
//_______________________________________________________________________________

// Opgave 4
// I denne opgave skal du lave et input felt med validering. Du skal bruge en eventlistener til at måle på om brugeren
// har indtastet mere end 8 bogstaver. Hvis ikke brugeren har indtastet mere en 8 bogstaver skal der vises en fejl besked
// under input feltet, der beder brugeren om at indtaste mindst 8 bogstaver.

// Input Felt med Validering
const inputField = document.getElementById("inputField");
const errorMessage = document.getElementById("error-message");

inputField.addEventListener("input", function () {
	const value = inputField.value;
	let message = "";
	// Tjekker om længden er mindre end 8 karakterer
	if (value.length < 8) {
		message += "Indtast mindst 8 bogstaver.<br>";
	}
	// Tjekker om længden er større end 20 karakterer
	if (value.length > 20) {
		message += "Må ikke være længere end 20 karakterer.<br>";
	}

	// Tjekker om der er mindst ét stort bogstav
	if (!/[A-Z]/.test(value)) {
		message += "Indtast mindst ét stort bogstav.<br>";
	}

	// Tjekker om der er mindst ét tegn, der ikke er et bogstav
	if (!/[^a-zA-Z]/.test(value)) {
		message += "Indtast mindst ét tegn, der ikke er et bogstav.<br>";
	}

	// Viser eller skjuler fejlmeddelelsen baseret på valideringsresultaterne
	if (message) {
		errorMessage.innerHTML = message;
		errorMessage.style.display = "block";
	} else {
		errorMessage.style.display = "none";
	}
});

//_________________________________________________________________________________

// Opgave 5
// I denne opgave skal du indele en side i fire lige store firkanter. Du skal herefter bruge en eventlistener til at
// måle om brugeren fører musen ind over hver af de fire firkanter. Når musen rammer en firkant skal den skifte farve til en
// tilfældigt genereret farve.
// Firkant Farveskift
function getRandomColor() {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
	box.addEventListener("mouseenter", function () {
		box.style.backgroundColor = getRandomColor();
	});
});

//_________________________________________________________________________________

// Opgave 6
// I denne opgave skal du arbejde videre på input feltet fra opgave 4. Du skal nu tilføje følgende betingelser til valideringen.
//  - Brugeren skal indtaste et stort bogstav.
//  - Brugeren skal indtaste et tegn som ikke er et bogstav.
//  - Brugeren må ikke indtaste en string som er længere end 20 karakterer.
//_________________________________________________________________________________
