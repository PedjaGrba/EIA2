/*
Aufgabe: 8, Manipulation
Name: Pedja Grba
Matrikel: 256212
Datum: 06.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace aufgabe8 {
    window.addEventListener("load", init);
 
//Große Funktion mit umwandeln der Datentypen.String zu Number + if-Abfragen
    function init(): void {
        let anzahl: string = prompt("Eingabe der gewünschte Anzahl");
        let anzahlNumb: number = parseInt(anzahl);
            
        if (anzahlNumb >= 10 && anzahlNumb <= 100) {
            for (let i: number = 0; i < anzahlNumb; i++) {
                drawRect(Math.random() * 800, Math.random() * 600, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 30, 30 );
       } 
    }
 }        

 //Funktion für Rechteckzeichnung + Parameter für Rechtecke
    function drawRect(_x: number, _y: number, _color: string, width: number, height: number): void {    
            let div: HTMLDivElement = document.createElement("div"); //erstellt HTML-Element div
            console.log(div);
    
            div.style.marginLeft = _x + "px";
            div.style.marginTop = _y + "px";
            div.style.width = width + "px";
            div.style.height = height + "px";
            div.style.background = _color;
            
            document.body.appendChild(div);
            
        }   
}