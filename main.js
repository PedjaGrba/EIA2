/*
Aufgabe: 5, Objektorientierte Skipiste
Name: Pedja Grba
Matrikel: 256212
Datum: 15.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe5;
(function (aufgabe5) {
    //1 EventListener hörcht auf load,Seite wird vollständig geladen.Wenn Ereignis eintritt,dann beginnt Funktion 
    window.addEventListener("load", skipiste);
    //2 Variablen der Klassen
    let skifahrer = [];
    let schneeflocken = [];
    let wolken = [];
    var image;
    //3 Funktion für Schneegestöber canvas
    function skipiste() {
        let canvas = document.getElementsByTagName("canvas")[0];
        aufgabe5.crc2 = canvas.getContext("2d");
        console.log(aufgabe5.crc2);
        //4 Zeichnungen und Werte       
        //Himmel
        aufgabe5.crc2.fillStyle = "#81BEF7";
        aufgabe5.crc2.fillRect(0, 0, 800, 600);
        //Berge1
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(600, 600);
        aufgabe5.crc2.lineTo(750, 250);
        aufgabe5.crc2.lineTo(850, 600);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#848484";
        aufgabe5.crc2.fill();
        //Berge2
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(500, 550);
        aufgabe5.crc2.lineTo(630, 300);
        aufgabe5.crc2.lineTo(700, 600);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#848484";
        aufgabe5.crc2.fill();
        //Piste
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(0, 200);
        aufgabe5.crc2.lineTo(150, 200);
        aufgabe5.crc2.lineTo(800, 600);
        aufgabe5.crc2.lineTo(0, 600);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#FBFBEF";
        aufgabe5.crc2.fill();
        //Seilbahn
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(800, 250);
        aufgabe5.crc2.lineTo(0, 100);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#151515";
        aufgabe5.crc2.fill();
        //Seilbahn-Wagon
        aufgabe5.crc2.strokeStyle = "black";
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = "#DF7401";
        aufgabe5.crc2.fillRect(350, 160, 10, 70);
        aufgabe5.crc2.fillRect(325, 200, 50, 50);
        //5 Schleife Bäume.Anzahl,wie oft und wo)
        for (let i = 0; i < 5; i++) {
            let x = 50 + Math.random() * 400;
            let y = 550 + Math.random() * 60;
            drawTree(x, y, "#006200");
        }
        //6 Schleifen und Startkoordinaten für ARRAYS Schneeflocken,Wolken,Skifahrer, Darstellungsbereich
        //Skifahrer
        for (let i = 0; i < 3; i++) {
            let s = new aufgabe5.Object1(0, 250);
            s.setRandomStyle();
            skifahrer[i] = s;
        }
        //Schneeflocken
        for (let i = 0; i < 100; i++) {
            let s = new aufgabe5.Object2(0, 0);
            s.setRandomStyle();
            schneeflocken[i] = s;
        }
        //Wolken
        for (let i = 0; i < 3; i++) {
            let s = new aufgabe5.Object3(0, 50);
            s.setRandomStyle();
            wolken[i] = s;
        }
        image = aufgabe5.crc2.getImageData(0, 0, 800, 600); //Bild in der Variable speichern
        animate();
    }
    //7 Funktion für die Animationen
    function animate() {
        aufgabe5.crc2.clearRect(0, 0, 800, 600); // Hintergrund löschen
        aufgabe5.crc2.putImageData(image, 0, 0); //Hintergrund einfügen
        //8 Schleifen für Schneeflocken,Wolken und Skifahrer Bewegung. Also durchs Bild verlaufend!
        for (let i = 0; i < skifahrer.length; i++) {
            let s = skifahrer[i];
            s.update();
        }
        for (let i = 0; i < schneeflocken.length; i++) {
            let s = schneeflocken[i];
            s.update();
        }
        for (let i = 0; i < wolken.length; i++) {
            let s = wolken[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
    //Funktion für Bäume
    function drawTree(_x, _y, _color) {
        aufgabe5.crc2.beginPath();
        aufgabe5.crc2.moveTo(_x, _y);
        aufgabe5.crc2.lineTo(_x + 50, _y);
        aufgabe5.crc2.lineTo(_x + 25, _y - 100);
        aufgabe5.crc2.closePath();
        aufgabe5.crc2.strokeStyle = _color;
        aufgabe5.crc2.stroke();
        aufgabe5.crc2.fillStyle = _color;
        aufgabe5.crc2.fill();
    }
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=main.js.map