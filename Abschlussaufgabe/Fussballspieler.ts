/*
   Aufgabe: Abschlussaufgabe
   Name: Pedja Grba
   Matrikel: 256212
   Datum: 12.02.2018
       
   Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
   */

namespace abschluss {

    export class Fussballspieler {
       schuss: boolean = false;
       rotate2: number = 180;
       kickHoch: boolean = false;
        

        constructor() {
 //
        }

        setSchuss(n: boolean): void {
            this.schuss = n;
        }
         setKickHoch(n: boolean): void {
            this.schuss = n;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            if (this.schuss == true && this.rotate2 < 300 && this.kickHoch == false) {
            this.rotate2 += 5;
        }
        else {
            if (this.rotate2 >= 300) {

                //
            }

            if (this.rotate2 > 180) {

                this.rotate2 -= 5;
            }


        }

        crc2.translate(45, 340);
        crc2.rotate(-this.rotate2 * Math.PI / 180);
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, -20, -60);
        crc2.rotate(this.rotate2 * Math.PI / 180);
        crc2.translate(-45, -340);
        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "#F5D0A9";
            crc2.arc(50, 250, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.fillStyle = "red";
            crc2.fillRect(40, 270, 30, 70);
            crc2.fillStyle = "black";
            crc2.fillRect(50, 280, 10, 60);
            crc2.fillStyle = "black";
            crc2.fillRect(45, 340, 20, 60);
        }
    }
}