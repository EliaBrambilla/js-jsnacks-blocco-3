// *Snack2*
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let numberList = [];
let i = 0;
total = 0;

while(i < 5){
    
    let number = parseInt(prompt('Inserisci un numero'));
    numberList.push(number);
    total = total + numberList[i];

    console.log(`numero inserito è: ${number}`)
    console.log(`totale: ${total}`)
    i++;
}