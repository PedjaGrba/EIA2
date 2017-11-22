/*
    Aufgabe: 6, Inheritance: Polymorphe Skipiste
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 22.11.2017
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */

namespace aufgabe6 {

    export class Object2 extends MoveObjects {
        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number) {
            super(_x + Math. random() * 800, _y + Math. random() * 600);
        }


        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += 3;
         }
            draw(): void {
                crc2.beginPath();
                crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
                crc2.fillStyle = "#FFFFFF";
                crc2.fill();
            }

        }
    }        
