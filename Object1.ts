/*
   Aufgabe: 5, Objektorientierte Skipiste
   Name: Pedja Grba
   Matrikel: 256212
   Datum: 15.11.2017
       
   Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
   */

namespace aufgabe5 {

    export class Object1 {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x + 0;
            this.y = _y + 250 + Math.random() * 300;
        }



        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            if (this.x > 800) {
                this.x = 0;
                this.y = 250 + Math.random() * 300;
            }

            this.x += 10;
            this.y += 5;
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, 10, -25);
            crc2.fillStyle = "#B40431.color";
            crc2.fillRect(this.x, this.y, 10, -25);
            crc2.beginPath();
            crc2.arc(this.x + 20, this.y - 35, 15, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x - 30, this.y - 15);
            crc2.lineTo(this.x + 40, this.y + 10);
            crc2.stroke();
        }

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
}