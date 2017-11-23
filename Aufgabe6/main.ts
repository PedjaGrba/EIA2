/*
Aufgabe: 6, Inheritance: Polymorphe Skipiste
Name: Pedja Grba
Matrikel: 256212
Datum: 22.11.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace aufgabe6 {
    //1 EventListener hörcht auf load,Seite wird vollständig geladen.Wenn Ereignis eintritt,dann beginnt Funktion 
    window.addEventListener("load", skipiste);
    export let crc2: CanvasRenderingContext2D; //export,damit die Variable in andere Datein exportiert wird


    //2 Variablen der Klassen
    let allObjects: MoveObjects[] = [];

    var image: any;




    //3 Funktion für Schneegestöber canvas - große Funktion
    function skipiste(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];



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
        for (let i: number = 0; i < 5; i++) {
            let x: number = 50 + Math.random() * 400;
            let y: number = 550 + Math.random() * 60;
            drawTree(x, y, "#006200");
        }

        //6 Schleifen und Startkoordinaten für alles Klassen: Schneeflocken,Wolken,Skifahrer, Darstellungsbereich


        //Skifahrer


        for (let i: number = 0; i < 3; i++) {
            let s: Object1 = new Object1(0, 250);
            allObjects.push(s);//pusht neue Instanz an den Array anhängen,an nächtfreie "Schublade"
        }

        //Schneeflocken

        for (let i: number = 0; i < 100; i++) {
            let s: Object2 = new Object2(0, 0);
            allObjects.push(s);
        }

  
        //Wolken
        
        for (let i: number = 0; i < 3; i++) {
            let s: Object3 = new Object3(0, 50);
            allObjects.push(s);
        }


        image = crc2.getImageData(0, 0, 800, 600); //Bild in der Variable speichern
        console.log(allObjects);
        animate();
    }


    //7 Funktion für die Animationen
    function animate(): void {

        crc2.clearRect(0, 0, 800, 600); // Hintergrund löschen
        crc2.putImageData(image, 0, 0); //Hintergrund einfügen


        //8 Schleifen für Schneeflocken,Wolken und Skifahrer Bewegung, als ein für alle Klassen. Also durchs Bild verlaufend!


        for (let i: number = 0; i < allObjects.length; i++) {
            let s: MoveObjects = allObjects[i];
            s.update();
        }

        window.setTimeout(animate, 20);

    }


    //Funktion für Bäume
    function drawTree(_x: number, _y: number, _color: string): void {
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

}



