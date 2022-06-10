/*  quando l'utente fa clic su un tasto a cui ho dato id-> con il valore del tasto stesso la Fuzione che ho chaimato n(), 
    ottieniamo il valore grazie al metodo di js document.getElementById e 
    verrà che ci restiuirà i valori per le nostre "operazioni" matematiche
 */ 

 function n(dato){ 
   document.getElementById("operazioni").value+=dato
}
//eval()metodo valuta o esegue la nostra espressione
function operazione() { 
document.getElementById("operazioni").value=eval(document.getElementById("operazioni").value)
}
//resettiamo i valori
function cancella() { 
 document.getElementById("operazioni").value="" 
}
