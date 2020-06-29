// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// var parola = prompt('inserisci parola');
//  var palindrome = parola.split('').reverse('').join('');
//  console.log(palindrome);
//  if (parola == palindrome) {
//      console.log('Palindrome')
//  } else {
//      console.log('Not palindrome')
//  }

/////////////////////////////////////
/////////////////////////////////////

var parola = prompt("inserisci parola");
console.log(checkPalindrome(parola));
function checkPalindrome(parola) {
    var palindrome = parola.split("").reverse().join("");
    if (parola == palindrome) {
        return true + " Palindroma";
    } else {
        return false + " No palindroma";
    }
}
