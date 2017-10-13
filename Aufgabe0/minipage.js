/*
Aufgabe: 1, Minipage
Name: Pedja Grba
Matrikel: 256212
Datum: 13.10.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
window.addEventListener("load", init);
function init() {
    let name = prompt("Hallo, gebe deinen Namen an!");
    document.getElementById("Info").innerHTML = "Hallo, man nennt mich " + name;
}
