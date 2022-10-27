// *Snack1*
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma
//  degli elementi è minore di 50.

let numberList = [];
let i = 0;
let total = 0;

while(total < 50){
    
    let number = parseInt(prompt('Inserisci un numero'));
    numberList.push(number);
    total += numberList[i];
    
    console.log(`Il numero inserito è : ${number}`)

    console.log(`Il totale è : ${total}`)

    i++;
};