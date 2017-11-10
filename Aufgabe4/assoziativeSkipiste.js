var aufgabe4;
(function (aufgabe4) {
    /*
    Aufgabe: 4, Assoziativer Skipiste
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 09.11.2017
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
    //1 EventListener hörcht auf load,Seite wird vollständig geladen.Wenn Ereignis eintritt,dann beginnt Funktion
    window.addEventListener("load", skipiste);
    //2 Definiton der arrays
    let crc2;
    let schneeflockenX = [];
    let schneeflockenY = [];
    let wolkenX = [];
    let wolkenY = [];
    let skifahrer = [];
    var image;
    //3 Funktion für Schneegestöber canvas
    function skipiste() {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //4 Zeichnungen und Werte       
        //Himmel
        crc2.fillStyle = "#81BEF7";
        crc2.fillRect(0, 0, 800, 600);
        //Berge1
        crc2.beginPath();
        crc2.moveTo(600, 600);
        crc2.lineTo(750, 250);
        crc2.lineTo(850, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#848484";
        crc2.fill();
        //Berge2
        crc2.beginPath();
        crc2.moveTo(500, 550);
        crc2.lineTo(630, 300);
        crc2.lineTo(700, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#848484";
        crc2.fill();
        //Piste
        crc2.beginPath();
        crc2.moveTo(0, 200);
        crc2.lineTo(150, 200);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#FBFBEF";
        crc2.fill();
        //Seilbahn
        crc2.beginPath();
        crc2.moveTo(800, 250);
        crc2.lineTo(0, 100);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#151515";
        crc2.fill();
        //Seilbahn-Wagon
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.fillStyle = "#DF7401";
        crc2.fillRect(350, 160, 10, 70);
        crc2.fillRect(325, 200, 50, 50);
        //5 Schleife Bäume.Anzahl,wie oft und wo)
        for (let i = 0; i < 5; i++) {
            let x = 50 + Math.random() * 400;
            let y = 550 + Math.random() * 60;
            drawTree(x, y, "#006200");
        }
        //6 Schleifen und Startkoordinaten für ARRAYS Schneeflocken,Wolken,Skifahrer, Darstellungsbereich
        for (let i = 0; i < 100; i++) {
            schneeflockenX[i] = Math.random() * 800; //Startkoordinaten x-Achse
            schneeflockenY[i] = Math.random() * 600; //Startkoordinaten y-Achse
        }
        for (let i = 0; i < 3; i++) {
            wolkenX[i] = Math.random() * 800;
            wolkenY[i] = Math.random() * 150 + 40;
        }
        //for-Schleife Skimann interface       
        for (let i = 0; i < 3; i++) {
            skifahrer[i] = {
                x: 0,
                y: 250 + Math.random() * 300,
                dx: 10,
                dy: 5,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        }
        image = crc2.getImageData(0, 0, 800, 600); //Bild in der Variable speichern
        animate();
    }
    //7 Funktion für die Animationen
    function animate() {
        crc2.clearRect(0, 0, 800, 600); // Hintergrund löschen
        crc2.putImageData(image, 0, 0); //Hintergrund einfügen
        //8 Schleifen Schneeflocken,Wolken und Skifahrer Bewegung. Also durchs Bild verlaufend!
        for (let i = 0; i < schneeflockenX.length; i++) {
            if (schneeflockenY[i] > 600) {
                schneeflockenY[i] = 0;
            }
            schneeflockenY[i] += Math.random(); // Bewegung und Geschwindigkeit der Schneeflocken y-Achse. Je größer die Zahl desto schneller die Bewegung
            snowflake(schneeflockenX[i], schneeflockenY[i]); //Funktionsaufruf Schneeflocken, Übergabe X und Y-Werte
        }
        for (let i = 0; i < wolkenX.length; i++) {
            if (wolkenX[i] > 800) {
                wolkenX[i] = 0;
            }
            wolkenX[i] += Math.random();
            cloud(wolkenX[i], wolkenY[i]);
        }
        for (let i = 0; i < skifahrer.length; i++) {
            if (skifahrer[i].x > 800) {
                skifahrer[i].x = 0;
                skifahrer[i].y = 250 + Math.random() * 300;
            }
            mann(skifahrer[i]);
        }
        window.setTimeout(animate, 20);
    }
    //9 Funktionen für Bäume,Schneeflocken,Wolken,Skifahrer
    //Funktion für Bäume
    function drawTree(_x, _y, _color) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 50, _y);
        crc2.lineTo(_x + 25, _y - 100);
        crc2.closePath();
        crc2.strokeStyle = _color;
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    //Funktion für Schneeflocken
    function snowflake(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    //Funktion für Wolken
    function cloud(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x + 30, _y, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y - 40, 40, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y, 60, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    //Funktion für Skifahrer
    function mann(_skifahrer) {
        _skifahrer.x += _skifahrer.dx;
        _skifahrer.y += _skifahrer.dy;
        crc2.fillStyle = _skifahrer.color;
        crc2.fillRect(_skifahrer.x, _skifahrer.y, 10, -25);
        crc2.fillStyle = "#B40431.color";
        crc2.fillRect(_skifahrer.x, _skifahrer.y, 10, -25);
        crc2.beginPath();
        crc2.arc(_skifahrer.x + 20, _skifahrer.y - 35, 15, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_skifahrer.x - 30, _skifahrer.y - 15);
        crc2.lineTo(_skifahrer.x + 40, _skifahrer.y + 10);
        crc2.stroke();
    }
})(aufgabe4 || (aufgabe4 = {}));
//# sourceMappingURL=assoziativeSkipiste.js.map