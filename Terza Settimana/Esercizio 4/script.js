var stringa = "Sto imparando JavaScript";

var nuovaStringa = stringa.toUpperCase();
document.write(nuovaStringa);
nuovaStringa = stringa.toLowerCase();
document.write(nuovaStringa + '<br>');

nuovaStringa = stringa.split("");
document.write(nuovaStringa);

alert(nuovaStringa[2] + nuovaStringa[1]);

concatenaStringa = stringa.concat(" " + nuovaStringa[10]);
alert(concatenaStringa);

nuovaStringa = stringa.slice(5, 9);
alert(nuovaStringa);
//Array

const friend1 = 'Giovanni';
const friend2 = 'Carla';

const friends = ['Giovanni', 'Carla', 'Piero', 'Mirtilla'];
console.log(friends);

alert(friends.length);
alert(friends[2]);
alert(friends[friends.length - 1]);

friends[2] = 'Massimo';
console.log(friends);

//friends = ['Roberta', 'Giulia'];
//console.log(friends);

//FUNZIONI CON ARRAY

const calcolaAnni = function(compleanno) {
    return 2022 - compleanno;
}

const anni = [1990, 2001, 2010, 1987, 2018];

const eta1 = calcolaAnni(anni[1]);
const eta2 = calcolaAnni(anni[0]);
const eta3 = calcolaAnni(anni[3]);
console.log(eta1, eta2, eta3);      // 21, 32, 35

const eta = [calcolaAnni(anni[1]), calcolaAnni(anni[0]), calcolaAnni(anni[3])];
console.log(eta);                   // [21, 32, 35]

const pet = ['coniglio', 'cane', 'gatto', 'criceto'];

const newpet = pet.push('leone');
console.log(pet);
console.log(newpet);

console.log(pet.includes('leone'));
console.log(pet.includes('giraffa'));

console.log(pet.push(23));

console.log(pet);