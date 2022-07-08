/* Commentare il codice JavaScript
I commenti sono linee di codice che
 * JavaScript ignora intenzionalmente. Essi sono un ottimo modo per lasciare
 * delle note a te stesso e ad altre persone che in seguito avranno bisogno di
 * capire cosa fa quel codice.

Ci sono due modi per scrivere commenti in
 * JavaScript:

Usando // dirai a JavaScript di ignorare il resto del testo
 * sulla riga corrente. Questo è un commento in linea:

// This is an in-line
 * comment.
Puoi fare un commento multi-linea iniziando con /* e terminando con
 */

/* This is a
multi-line comment */

// NOTA: Quando scrivi codice, dovresti aggiungere regolarmente dei commenti per
// chiarire la funzione di parti del tuo codice. Un buon commento può aiutare a
// comunicare l'intento del tuo codice, sia agli altri che a te stesso in
/* // futuro. chiarare le variabili in JavaScript

In informatica, i dati sono
 * tutto ciò che è significativo per il computer. JavaScript fornisce otto
 * diversi tipi di dati che sono undefined, null, boolean, string, symbol,
 * bigint, number e object.

Per esempio, i computer distinguono tra numeri
 * (come il numero 12) e strings (come "12", "dog", o "123 cats"), che sono
 * sequenze di caratteri. I computer possono eseguire operazioni matematiche su
 * un numero, ma non su una stringa.

Le variabili consentono ai computer di
 * archiviare e manipolare i dati in modo dinamico. Lo fanno utilizzando una
 * "etichetta" per puntare ai dati piuttosto che usare i dati stessi. Ognuno
 * degli otto tipi di dati può essere conservato in una variabile.

Le variabili
 * sono simili alle variabili x e y che usi nella matematica, cioè sono un nome
 * semplice per rappresentare i dati a cui vogliamo riferirci. Le variabili del
 * computer differiscono dalle variabili matematiche in quanto possono
 * memorizzare valori diversi in momenti diversi.

Diciamo a JavaScript di
 * creare o dichiarare una variabile mettendo di fronte la parola chiave var, in
 * questo modo:

var ourName;

In JavaScript terminiamo le istruzioni con i punti e virgola.I nomi delle variabili possono essere costituiti da numeri,
lettere e $ o _ ,ma non possono contenere spazi o iniziare con un numero.Memorizzare valori con l 'operatore di assegnazione.

In JavaScript,
puoi memorizzare un valore in una variabile con l 'operatore di assegnazione (=).

myVariable = 5;
Questo assegna il valore Number 5 a myVariable.Se sono presenti calcoli a destra dell 'operatore =, 
vengono eseguiti prima che il valore venga assegnato alla variabile
myVar = 5;  
Innanzitutto,
questo codice crea una variabile denominata myVar.Quindi,il codice assegna 5 a myVar.
Ora,se myVar appare di nuovo nel codice,
il programma lo tratterà come se fosse 5.*/


