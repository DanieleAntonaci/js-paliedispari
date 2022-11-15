'use strict'

// Input dell'utente
let userInput = prompt('Inserisci una parola polidroma').toLowerCase();

// separa le lettere
let splitUserInput = userInput.split('');
// inverte l'ordine delle lettere
let reversSplitUserInput = splitUserInput.reverse();
// riuniamo le lettere
let reversUserInput = reversSplitUserInput.join('');


// funzione di verica della parola polindroma
function polyndromeWord(splitWord, reversWord) {
    if (splitWord === reversWord) {
        console.log('La parola é polindroma');
    } else {
        console.log('La parola non é polindroma');
    }
};

// chimata di funzione
polyndromeWord(userInput, reversUserInput);