// Consegna:
// 1. chiedi all'utente il cognome
var cognomeUtente = prompt("Scrivi il tuo cognome");

// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
cognomi.push(cognomeUtente);
// debug
console.log("cognomi prima del sort: ", cognomi);

// 3. stampa la lista ordinata alfabeticamente
cognomi.sort();
// debug
console.log("cognomi dopo il sort: ", cognomi);

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for (i = 0; i < cognomi.length; i++) {
  console.log(i + 1, "-", cognomi[i]);
}
