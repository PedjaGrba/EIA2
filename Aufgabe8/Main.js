/*
Aufgabe: 8, Manipulation
Name: Pedja Grba
Matrikel: 256212
Datum: 06.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe8;
(function (aufgabe8) {
    window.addEventListener("load", init);
    //Große Funktion mit umwandeln der Datentypen.String zu Number + if-Abfragen
    function init() {
        let anzahl = prompt("Eingabe der gewünschte Anzahl");
        let anzahlNumb = parseInt(anzahl);
        if (anzahlNumb >= 10 && anzahlNumb <= 100) {
            for (let i = 0; i < anzahlNumb; i++) {
                drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 30, 30);
            }
        }
    }
    //Funktion für Rechteckzeichnung + Parameter für Rechtecke
    function drawRect(_x, _y, _color, width, height) {
        let div = document.createElement("div"); //erstellt HTML-Element div
        console.log(div);
        div.style.marginLeft = _x + "px";
        div.style.marginTop = _y + "px";
        div.style.width = width + "px";
        div.style.height = height + "px";
        div.style.background = _color;
        document.body.appendChild(div);
    }
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=Main.js.map