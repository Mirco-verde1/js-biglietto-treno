

var Km = prompt("Quanti chilometri devi percorrere?"); //chilometri necessari di chi sta prenotando
Km = parseInt(Km);


var kmCost = 0.21; //costo per chilometro del biglietto


var Age = prompt("qual'è la tua età?"); // età di chi sta prenotando
Age = parseInt(Age);

var ticketCost = (Km * kmCost);   // Costo del biglietto.


var contenuto = document.getElementById('content'); // risultati che andranno visualizzati in html

var discount1 = (ticketCost / 100 * 20); //sconto 20% inferiore ai 18 anni
var discount2 = (ticketCost / 100 * 40); // sconto 40% over 65



// calcolo sconto minorenni del 20%
if( Age < 18) {contenuto.innerText = (ticketCost - discount1)
alert('Prezzo scontato del 20% per i minorenni!')
}
else {
   contenuto.innerText = (ticketCost)

};



// calcolo sconto over 65 del 40%
if( Age >= 65) { contenuto.innerText = (ticketCost - discount2)
alert('Prezzo scontato del 40% per gli over 65!')
}
else {
   contenuto.innerText = (ticketCost)

};
