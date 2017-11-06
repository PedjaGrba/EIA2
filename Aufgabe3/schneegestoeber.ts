namespace aufgabe3 {
    /*
    Aufgabe: 3, Schneegestoeber
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 27.10.2017
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */


    //1 EventListener hörcht auf load,Seite wird vollständig geladen.Wenn Ereignis eintritt,dann beginnt Funktion
    window.addEventListener("load", schneegestoeber);

    //2 Definiton der arrays
    let crc3: CanvasRenderingContext2D;
    let schneeflockenX: number[] = [];
    let schneeflockenY: number[] = [];
    let wolkenX: number[] = [];
    let wolkenY: number[] = [];
    let skifahrerX: number[] = [];
    let skifahrerY: number[] = [];

    var image: any;

    //3 Funktion für Schneegestöber canvas
    function schneegestoeber(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];



        crc3 = canvas.getContext("2d");
        console.log(crc3);


        //4 Zeichnungen und Werte       
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


        //5 Schleife Bäume.Anzahl,wie oft und wo)
        for (let i: number = 0; i < 5; i++) {
            let x: number = 50 + Math.random() * 400;
            let y: number = 550 + Math.random() * 60;
            drawTree(x, y, "#006200");
        }

        //6 Schleifen und Startkoordinaten für ARRAYS Schneeflocken,Wolken,Skifahrer, Darstellungsbereich
        for (let i: number = 0; i < 100; i++) {
            schneeflockenX[i] = Math.random() * 800; //Startkoordinaten x-Achse
            schneeflockenY[i] = Math.random() * 600; //Startkoordinaten y-Achse
        }

        for (let i: number = 0; i < 3; i++) {
            wolkenX[i] = Math.random() * 800;
            wolkenY[i] = Math.random() * 150 + 40;
        }
        
        for ( let i: number = 0; i < 3; i++) {
            skifahrerX[i] = 0;
            skifahrerY[i] = 250 + Math. random() * 100;
        } 


        image = crc3.getImageData(0, 0, 800, 600); //Bild in der Variable speichern
        animate();
    }


    //7 Funktion für die Animationen
    function animate(): void {
        console.log("Timeout");
        crc3.clearRect(0, 0, 800, 600); // Hintergrund löschen
        crc3.putImageData(image, 0, 0); //Hintergrund einfügen

        //8 Schleifen Schneeflocken,Wolken und Skifahrer Bewegung. Also durchs Bild verlaufend!
        for (let i: number = 0; i < schneeflockenX.length; i++) {
            if (schneeflockenY[i] > 600) {
                schneeflockenY[i] = 0;
            }

            schneeflockenY[i] += Math.random(); // Bewegung und Geschwindigkeit der Schneeflocken y-Achse. Je größer die Zahl desto schneller die Bewegung
            snowflake(schneeflockenX[i], schneeflockenY[i]); //Funktionsaufruf Schneeflocken, Übergabe X und Y-Werte
        }

        for (let i: number = 0; i < wolkenX.length; i++) {
            if (wolkenX[i] > 800) {
                wolkenX[i] = 0;
            }

            wolkenX[i] += Math.random();
            cloud(wolkenX[i], wolkenY[i]);

        }

        for (let i: number = 0; i < skifahrerX.length; i++) {
            if (skifahrerX[i] > 800) {
                skifahrerX[i] = 0;
                skifahrerY[i] = 250;
            }

            skifahrerX[i] += 10;
            skifahrerY[i] += 5;
            mann(skifahrerX[i], skifahrerY[i]);

        }

        window.setTimeout(animate, 20);

    }

    //9 Funktionen für Bäume,Schneeflocken,Wolken,Skifahrer

    //Funktion für Bäume
    function drawTree(_x: number, _y: number, _color: string): void {
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
    //Funktion für Schneeflocken
    function snowflake(_x: number, _y: number): void {
        crc3.beginPath();
        crc3.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc3.fillStyle = "#FFFFFF";
        crc3.fill();
    }
    //Funktion für Wolken
    function cloud(_x: number, _y: number): void {
        crc3.beginPath();
        crc3.arc(_x + 30, _y, 50, 0, 2 * Math.PI);
        crc3.fill();
        crc3.beginPath();
        crc3.arc(_x, _y - 40, 40, 0, 2 * Math.PI);
        crc3.fill();
        crc3.beginPath();
        crc3.arc(_x, _y, 60, 0, 2 * Math.PI);
        crc3.fillStyle = "#FFFFFF";
        crc3.fill();
    }

    //Funktion für Skifahrer
    function mann(_x: number, _y: number): void {
        crc3.fillStyle = "#B40431";
        crc3.fillRect(_x, _y, 10, -25);
        crc3.beginPath();
        crc3.arc(_x + 20, _y - 35, 15, 0, 2 * Math.PI);
        crc3.fill();
        crc3.beginPath();
        crc3.moveTo(_x - 30, _y - 15);
        crc3.lineTo(_x + 40, _y + 10);
        crc3.stroke();
    }
}



