/*
Aufgabe: Abschlussaufgabe
Name: Pedja Grba
Matrikel: 256212
Datum: 12.02.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace abschluss {
    //EventListener für stadion und schussbalken
    window.addEventListener("load", stadion);
    window.addEventListener("mousedown", schussLaden);
    window.addEventListener("mouseup", schussTrue);
    window.addEventListener("touchstart", schussLaden);
    window.addEventListener("touchend", schussTrue);
    
    export let crc2: CanvasRenderingContext2D;


    //Variablen der Klassen und Bewegungspunkte
    let allObjects: MovingStadium[] = [];

    var image: any;
    let xBall: number = 100;
    let yBall: number = 380;
    let rotate: number = 180;
    let rotate2: number = 180;
    let kraft: number = 0;
    let schuss: boolean = false;
    let laden: boolean = false;
    let kickHoch: boolean = false;
    let fussballer: Fussballspieler;
    let ball: Ball;
    let tafel: Tafel;

    //Funktion für Stadion
    function stadion(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];



        crc2 = canvas.getContext("2d");
        console.log(crc2);


        //Himmel
        crc2.fillStyle = "#A9D0F5";
        crc2.fillRect(0, 0, 800, 600);


        //Rasen
        crc2.fillStyle = "#21610B";
        crc2.fillRect(0, 400, 800, 200);
        drawRasen();


        //Wolken

        for (let i: number = 0; i < Math.random() * 10; i++) {
            let s: Wolken = new Wolken(0, 50);
            allObjects.push(s);
        }

        image = crc2.getImageData(0, 0, 800, 600); //Bild in der Variable speichern
        console.log(allObjects);

        fussballer = new Fussballspieler();
        tafel = new Tafel();
        ball = new Ball(fussballer, tafel);
        animate();

    }


    //Funktionen für Schussbalken
    function schussLaden(): void {
        fussballer.setSchuss(false);
        ball.setSchuss(false);
        ball.setLaden(true);


    }


    function schussTrue(): void {
        fussballer.setSchuss(true);
        ball.setSchuss(true);
        ball.setLaden(false);

    }


    function drawKraft(): void {
        if (ball.kraft < 20) {
            crc2.fillStyle = "green";
            crc2.fillRect(5, 5, ball.kraft * 4, 5);
        }
        else if (ball.kraft >= 20 && ball.kraft < 40) {
            crc2.fillStyle = "yellow";
            crc2.fillRect(5, 5, ball.kraft * 4, 5);
            crc2.fillStyle = "green";
            crc2.fillRect(5, 5, 80, 5);

        }
        else if (ball.kraft >= 40) {
            crc2.fillStyle = "red";
            crc2.fillRect(5, 5, ball.kraft * 4, 5);
            crc2.fillStyle = "yellow";
            crc2.fillRect(5, 5, 160, 5);
            crc2.fillStyle = "green";
            crc2.fillRect(5, 5, 80, 5);
        }
    }






    //Funktion für Rasen
    function drawRasen(): void {

        for (let i: number = 0; i < 800; i += 4) {
            crc2.beginPath();
            crc2.fillStyle = "#21610B";
            crc2.moveTo(i, 400);
            crc2.lineTo(i + 2, 380 + Math.random() * 20);
            crc2.lineTo(i + 4, 400);
            crc2.fill();
        }
    }



    //Funktion für Tor
    function drawTor(): void {

        for (let i: number = -200; i < 0; i += 10) {
            crc2.beginPath();
            crc2.strokeStyle = "black";

            crc2.moveTo(600 - i, 200 - i);
            crc2.lineTo(600 - i, 200 - i);
            crc2.lineTo(600 - i, 400);
            crc2.stroke();
            crc2.closePath();
        }

        for (let i: number = -200; i < 0; i += 10) {
            crc2.beginPath();
            crc2.strokeStyle = "black";

            crc2.moveTo(600, 200 - i);
            crc2.lineTo(600 - i, 200 - i);
            crc2.lineTo(620, 200 - i);
            crc2.stroke();
            crc2.closePath();
        }
        crc2.beginPath();
        crc2.fillStyle = "white";
        crc2.moveTo(600, 200);
        crc2.lineTo(800, 400);
        crc2.lineTo(810, 400);
        crc2.lineTo(610, 200);
        crc2.lineTo(600, 200);
        crc2.fill();
        crc2.closePath();

        crc2.fillStyle = "white";
        crc2.fillRect(600, 400, 30, -200);

    }
    //Funktion für die Animationen
    function animate(): void {

        crc2.clearRect(0, 0, 800, 600);

        crc2.putImageData(image, 0, 0);
        for (let i: number = 0; i < allObjects.length; i++) {
            let s: MovingStadium = allObjects[i];
            s.update();
        }

        tafel.update();
        fussballer.update();
        ball.update();
        drawKraft();
        drawTor();





        window.setTimeout(animate, 20);
    }





}