/*Sequenze di escape nelle stringhe
Le virgolette non sono gli unici caratteri dei quali si può fare l'escaping all'interno di una stringa. 
Ci sono due motivi per usare i caratteri di escaping:

Per permetterti di utilizzare caratteri che potresti non essere altrimenti in grado di digitare, come ad esempio un ritorno a capo.
Per permetterti di rappresentare più virgolette in una stringa senza JavaScript interpretare erroneamente ciò che intendi.
Lo abbiamo imparato nella sfida precedente.

Codice	Output
\'	virgoletta singola
\"	doppia citazione
\\	barra rovesciata
\n	nuova riga
\r	ritorno a capo
\t	tabulazione
\b	delimitatore di parola
\f	avanzamento carta (form feed)
Nota che la barra rovesciata necessita di escaping perché appaia come barra rovesciata.


Usare la notazione parentesi per trovare l'n-esimo carattere in una stringa
Puoi usare la notazione a parentesi anche per ottenere il carattere in altre posizioni all'interno di una stringa.

Ricorda che i computer iniziano a contare da 0, quindi il primo carattere è in realtà il carattere zero.

Esempio:
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
secondLetterOfFirstName dovrebbe acere un valore stringa d.

// Setup
const lastName = "Lovelace";
// Modifica il codice solo sotto questa riga
const thirdLetterOfLastName = lastName[2];

Al fine di ottenere l'ultima lettera di una stringa, è possibile sottrarre uno dalla lunghezza della stringa.
Per esempio, se const firstName = "Ada", puoi ottenere il valore dell'ultima lettera della stringa usando firstName[firstName.length - 1].

Esempio:
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
lastLetter dovrebbe avere un valore stringa a.

// Setup
const lastName = "Lovelace";

// Modifica il codice solo sotto questa riga
const lastLetterOfLastName =lastName[lastName.length -1];


Memorizzare più valori in una variabile utilizzando gli array in JavaScript
Con le variabili array di JavaScript, possiamo memorizzare diversi dati in un unico posto.

La dichiarazione di un array inizia con una parentesi quadra di apertura, e termina con una parentesi quadra di chiusura, 
con gli elementi separati da virgole, in questo modo:

const sandwich = ["peanut butter", "jelly", "bread"];



Nidificare un array in un altro array
È anche possibile nidificare array all'interno di altri array, come nell'esempio:
const teams = [["Bulls", 23], ["White Sox", 45]];
Questo viene anche chiamato un array multidimensionale.

Accedere ai dati degli Array con gli indici
Possiamo accedere ai dati all'interno degli array utilizzando gli indici.

Gli indici degli array sono scritti nella stessa notazione tra parentesi usata dalle stringhe, 
tranne per il fatto che invece di specificare un carattere, specificano una voce nell'array. 
Come le stringhe, gli array utilizzano l'indicizzazione zero-based, quindi il primo elemento in un array ha un indice di 0.
Esempio:
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
console.log(array[0]) scrive 50, e data ha il valore 60.

Modificare i dati dell'array con gli indici
A differenza delle stringhe, gli elementi degli array sono mutabili e possono essere cambiati liberamente,
anche se l'array è stato dichiarato con const.

Accedere agli array multidimensionali con gli indici
È possibile pensare a un array multi-dimensionale, come a un array di array.
 Quando utilizzi le parentesi per accedere al tuo array, 
 il primo set di parentesi si riferisce alle voci nell'array più esterno (il primo livello),
  e ogni coppia di parentesi supplementare si riferisce al livello successivo delle voci all'interno.

Esempio
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];

arr[3] è [[10, 11, 12], 13, 14], arr[3][0] è [10, 11, 12], e arr[3][0][1] è 11.

Scrivere JavaScript riutilizzabile con le funzioni
In JavaScript, possiamo dividere il nostro codice in parti riutilizzabili chiamate funzioni.

Ecco un esempio di funzione:

function functionName() {
  console.log("Hello World");
}

Puoi chiamare o invocare questa funzione usando il suo nome seguito da parentesi, in questo modo: 
functionName(); Ogni volta che la funzione viene chiamata stamperà il messaggio Hello World sulla dev console. 
Tutto il codice tra le parentesi graffe verrà eseguito ogni volta che viene chiamata la funzione.

I parametri sono variabili che agiscono come segnaposto per i valori che devono essere inseriti in una funzione quando viene chiamata.
 Quando una funzione viene definita, essa è tipicamente definita insieme a uno o più parametri. 
I valori effettivi che vengono inseriti (o "passati") in una funzione quando viene chiamata sono conosciuti come argomenti.

function functionWithArgs(num1,num2){
  console.log(num1+num2)
}
functionWithArgs(8,10); 
sulla consolle visualizzeremo, in questo caso la somma, ovvero 18 


Comprendere il valore undefined restituito da una funzione

Una funzione può includere l'istruzione return ma questa non deve essere necessariamente inclusa. 
Nel caso in cui la funzione non abbia un'istruzione return, quando la chiami, 
la funzione elabora il codice interno ma il valore restituito è undefined.

Esempio

let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

addSum è una funzione senza un'istruzione return. 
La funzione cambierà la variabile globale sum ma il valore restituito dalla funzione sarà undefined.

Assegnazione con un valore restituito

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7); // restiutisce il risultato della funzione quindi il valore 2



Usare la logica condizionale con le istruzioni If


Le istruzioni if sono usate nel codice per prendere decisioni. 
La parola chiave if dice a JavaScript di eseguire il codice nelle parentesi graffe in determinate condizioni, definite nelle parentesi tonde.
 Queste condizioni sono note come condizioni Boolean e possono essere solo true o false.

Quando la condizione valuta un true, il programma esegue la dichiarazione all'interno delle parentesi graffe. 
Quando la condizione booleana valuta un false, la dichiarazione all'interno delle parentesi graffe non sarà eseguita.

Pseudocodice

if (condition is true) {
statement is executed
}
Esempio

function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
test(true) restituisce la stringa It was true e test(false) restituisce la stringa It was false.

Quando test viene chiamato con un valore di true, l'istruzione if valuta myCondition per vedere se è true o no. 
Dal momento che è true, la funzione restituisce It was true. 
Quando chiamiamo test con un valore di false, myCondition non è true, 
quindi l'istruzione tra parentesi graffe non viene eseguita e la funzione restituisce It was false.

Esempio Esercizio 

function trueOrFalse(wasThatTrue) {

if(wasThatTrue){
  return "Yes, that was true";
}
return "No, that was false";
}



Confrontare con l'operatore di uguaglianza

Ci sono molti operatori di confronto in JavaScript. 
Tutti questi operatori restituiscono un valore booleano true o false.

L'operatore di base è l'operatore di uguaglianza ==. L'operatore di uguaglianza confronta due valori e 
restituisce true se sono equivalenti o false se non lo sono. 
Nota che l’uguaglianza è diversa dall’assegnazione (=), che assegna il valore che si trova 
alla destra dell'operatore a una variabile sulla sinistra.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
Se myVal è uguale a 10, l'operatore di uguaglianza restituisce true, quindi il codice tra le parentesi graffe sarà eseguito, 
e la funzione restituirà Equal. In caso contrario, la funzione restituirà Not Equal.
 Affinché JavaScript possa confrontare due differenti tipi di dato (per esempio numbers e strings), deve convertire un tipo in un altro. 
 Questa operazione è nota come conversione implicita. Dopo che è stata fatta, è possibile confrontare i termini come segue:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true



Confronto con l'operatore di uguaglianza stretta

Uguaglianza stretta (===) è la controparte dell'operatore di uguaglianza (==). 
Tuttavia, a differenza dell'operatore di uguaglianza, che cerca di convertire entrambi i valori a un tipo di dato comune per confrontarli,
 l'operatore di uguaglianza stretta non esegue una conversione di tipo.

Se i valori confrontati hanno tipi diversi, sono considerati ineguali, e l'operatore di uguaglianza stretta restituirà falso.

Esempi

3 ===  3  // true
3 === '3' // false

Nel secondo esempio, 3 è un tipo Number e '3' è un tipo String.

Se i valori confrontati non sono dello stesso tipo, l'operatore di uguaglianza eseguirà una conversione di tipo e quindi valuterà i valori.
L'operatore di uguaglianza stretta invece confronterà sia il tipo di dati che il valore così com'è, senza convertire un tipo in un altro.

Esempi

3 == '3' restituisce true perché JavaScript esegue la conversione di tipo da string a number.

3 === '3' restituisce false perché i tipi sono diversi e la conversione di tipo non viene eseguita.

Nota: In JavaScript, è possibile determinare il tipo di una variabile o di un valore con l'operatore typeof, come segue:

typeof 3
typeof '3'

typeof 3 restituisce la stringa number 
typeof '3' restituisce la stringa string.


Confrontare con l'operatore di disuguaglianza

L'operatore di disuguaglianza (!=) è l'opposto dell'operatore di uguaglianza. 
Esso significa "non uguale" e restituisce false dove l'uguaglianza restituirebbe true e viceversa. 
Come l'operatore di uguaglianza, l'operatore di disuguaglianza convertirà i tipi di dati dei valori durante il confronto.

Esempi

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false



Confrontare con l'operatore di disuguaglianza stretta

L'operatore di disuguaglianza stretta (!==) è l'opposto logico dell'operatore di uguaglianza stretta. 
Significa "strettamente non uguale" e restituisce false dove una rigorosa uguaglianza avrebbe restituito true e viceversa. 
L'operatore di disuguaglianza stretta non converte i tipi di dati.

Esempi

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

Esempio Esercizio
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Modifica questa riga
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);



Confrontare con l'operatore di maggioranza

L'operatore di maggioranza (>) confronta i valori di due numeri. 
Se il numero a sinistra è maggiore del numero a destra, restituisce true. In caso contrario restituisce false.

Come l'operatore di uguaglianza, l'operatore di maggioranza convertirà i tipi di dati dei valori durante il confronto.

Esempi

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false


Confronto con l'operatore di maggioranza o uguaglianza

L'operatore di maggioranza o uguaglianza (>=) confronta i valori di due numeri. 
Se il numero a sinistra è maggiore o uguale al numero a destra, restituisce true. In caso contrario, restituisce false.

Come l'operatore di uguaglianza, l'operatore di maggioranza o uguaglianza convertirà i tipi di dati durante il confronto.

Esempi

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false


Confronti con l'operatore logico AND

A volte dovrai testare più di una cosa alla volta. 
L'operatore logico and (&&) restituisce true se e solo se gli operandi a sinistra e a destra di esso sono veri.

Lo stesso effetto può essere ottenuto annidando un'istruzione if all'interno di un altro if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
restituirà Yes solo se num è maggiore di 5 e minore a 10. 


La stessa logica può essere scritta come:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";



Confronti con l'operatore Or logico

L'operatore Or logico (||) restituisce true se uno degli operandi è true. In caso contrario, restituisce false.

L'operatore or logico è composto da due simboli "pipe": (||). Questo in genere può essere trovato tra i tuoi tasti Backspace e Enter.

Lo schema sottostante dovrebbe esserti familiare dai punti visti in precedenza:

if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
Esso restituirà Yes solo se num è compreso tra 5 e 10 (5 e 10 inclusi). 

La stessa logica può essere scritta come:

if (num > 10 || num < 5) {
  return "No";
}
return "Yes";



Introduzione alle dichiarazioni Else

Quando una condizione per un'istruzione if è vera, viene eseguito il blocco di codice che segue. 
E quando quella condizione è falsa? Di solito non succede niente. 
Con un'istruzione else è possibile eseguire un blocco di codice alternativo.

if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}



Introduzione alle istruzioni Else If

Se hai più condizioni che devono essere valutate, puoi concatenare le istruzioni if con le istruzioni else if.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}


Ordine logico nelle istruzioni If/Else


L'ordine è importante nelle istruzioni if, else if.
La funzione viene eseguita dall'alto verso il basso, quindi dovrai fare attenzione a quale istruzione viene prima.

Prendiamo queste due funzioni come esempio.

Ecco la prima:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

E la seconda cambia semplicemente l'ordine delle dichiarazioni:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
Anche se queste due funzioni sembrano quasi identiche, se passiamo un numero ad entrambe otterremo output diversi.

foo(0)
bar(0)
foo(0) restituirà la stringa Less than one, e bar(0) restituirà la stringa Less than two.

Concatenare le istruzioni If Else

Le istruzioni if/else possono essere concatenate insieme per dare origine a una logica complessa.
 Ecco lo pseudocode di più istruzioni if / else if concatenate:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

Esempio Esercizio 

function testSize(num) {
  // Modifica il codice solo sotto questa riga
if(num<5){
  return "Tiny";
}else if(num<10){
   return ("Small");
}else if (num<15){
  return "Medium";
}else if (num<20){
  return "Large";
}else if(num>=20) {
  return "Huge";
}else{
  return "Change Me";
}
  // Modifica il codice solo sopra questa riga
}

testSize(7);


Giocare a golf

Nel gioco del Golf, ogni buca ha un par, che è il numero medio di tiri (strokes) che un golfista dovrebbe fare per riuscire a fare buca. 
A seconda di quanto sopra o sotto al valore di par sono i tuoi strokes, c'è un soprannome diverso.

Alla tua funzione saranno passati gli argomenti par e strokes. 
Restituisci la stringa corretta in base a questa tabella che elenca i colpi in ordine di priorità;
 dall'alto (maggiore priorità) al basso (minore):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par e strokes avranno sempre valori numerici e positivi. Abbiamo aggiunto un array con tutti i nomi per tua comodità.

Soluzione A

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Modifica il codice solo sotto questa riga
if (strokes == 1){
  return names[0];
}else if (strokes <= par-2){
   return names[1];
}else if (strokes === par-1){
   return names[2];
}else if(strokes === par){
   return names[3];
}else if(strokes === par+1){
   return names[4];
}else if(strokes === par+2){
   return names[5];
}else{
   return names[6];
}
   // Modifica il codice solo sopra questa riga
}

console.log(golfScore(5,2));

Soluzione B 

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  return strokes === 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes === par - 1
    ? names[2]
    : strokes === par
    ? names[3]
    : strokes === par + 1
    ? names[4]
    : strokes === par + 2
    ? names[5]
    : names[6];
}
console.log(golfScore(5,2));



Selezionare tra molte opzioni con le istruzioni Switch

Se hai molte opzioni tra cui scegliere, usa un'istruzione switch. 
Un'istruzione switch verifica un valore e può avere molte istruzioni case che definiscono vari valori possibili. 
Le istruzioni vengono eseguite dal primo valore case che combacia e fino a quando non si incontra un break.

Ecco un esempio di un'istruzione switch:

switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}

I valori case vengono testati con uguaglianza stretta (===). 
Il break dice a JavaScript di interrompere l'esecuzione delle istruzioni. 
Se il break viene omesso, sarà eseguita la successiva istruzione.

Soluzione 1 

function caseInSwitch(val) {
  let answer = "";
  // Modifica il codice solo sotto questa riga
switch (val){
  case 1: answer = "alpha";
  break;
  case 2: answer = "beta";
 break;
  case 3:answer = "gamma";
 break;
case 4: answer = "delta";
}
  // Modifica il codice solo sopra questa riga
  return answer;
}

caseInSwitch(val);

Soluzione B

function caseInSwitch(val) {
  switch (val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }
}

// Change this value to test
caseInSwitch(1);


Aggiungere un'opzione predefinita nelle dichiarazioni Switch

In un'istruzione switch potresti non essere in grado di specificare tutti i possibili valori con le dichiarazioni case. 
Puoi invece aggiungere una dichiarazione default che verrà eseguita se non vengono trovati case corrispondenti. 
Pensala come l'istruzione else finale in una catena if/else.

Un'istruzione default dovrebbe essere l'ultimo caso.

switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}

Esercizio

let answer = "";
function switchOfStuff(val) {
  switch(val){
  case "a" : answer = "apple";
 break;
  case "b" : answer = "bird";
 break;
  case "c" : answer = "cat";
 break;
  default : answer = "stuff"; 
 break;
 }
  return answer;
}

switchOfStuff("a");
console.log(answer);

Opzioni identiche multiple nelle dichiarazioni Switch

Se l'istruzione break viene omessa da un'istruzione switch e in particolare da un suo case, 
le istruzione case successive sono eseguite fino a quando non si incontra un break. 
Se hai diversi input con lo stesso output, potrai rappresentarli in un'istruzione switch come la seguente:

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
I casi per 1, 2 e 3 produrranno tutti lo stesso risultato.


Sostituire le catene di If Else con Switch

Se si dispone di molte opzioni tra cui scegliere, 
un'istruzione switch può essere più facile da scrivere rispetto a molte istruzioni if/else if concatenate.
 Il seguente:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
può essere sostituito con:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

Altro Esempio 

function chainToSwitch(val) {
  let answer = "";
  // Modifica il codice solo sotto questa riga
switch (val){
  case "bob" : answer = "Marley";
  break;
  case 42 : answer = "The Answer";
  break;
   case 1 : answer = "There is no #1";
  break;
   case 99 : answer = "Missed me by this much!";
  break;
   case 7 : answer = "Ate Nine";
  break;
}
 
  // Modifica il codice solo sopra questa riga
  return answer;
}

chainToSwitch(7);


Restituire valori booleani dalle funzioni

È possibile ricordare da Confrontare con l'operatore di uguaglianza che tutti gli operatori di confronto
 restituiscono un valore booleano true o false.

A volte le persone usano un'istruzione if/else per fare un confronto, in questo modo:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
Ma c'è un modo migliore per farlo. 
Dal momento che === restituisce true o false, possiamo restituire il risultato del confronto:

function isEqual(a, b) {
  return a === b;
}

Esercizio
function isLess(a, b) {
    return (a < b);
  }

isLess(10, 15);



Contare le carte

Nel gioco di casinò Blackjack, un giocatore può determinare se nella mano successiva ha un vantaggio sul banco 
tenendo traccia del numero relativo di carte alte e basse rimanenti nel mazzo.
 Questo si chiama contare le carte.

Avere più carte alte rimanenti nel mazzo favorisce il giocatore. 
Ad ogni carta è assegnato un valore secondo la tabella sottostante. 
Quando il conteggio è positivo, il giocatore dovrebbe puntare alto. 
Quando il conteggio è zero o negativo, il giocatore dovrebbe puntare basso.

Cambio del conteggio	     Carte
         +1	              2, 3, 4, 5, 6
          0	                 7, 8, 9
         -1	            10, 'J', 'Q', 'K', 'A'

         Scriverai una funzione che conta le carte. 
Riceverà un parametro card, che può essere un numero o una stringa,
 e incrementerà o decrementerà la variabile globale count in base al valore della carta (vedi tabella). 
 La funzione restituirà una stringa con il conteggio corrente e la stringa Bet 
 se il conteggio è positivo, o Hold se il conteggio è zero o negativo. 
 Il conteggio corrente e la decisione del giocatore (Bet o Hold) dovrebbero essere separati da un singolo spazio.

Output di esempio: -3 Hold o 5 Bet

Suggerimento
NON resettare count a 0 quando il valore è 7, 8 o 9. NON restituire un array.
NON includere virgolette (singole o doppie) nell'output.

Soluzione Personale

let count = 0;

function cc(card) {
  // Modifica il codice solo sotto questa riga
  if(card >=2 && card <=6 ){
      count++;
   }else if(card >=7 && card <=9){
count+0;
}else if(card ===10 || card =="J" || card =="Q" || card =="K" || card =="A"){
count--;
}else{
 console.log("Valore carta non valido");
}
 if (count > 0) {
return (count+" Bet");
 } return (count+" Hold");
}
  // Modifica il codice solo sopra questa riga
cc(1);cc(7);cc("A");cc(8);
console.log(count);



Costruire oggetti in JavaScript

Potresti aver già sentito il termine oggetto (object).

Gli oggetti sono simili agli array, tranne per il fatto che invece di utilizzare gli indici per accedere e modificare i loro dati,
 accedi ad essi tramite le cosiddette proprietà (properties).

Gli oggetti sono utili per archiviare i dati in modo strutturato e possono rappresentare oggetti del mondo reale, come un gatto.

Ecco un esempio di oggetto gatto (cat):

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
In questo esempio, tutte le proprietà sono memorizzate come stringhe, come name, legse tails. 
Per le proprietà puoi anche usare i numeri. Puoi anche omettere le virgolette per le proprietà di tipo stringa di una sola parola,
 come segue:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
Tuttavia, se il tuo oggetto ha proprietà non stringa, JavaScript le convertirà automaticamente in stringhe.


Accedere alle proprietà dell'oggetto con la notazione a punti

Esistono due modi per accedere alle proprietà di un oggetto: notazione a punti (.) e notazione a parentesi ([]), simile a un array.

La notazione a punti è quella che usi quando conosci già il nome della proprietà a cui stai tentando di accedere.

Di seguito è riportato un esempio di utilizzo della notazione a punti (.) per leggere la proprietà di un oggetto:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val ha il valore della stringa val1 e prop2val ha il avere un valore della stringa val2.


Accedere alle proprietà dell'oggetto con la notazione a punti

Esistono due modi per accedere alle proprietà di un oggetto: notazione a punti (.) e notazione a parentesi ([]), simile a un array.

La notazione a punti è quella che usi quando conosci già il nome della proprietà a cui stai tentando di accedere.

Di seguito è riportato un esempio di utilizzo della notazione a punti (.) per leggere la proprietà di un oggetto:

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
prop1val ha il valore della stringa val1 e prop2val ha il avere un valore della stringa val2.


Accedere alle proprietà dell'oggetto con la notazione a parentesi

Il secondo modo di accedere alle proprietà di un oggetto è la notazione a parentesi ([]).
 Se la proprietà dell'oggetto a cui stai tentando di accedere ha uno spazio nel suo nome,
  è necessario utilizzare la notazione a parentesi.

Tuttavia, puoi ancora usare la notazione a parentesi sulle proprietà dell'oggetto senza spazi.

Ecco un esempio di come usare la notazione a parentesi per leggere la proprietà di un oggetto:

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
myObj["Space Name"] sarebbe la stringa Kirk,
myObj['More Space'] sarebbe la stringa Spock, 
e myObj["NoSpace"] sarebbe la stringa USS Enterprise.

Nota che i nomi delle proprietà che contengono spazi devono essere tra virgolette (singola o doppia).

Esercizio 


// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Modifica il codice solo sotto questa riga
const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];    


Accedere alle proprietà degli oggetti con le variabili

Un altro uso della notazione a parentesi con gli oggetti è quello di accedere a una proprietà memorizzata come valore di una variabile. 
Questo può essere molto utile per iterare sulle le proprietà di un oggetto o quando si accede a una tabella di ricerca.

Ecco un esempio di utilizzo di una variabile per accedere a una proprietà:

const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
La stringa Doberman sarà visualizzata nella console.

Un altro modo per utilizzare questo concetto è quando il nome della proprietà viene ottenuto dinamicamente 
durante l'esecuzione del programma, come segue:

const someObj = {
  propName: "John"
};

function propPrefix(str) {
  const s = "prop";
  return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);
someProp avrà il valore della stringa propName e la stringa John sarà visualizzata nella console.

Nota che non usiamo virgolette attorno al nome della variabile quando la usiamo per accedere alla proprietà
 perché stiamo usando il valore della variabile, non il nome.


// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Modifica il codice solo sotto questa riga
const playerNumber = 16;  // Modifica questa riga
const player = testObj[playerNumber];   // Modifica questa riga


Aggiornare le proprietà di un oggetto

Dopo aver creato un oggetto JavaScript, è possibile aggiornare le sue proprietà in qualsiasi momento 
proprio come quando si aggiorna qualsiasi altra variabile.
 Per aggiornare le proprietà è possibile utilizzare la notazione a punti o a parentesi.

Ad esempio, diamo un'occhiata a ourDog:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Dal momento che è un cane particolarmente felice, cambiamo il suo nome nella stringa Happy Camper. 
Ecco come aggiorniamo la proprietà del nome del suo oggetto:

ourDog.name = "Happy Camper"; 

oppure: 

ourDog["name"] = "Happy Camper"; 

 quando valutiamo ourDog.name, invece di ottenere Camper, otterremo il suo nuovo nome, Happy Camper.

 // Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Modifica il codice solo sotto questa riga
myDog.name = "Happy Coder";
myDog["name"] = "Happy Coder";


Aggiungere nuove proprietà a un oggetto 

Puoi aggiungere nuove proprietà agli oggetti JavaScript esistenti proprio come faresti se volessi modificarli.

Ecco come aggiungere una proprietà bark a ourDog:

ourDog.bark = "bow-wow";
oppure

ourDog["bark"] = "bow-wow";

Ora quando valuteremo ourDog.bark, otterremo il suo abbaiare, bow-wow.

Esempio:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";


Cancellare le proprietà da un oggetto in JavaScript

Possiamo anche cancellare proprietà dagli oggetti in questo modo:

delete ourDog.bark;
Esempio:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
Dopo l'ultima riga mostrata sopra, ourDog apparirà così:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}


