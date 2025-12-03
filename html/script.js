//TRACCIA :

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 
// il prezzo del biglietto è definito in base ai km (0.21 € al km) 
// va applicato uno sconto del 20% per i minorenni 
// va applicato uno sconto del 40% per gli over 65. 
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.


let inputage = parseInt( prompt("Inserisci la tua età"))
 while (isNaN(inputage)) {
    inputage= parseInt(prompt("Attenzione!Inserisci un valore numerico"))};


let inputkm = parseInt( prompt ("Inserisci il numero di km da percorrere"))
while (isNaN(inputkm)) {
    inputkm= parseInt(prompt("Attenzione! Inserisci un valore numerico"))};

let price 

if (inputage < 18) { 
    let price = (0.21 * inputkm) - (((0.21 * inputkm) * 20) / 100);
     console.log(price.toFixed(2) +"€"); } 
      else if (inputage > 65) { 
       let price = (0.21 * inputkm) - (((0.21 * inputkm) * 40) / 100);
       console.log(price.toFixed(2) +"€"); }
        else if (inputage > 18 && inputage < 65){ 
         let price = (0.21 * inputkm);
         console.log(price.toFixed(2) +"€"); };

        




