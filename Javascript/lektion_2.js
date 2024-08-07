/************************************
 * Lektion 2 - Objects & functions  *
 ************************************/

// Opgave 1
// I denne opgave skal du lave en funktion der kan tjekke længden på en given string.
// Din funktion skal altså tage imod et argument (din string der skal tjekkes) og returnere et resultat i form af et tal.
// Funktionen skal kaldes og du skal gemme resultatet, hvorefter string + resultat skal printes i en console.log,
// så der står i konsollen: "Relativitetsteori er 17 bogstaver langt".

console.log("JavaScript file is loaded");

// Definer funktionen der tjekker længden på en string
function checkStringLength(str) {
	console.log("Input string: " + str); // Debug udsagn
	return str.length;
}

// Den string vi vil tjekke længden på
let myString = "Relativitetsteori";
console.log("Original string: " + myString); // Debug udsagn

// Kald funktionen og gem resultatet
let lengthOfString = checkStringLength(myString);
console.log("Length of string: " + lengthOfString); // Debug udsagn

// Print resultatet i konsollen
console.log(myString + " er " + lengthOfString + " bogstaver langt");

//________________________________________________________________________________________________

// Opgave 2
// Du skal i denne opgave lave et objekt der indeholde følgende:
// - Fornavn, Efternavn, Email, Telefonnummer, Adresse og Postnummer.
// Objektet skal printes ud i en console.log

// Opret et objekt med de ønskede egenskaber
let person = {
	fornavn: "Rolf",
	efternavn: "M",
	email: "rolfie@example.com",
	telefonnummer: "12345678",
	adresse: "Lollandsgade",
	postnummer: "9000",
};

// Print objektet i konsollen
console.log(person);
//________________________________________________________________________________________________

// Opgave 3
// Du skal nu lave en funktion der kan ændre på en værdi i et objekt.
// Funktionen skal kunne tage imod tre argumenter; objektet der skal ændres, hvilken "key" der skal ændres på,
// og til sidst hvad den nye "value" skal være.
// Til slut skal din funktion returnere det nye modificerede objekt og printe dette i en console.log.
// Du kan med fordel bruge objektet du lavede i opgave 2 til at ændre på en value.
// Definer funktionen der ændrer en værdi i et objekt
function changeObjectValue(obj, key, newValue) {
	// Ændre værdien af nøglen i objektet
	obj[key] = newValue;
	// Returnere det modificerede objekt
	return obj;
}

// Brug funktionen til at ændre en værdi i objektet
let modifiedPerson = changeObjectValue(
	person,
	"email",
	"hvelplund@example.com"
);

// Print det modificerede objekt i konsollen
console.log(modifiedPerson);
//_________________________________________________________________________________________________

// Opgave 4
// Du skal i denne opgave lave en funktion der kan tjekke typeof på alle key value pairs i et objekt.
// Funktionen skal console.logge typen af hver eneste value i et objekt.
// Objektet der skal tjekkes skal kunne sendes ind i funktionen som argument.

// Opgave 4: Definer funktionen der tjekker typen af hver value i et objekt
function checkTypes(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log(`Key: ${key}, Type: ${typeof obj[key]}`);
		}
	}
}

// Kald funktionen med objektet
checkTypes(person);
//__________________________________________________________________________________________________

// Opgave 5
// I denne opgave skal du lave en "DOM Element generator" funktion.
// Din funktion skal kunne returnere et givent DOM element når den kaldes.
// Funktionen skal indeholde så mange af de gængse HTML elementers argumenter som du kan komme i tanke om.
// Den skal som minimum være i stand til at tage imod argumenterne; type, classname og id.
// Et eks. på at kalde en sådan funktion kunne se således ud: GenerateElement('div', 'someClassName', 'myID')

// Definer funktionen der genererer et DOM-element
function GenerateElement(type, className, id, innerHTML = "", attributes = {}) {
	// Opret elementet af den ønskede type
	let element = document.createElement(type);

	// Tildel classname og id
	if (className) element.className = className;
	if (id) element.id = id;

	// Tilføj indhold, hvis angivet
	if (innerHTML) element.innerHTML = innerHTML;

	// Tilføj andre attributter, hvis angivet
	for (let attr in attributes) {
		if (attributes.hasOwnProperty(attr)) {
			element.setAttribute(attr, attributes[attr]);
		}
	}

	// Returner det oprettede element
	return element;
}

// Eksempel på at kalde funktionen
let newDiv = GenerateElement("div", "someClassName", "myID", "This is a div", {
	"data-custom": "value",
});
console.log(newDiv);

// For at tilføje elementet til dokumentet (valgfrit)
document.body.appendChild(newDiv);
//__________________________________________________________________________________________________

// Opgave 6 Bonus:
// Brug din nye HTML kodegenerator funktion til at bygge et 3x3 Grid layout af div.
// Hver div skal have en forskellige background-color og inde i hver div skal der ligge et P tag.
// P taggets innerText skal være forskelligt på dem alle. Øvelsen går ud på at lave dette med så lidt kode som muligt.
