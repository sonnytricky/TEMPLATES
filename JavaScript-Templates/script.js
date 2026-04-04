// PSEUDOCODE:
// Start
// Frage den Benutzer nach einer Zahl
// Prüfe, ob die Zahl gerade oder ungerade ist
// Gib das Ergebnis aus
// Ende

// echte Umsetzung in JavaScript

const input = prompt("Gib eine Zahl ein:"); // Benutzer-Eingabe
const number = Number(input); // Umwandlung in Zahl

// Prüfen, ob Eingabe gültig ist
if (isNaN(number)) {
    console.log("Das ist keine gültige Zahl.");
} else {

    // PSEUDOCODE:
    // Wenn Zahl modulo 2 gleich 0 ist -> gerade
    // sonst -> ungerade

    if (number % 2 === 0) {
        console.log("Die Zahl ist gerade.");
    } else {
        console.log("Die Zahl ist ungerade.");
    }
}