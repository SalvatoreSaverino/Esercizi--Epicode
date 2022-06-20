console.log(new Date); // DATA DI OGGI
console.log(new Date("08 15 2005 10:20:30")); // DATA MANUALE
console.log(new Date("2005 08 15")); // Anno - Mese - Giorno (Se non settiamo l'ora ci darà 0:00:00 )
console.log(new Date().getFullYear()); // Anno Attuale
console.log(new Date().getMonth()+1); // Mese Attuale + 1 poichè il conteggio parte da zero
console.log(new Date().getDate()); // Giorno del Mese
console.log(new Date().getDay()); // Giorno della Settimana
console.log(new Date().getHours()); // Ora Attuale

// Data in HTML

const a = new Date();
let text = a.toDateString();
document.getElementById("demo").innerHTML = text;

// Formattare Data//

let dataItaliana = new Intl.DateTimeFormat("it-IT").format() ;
console.log(dataItaliana);

// Opzioni//
let options = {
    year:"numeric", month:"long", day:"numeric", hour:"numeric", minute:"numeric", second:"numeric", hour12:false, timeZone:"Europe/Rome"
};

dataItaliana = new Intl.DateTimeFormat("it-IT",options).format() ;
console.log(dataItaliana);
document.getElementById("demo2").innerHTML = dataItaliana;// Riportiamo la Data formattata sulla nostra pagina HTML
