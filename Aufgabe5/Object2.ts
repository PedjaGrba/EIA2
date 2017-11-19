/*
    Aufgabe: 5, Objektorientierte Skipiste
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 15.11.2017
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */

namespace aufgabe5 {

    export class Object2 {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 600;
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

            setRandomStyle(): void {
                this.size = Math.random() * 30 + 10;
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
        }
    }        
