'use strict'
let pariODisapari = prompt('Pari o dispari?').toLowerCase();
let userInput = parseInt(prompt('Inserisci un numero tra 1 e 5'));
let computerRandom = Math.floor(Math.random() * 5) + 1;
let additionResult
console.log(userInput, computerRandom,);

// verifica se ci sono i requisiti per il gioco
if (!Number.isNaN(userInput) && (pariODisapari === 'pari' || pariODisapari === 'dispari')) {
    additionResult = addition(userInput, computerRandom);
    winner(additionResult);
} else {
    // se sono stati sbagliati gli input
    console.log('Hai sbagliato gli input');
};

// calcola la somma dei numeri
function addition(numberUser, numberComputer) {
    let addition = numberUser + numberComputer;
    return addition
};

// verifica chi ha vinto
function winner(result) {
    if (result % 2 === 0) {
        pariODisapari === 'pari' ? console.log('Hai vinto!') : console.log('Hai perso!');;
    } else {
        pariODisapari === 'dispari' ? console.log('Hai vinto!') : console.log('Hai perso!');;
    }
}