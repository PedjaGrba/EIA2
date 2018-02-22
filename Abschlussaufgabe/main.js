/*
Aufgabe: Abschlussaufgabe
Name: Pedja Grba
Matrikel: 256212
Datum: 12.02.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var abschluss;
(function (abschluss) {
    //EventListener für stadion und schussbalken
    window.addEventListener("load", stadion);
    window.addEventListener("mousedown", schussLaden);
    window.addEventListener("mouseup", schussTrue);
    window.addEventListener("touchstart", schussLaden);
    window.addEventListener("touchend", schussTrue);
    //Variablen der Klassen und Bewegungspunkte
    let allObjects = [];
    var image;
    let xBall = 100;
    let yBall = 380;
    let rotate = 180;
    let rotate2 = 180;
    let kraft = 0;
    let schuss = false;
    let laden = false;
    let kickHoch = false;
    let fussballer;
    let ball;
    let tafel;
    //Funktion für Stadion
    function stadion() {
        let canvas = document.getElementsByTagName("canvas")[0];
        abschluss.crc2 = canvas.getContext("2d");
        console.log(abschluss.crc2);
        //Himmel
        abschluss.crc2.fillStyle = "#A9D0F5";
        abschluss.crc2.fillRect(0, 0, 800, 600);
        //Rasen
        abschluss.crc2.fillStyle = "#21610B";
        abschluss.crc2.fillRect(0, 400, 800, 200);
        drawRasen();
        //Wolken
        for (let i = 0; i < Math.random() * 10; i++) {
            let s = new abschluss.Wolken(0, 50);
            allObjects.push(s);
        }
        image = abschluss.crc2.getImageData(0, 0, 800, 600); //Bild in der Variable speichern
        console.log(allObjects);
        fussballer = new abschluss.Fussballspieler();
        tafel = new abschluss.Tafel();
        ball = new abschluss.Ball(fussballer, tafel);
        animate();
    }
    //Funktionen für Schussbalken
    function schussLaden() {
        fussballer.setSchuss(false);
        ball.setSchuss(false);
        ball.setLaden(true);
    }
    function schussTrue() {
        fussballer.setSchuss(true);
        ball.setSchuss(true);
        ball.setLaden(false);
    }
    function drawKraft() {
        if (ball.kraft < 20) {
            abschluss.crc2.fillStyle = "green";
            abschluss.crc2.fillRect(5, 5, ball.kraft * 4, 5);
        }
        else if (ball.kraft >= 20 && ball.kraft < 40) {
            abschluss.crc2.fillStyle = "yellow";
            abschluss.crc2.fillRect(5, 5, ball.kraft * 4, 5);
            abschluss.crc2.fillStyle = "green";
            abschluss.crc2.fillRect(5, 5, 80, 5);
        }
        else if (ball.kraft >= 40) {
            abschluss.crc2.fillStyle = "red";
            abschluss.crc2.fillRect(5, 5, ball.kraft * 4, 5);
            abschluss.crc2.fillStyle = "yellow";
            abschluss.crc2.fillRect(5, 5, 160, 5);
            abschluss.crc2.fillStyle = "green";
            abschluss.crc2.fillRect(5, 5, 80, 5);
        }
    }
    //Funktion für Rasen
    function drawRasen() {
        for (let i = 0; i < 800; i += 4) {
            abschluss.crc2.beginPath();
            abschluss.crc2.fillStyle = "#21610B";
            abschluss.crc2.moveTo(i, 400);
            abschluss.crc2.lineTo(i + 2, 380 + Math.random() * 20);
            abschluss.crc2.lineTo(i + 4, 400);
            abschluss.crc2.fill();
        }
    }
    //Funktion für Tor
    function drawTor() {
        for (let i = -200; i < 0; i += 10) {
            abschluss.crc2.beginPath();
            abschluss.crc2.strokeStyle = "black";
            abschluss.crc2.moveTo(600 - i, 200 - i);
            abschluss.crc2.lineTo(600 - i, 200 - i);
            abschluss.crc2.lineTo(600 - i, 400);
            abschluss.crc2.stroke();
            abschluss.crc2.closePath();
        }
        for (let i = -200; i < 0; i += 10) {
            abschluss.crc2.beginPath();
            abschluss.crc2.strokeStyle = "black";
            abschluss.crc2.moveTo(600, 200 - i);
            abschluss.crc2.lineTo(600 - i, 200 - i);
            abschluss.crc2.lineTo(620, 200 - i);
            abschluss.crc2.stroke();
            abschluss.crc2.closePath();
        }
        abschluss.crc2.beginPath();
        abschluss.crc2.fillStyle = "white";
        abschluss.crc2.moveTo(600, 200);
        abschluss.crc2.lineTo(800, 400);
        abschluss.crc2.lineTo(810, 400);
        abschluss.crc2.lineTo(610, 200);
        abschluss.crc2.lineTo(600, 200);
        abschluss.crc2.fill();
        abschluss.crc2.closePath();
        abschluss.crc2.fillStyle = "white";
        abschluss.crc2.fillRect(600, 400, 30, -200);
    }
    //Funktion für die Animationen
    function animate() {
        abschluss.crc2.clearRect(0, 0, 800, 600);
        abschluss.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < allObjects.length; i++) {
            let s = allObjects[i];
            s.update();
        }
        tafel.update();
        fussballer.update();
        ball.update();
        drawKraft();
        drawTor();
        window.setTimeout(animate, 20);
    }
})(abschluss || (abschluss = {}));
//# sourceMappingURL=main.js.map