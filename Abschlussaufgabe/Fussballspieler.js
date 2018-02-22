/*
   Aufgabe: Abschlussaufgabe
   Name: Pedja Grba
   Matrikel: 256212
   Datum: 12.02.2018
       
   Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
   */
var abschluss;
(function (abschluss) {
    class Fussballspieler {
        constructor() {
            this.schuss = false;
            this.rotate2 = 180;
            this.kickHoch = false;
            //
        }
        setSchuss(n) {
            this.schuss = n;
        }
        setKickHoch(n) {
            this.schuss = n;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.schuss == true && this.rotate2 < 300 && this.kickHoch == false) {
                this.rotate2 += 5;
            }
            else {
                if (this.rotate2 >= 300) {
                }
                if (this.rotate2 > 180) {
                    this.rotate2 -= 5;
                }
            }
            abschluss.crc2.translate(45, 340);
            abschluss.crc2.rotate(-this.rotate2 * Math.PI / 180);
            abschluss.crc2.fillStyle = "black";
            abschluss.crc2.fillRect(0, 0, -20, -60);
            abschluss.crc2.rotate(this.rotate2 * Math.PI / 180);
            abschluss.crc2.translate(-45, -340);
        }
        draw() {
            abschluss.crc2.beginPath();
            abschluss.crc2.fillStyle = "#F5D0A9";
            abschluss.crc2.arc(50, 250, 20, 0, 2 * Math.PI);
            abschluss.crc2.fill();
            abschluss.crc2.closePath();
            abschluss.crc2.fillStyle = "red";
            abschluss.crc2.fillRect(40, 270, 30, 70);
            abschluss.crc2.fillStyle = "black";
            abschluss.crc2.fillRect(50, 280, 10, 60);
            abschluss.crc2.fillStyle = "black";
            abschluss.crc2.fillRect(45, 340, 20, 60);
        }
    }
    abschluss.Fussballspieler = Fussballspieler;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=Fussballspieler.js.map