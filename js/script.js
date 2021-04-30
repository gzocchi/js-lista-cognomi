/*
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
*/

var arrayCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

do {
  var cognomeUtente = prompt("Scrivi il tuo cognome");
  //elimino eventuali spazi iniziali e finali + stringa minuscola
  cognomeUtente = cognomeUtente.trim().toLowerCase();
  
  // cerco eventuali numeri all'interno della stringa
  var presenzaNumeri = false;
  var n = 0;
  while (n < cognomeUtente.length && presenzaNumeri == false) {
      if (parseInt(cognomeUtente[n])) {
        presenzaNumeri = true;
      };
      n++;
  };
  
} while (cognomeUtente == "" || parseInt(cognomeUtente) || presenzaNumeri);
// ripeto la domanda se la stringa è vuota, se ha un numero iniziale o contiene un numero

// debug
console.log(cognomeUtente);

// porto il cognome ad avere la prima lettera maiuscola
var cognome = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
// porto i cognomi composti ad avere ogni prima lettera maiuscola
for (i = 0; i < cognome.length; i++) {
  if (cognome[i] == " ") {
    x = i + 1;
    y = i + 2;
    cognome = cognome.slice(0, x) + cognome.charAt(x).toUpperCase() + cognome.slice(y);
  };
};

// aggiungo il cognome manipolato all'array
arrayCognomi.push(cognome);
// ordine alfabetico
arrayCognomi.sort();
// stampo elenco cognomi
for (i = 0; i < arrayCognomi.length; i++) {
  console.log(i + 1, "-", arrayCognomi[i]);

  if (arrayCognomi[i] == cognome) {
    document.getElementById("cognomi").innerHTML += '<li id="cognome_utente">' + arrayCognomi[i] + "</li>"
  } else {
      document.getElementById("cognomi").innerHTML += "<li>" + arrayCognomi[i] + "</li>"
  };
};
