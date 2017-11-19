/*
    Aufgabe: 5, Objektorientierte Skipiste
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 15.11.2017
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */

namespace aufgabe5 {

    export class Object3 {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 150 + 40;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            if (this.x > 800) {
                this.x = 0;
            }
            
            this.x += 2;
            
}
            draw(): void {
                crc2.beginPath();
                crc2.arc(this.x + 30, this.y, 50, 0, 2 * Math.PI);
                crc2.fill();
                crc2.beginPath();
                crc2.arc(this.x, this.y - 40, 40, 0, 2 * Math.PI);
                crc2.fill();
                crc2.beginPath();
                crc2.arc(this.x, this.y, 60, 0, 2 * Math.PI);
                crc2.fillStyle = "#FFFFFF";
                crc2.fill();

           
            }

            setRandomStyle(): void {
                this.size = Math.random() * 30 + 10;
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
        }
}