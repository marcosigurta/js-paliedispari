// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

var pariDispari = prompt('Pari o dispari?');
var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
var numCpu = getRandomInt(1,5);
var somma = numCpu + numeroUtente;
console.log(numeroUtente, numCpu, somma);

if (dispariPari(somma) == pariDispari) {
    console.log("Hai vinto!");
} else { 
    console.log('hai perso');
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function dispariPari(numeroUtente) {
      if (numeroUtente % 2 == 0) {
          return true;
      } else {
          return false;
      }
  }

  
 