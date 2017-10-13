/*
Aufgabe: 1, Skipiste
Name: Pedja Grba
Matrikel: 256212
Datum: 13.10.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

window.addEventListener("load", init2);

function init2(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);

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
    
    //Baum1
    
    crc2.beginPath();
    crc2.moveTo(50, 550);
    crc2.lineTo(100, 550);
    crc2.lineTo(75, 450);
    crc2.closePath();
    crc2.strokeStyle = "#006200";
    crc2.stroke();
    crc2.fillStyle = "#006200";
    crc2.fill();
    
    //Baum2 
    crc2.beginPath();
    crc2.moveTo(50, 350);
    crc2.lineTo(100, 350);
    crc2.lineTo(75, 250);
    crc2.closePath();
    crc2.strokeStyle = "#006200";
    crc2.stroke();
    crc2.fillStyle = "#006200";
    crc2.fill();
    
    //Baum3
    crc2.beginPath();
    crc2.moveTo(120, 450);
    crc2.lineTo(220, 450);
    crc2.lineTo(170, 300);
    crc2.closePath();
    crc2.strokeStyle = "#006200";
    crc2.stroke();
    crc2.fillStyle = "#006200";
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

    
    //Wolken1
    crc2.beginPath();
    crc2.arc(210, 55, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(200 + 50, 50 + 20, 40 + 10, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(200 + 5, 50 + 30, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(200 + 80, 40 + 25, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    
    //Wolken2
    crc2.beginPath();
    crc2.arc(510, 50, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(500 + 60, 40 + 40, 30 + 10, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(500 + 5, 50 + 30, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(500 + 60, 20 + 20, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    
    
    
    
     
    
    
    
}



