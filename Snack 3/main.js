// *Snack3* (Bonus)
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array,
// ognuno formato da 10 numeri casuali da 1 a 100.
// Ogni volta che ne crei uno, stampalo.


let i = 0;
let nArray = parseInt(prompt('Inserisci il numero di array che vorresti generare'));

while(i < nArray){

    let randomArray = [];
    
    for(x = 0; x < 10; x++){
        randomNumber = Math.floor(Math.random()* 100) + 1;
        randomArray.push(randomNumber);
    }
    

    i++;
    console.log(randomArray);
};