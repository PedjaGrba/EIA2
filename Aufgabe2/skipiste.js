/*
Aufgabe: 2, Skipiste mit Funktionen
Name: Pedja Grba
Matrikel: 256212
Datum: 22.10.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
window.addEventListener("load", skipiste);
let crc3;
function skipiste() {
    let canvas = document.getElementsByTagName("canvas")[0];
    crc3 = canvas.getContext("2d");
    console.log(crc3);
    //Himmel
    crc3.fillStyle = "#81BEF7";
    crc3.fillRect(0, 0, 800, 600);
    //Berge1
    crc3.beginPath();
    crc3.moveTo(600, 600);
    crc3.lineTo(750, 250);
    crc3.lineTo(850, 600);
    crc3.closePath();
    crc3.stroke();
    crc3.fillStyle = "#848484";
    crc3.fill();
    //Berge2
    crc3.beginPath();
    crc3.moveTo(500, 550);
    crc3.lineTo(630, 300);
    crc3.lineTo(700, 600);
    crc3.closePath();
    crc3.stroke();
    crc3.fillStyle = "#848484";
    crc3.fill();
    //Piste
    crc3.beginPath();
    crc3.moveTo(0, 200);
    crc3.lineTo(150, 200);
    crc3.lineTo(800, 600);
    crc3.lineTo(0, 600);
    crc3.closePath();
    crc3.stroke();
    crc3.fillStyle = "#FBFBEF";
    crc3.fill();
    //Seilbahn
    crc3.beginPath();
    crc3.moveTo(800, 250);
    crc3.lineTo(0, 100);
    crc3.closePath();
    crc3.stroke();
    crc3.fillStyle = "#151515";
    crc3.fill();
    //Seilbahn-Wagon
    crc3.strokeStyle = "black";
    crc3.stroke();
    crc3.fillStyle = "#DF7401";
    crc3.fillRect(350, 160, 10, 70);
    crc3.fillRect(325, 200, 50, 50);
    //Schneeflocken
    for (let i = 0; i < 200; i++) {
        let x = 0 + Math.random() * 800;
        let y = 0 + Math.random() * 600;
        snowflake(x, y);
    }
    //Wolken1
    crc3.beginPath();
    crc3.arc(210, 55, 40, 0, 2 * Math.PI);
    crc3.fillStyle = "#FFFFFF";
    crc3.fill();
    crc3.beginPath();
    crc3.arc(200 + 50, 50 + 20, 40 + 10, 0, 2 * Math.PI);
    crc3.fillStyle = "#FFFFFF";
    crc3.fill();
    crc3.beginPath();
    crc3.arc(200 + 5, 50 + 30, 40, 0, 2 * Math.PI);
    crc3.fillStyle = "#FFFFFF";
    crc3.fill();
    crc3.beginPath();
    crc3.arc(200 + 80, 40 + 25, 40, 0, 2 * Math.PI);
    crc3.fillStyle = "#FFFFFF";
    crc3.fill();
    //Wolken2
    crc3.beginPath();
    crc3.arc(510, 50, 40, 0, 2 * Math.PI);
    crc3.fillStyle = "#FFFFFF";
    crc3.fill();
    crc3.beginPath();
    crc3.arc(500 + 60, 40 + 40, 30 + 10, 0, 2 * Math.PI);
    crc3.fillStyle = "#FFFFFF";
    crc3.fill();
    crc3.beginPath();
    crc3.arc(500 + 5, 50 + 30, 40, 0, 2 * Math.PI);
    crc3.fillStyle = "#FFFFFF";
    crc3.fill();
    crc3.beginPath();
    crc3.arc(500 + 60, 20 + 20, 40, 0, 2 * Math.PI);
    crc3.fillStyle = "#FFFFFF";
    crc3.fill();
    //Schleifen Bäume
    for (let i = 0; i < 5; i++) {
        let x = 50 + Math.random() * 400;
        let y = 550 + Math.random() * 60;
        drawTree(x, y, "#006200");
    }
}
//Funktion für Bäume
function drawTree(_x, _y, _color) {
    crc3.beginPath();
    crc3.moveTo(_x, _y);
    crc3.lineTo(_x + 50, _y);
    crc3.lineTo(_x + 25, _y - 100);
    crc3.closePath();
    crc3.strokeStyle = _color;
    crc3.stroke();
    crc3.fillStyle = _color;
    crc3.fill();
}
function snowflake(_x, _y) {
    crc3.beginPath();
    crc3.arc(_x, _y, 3, 0, 2 * Math.PI);
    crc3.fillStyle = "#FFFFFF";
    crc3.fill();
}
//# sourceMappingURL=skipiste.js.map