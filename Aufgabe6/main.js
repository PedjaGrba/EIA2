/*
Aufgabe: 6, Inheritance: Polymorphe Skipiste
Name: Pedja Grba
Matrikel: 256212
Datum: 22.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe6;
(function (aufgabe6) {
    //1 EventListener hörcht auf load,Seite wird vollständig geladen.Wenn Ereignis eintritt,dann beginnt Funktion 
    window.addEventListener("load", skipiste);
    //2 Variablen der Klassen
    let allObjects = [];
    var image;
    //3 Funktion für Schneegestöber canvas - große Funktion
    function skipiste() {
        let canvas = document.getElementsByTagName("canvas")[0];
        aufgabe6.crc2 = canvas.getContext("2d");
        console.log(aufgabe6.crc2);
        //4 Zeichnungen und Werte       
        //Himmel
        aufgabe6.crc2.fillStyle = "#81BEF7";
        aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Berge1
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(600, 600);
        aufgabe6.crc2.lineTo(750, 250);
        aufgabe6.crc2.lineTo(850, 600);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#848484";
        aufgabe6.crc2.fill();
        //Berge2
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(500, 550);
        aufgabe6.crc2.lineTo(630, 300);
        aufgabe6.crc2.lineTo(700, 600);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#848484";
        aufgabe6.crc2.fill();
        //Piste
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(0, 200);
        aufgabe6.crc2.lineTo(150, 200);
        aufgabe6.crc2.lineTo(800, 600);
        aufgabe6.crc2.lineTo(0, 600);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#FBFBEF";
        aufgabe6.crc2.fill();
        //Seilbahn
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(800, 250);
        aufgabe6.crc2.lineTo(0, 100);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#151515";
        aufgabe6.crc2.fill();
        //Seilbahn-Wagon
        aufgabe6.crc2.strokeStyle = "black";
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = "#DF7401";
        aufgabe6.crc2.fillRect(350, 160, 10, 70);
        aufgabe6.crc2.fillRect(325, 200, 50, 50);
        //5 Schleife Bäume.Anzahl,wie oft und wo)
        for (let i = 0; i < 5; i++) {
            let x = 50 + Math.random() * 400;
            let y = 550 + Math.random() * 60;
            drawTree(x, y, "#006200");
        }
        //6 Schleifen und Startkoordinaten für alles Klassen: Schneeflocken,Wolken,Skifahrer, Darstellungsbereich
        //Skifahrer
        for (let i = 0; i < 3; i++) {
            let s = new aufgabe6.Object1(0, 250);
            allObjects.push(s);
        }
        //Schneeflocken
        for (let i = 0; i < 100; i++) {
            let s = new aufgabe6.Object2(0, 0);
            allObjects.push(s);
        }
        //Wolken
        for (let i = 0; i < 3; i++) {
            let s = new aufgabe6.Object3(0, 50);
            allObjects.push(s);
        }
        image = aufgabe6.crc2.getImageData(0, 0, 800, 600); //Bild in der Variable speichern
        console.log(allObjects);
        animate();
    }
    //7 Funktion für die Animationen
    function animate() {
        aufgabe6.crc2.clearRect(0, 0, 800, 600); // Hintergrund löschen
        aufgabe6.crc2.putImageData(image, 0, 0); //Hintergrund einfügen
        //8 Schleifen für Schneeflocken,Wolken und Skifahrer Bewegung, als ein für alle Klassen. Also durchs Bild verlaufend!
        for (let i = 0; i < allObjects.length; i++) {
            let s = allObjects[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
    //Funktion für Bäume
    function drawTree(_x, _y, _color) {
        aufgabe6.crc2.beginPath();
        aufgabe6.crc2.moveTo(_x, _y);
        aufgabe6.crc2.lineTo(_x + 50, _y);
        aufgabe6.crc2.lineTo(_x + 25, _y - 100);
        aufgabe6.crc2.closePath();
        aufgabe6.crc2.strokeStyle = _color;
        aufgabe6.crc2.stroke();
        aufgabe6.crc2.fillStyle = _color;
        aufgabe6.crc2.fill();
    }
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=main.js.map