/*
    Aufgabe: Abschlussaufgabe
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 12.02.2018
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */

namespace abschluss {

    export class Ball {
        rotate: number = 180;
        laden: boolean = false;
        kraft: number = 0;
        xBall: number = 100;
        yBall: number = 380;
        schuss: boolean = false;
        spieler: Fussballspieler;
        tafel: Tafel;

        constructor(_spieler: Fussballspieler, _tafel: Tafel) {
            this.spieler = _spieler;
            this.tafel = _tafel;
        }


        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            if (this.laden == true) {
                this.kraft += 1;
            }
            if (this.xBall < 750 && this.schuss == true) {
                this.xBall += this.kraft;
                this.kraft /= 1.08;
                this.rotate += 2 * this.kraft;
            }
            if ((this.xBall >= 750 || this.kraft < 1) && (this.schuss == true)) {
                if (this.xBall > 600) {
                    this.tafel.textLob();
                }
               else if (this.xBall < 600) {
                    this.tafel.textSchande();
                }

                this.spieler.kickHoch = false;
                this.spieler.setSchuss(false);
                this.schuss = false;
                this.xBall = 100;
                this.kraft = 0;
            }

        }

        draw(): void {
            crc2.translate(this.xBall, this.yBall);
            crc2.rotate(this.rotate * Math.PI / 180);
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.arc(0, 0, 17, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.font = "10px Verdana";
            crc2.fillStyle = "red";
            crc2.fillText("SGE", -10, 3);
            crc2.rotate(-this.rotate * Math.PI / 180);
            crc2.translate(-this.xBall, -this.yBall);
        }
        setSchuss(n: boolean): void {
            this.schuss = n;
        }
        setLaden(n: boolean): void {
            this.laden = n;
        }
    }

}        
