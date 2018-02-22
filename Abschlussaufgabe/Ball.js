/*
    Aufgabe: Abschlussaufgabe
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 12.02.2018
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
var abschluss;
(function (abschluss) {
    class Ball {
        constructor(_spieler, _tafel) {
            this.rotate = 180;
            this.laden = false;
            this.kraft = 0;
            this.xBall = 100;
            this.yBall = 380;
            this.schuss = false;
            this.spieler = _spieler;
            this.tafel = _tafel;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
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
        draw() {
            abschluss.crc2.translate(this.xBall, this.yBall);
            abschluss.crc2.rotate(this.rotate * Math.PI / 180);
            abschluss.crc2.beginPath();
            abschluss.crc2.fillStyle = "black";
            abschluss.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
            abschluss.crc2.fill();
            abschluss.crc2.closePath();
            abschluss.crc2.beginPath();
            abschluss.crc2.fillStyle = "white";
            abschluss.crc2.arc(0, 0, 17, 0, 2 * Math.PI);
            abschluss.crc2.fill();
            abschluss.crc2.closePath();
            abschluss.crc2.beginPath();
            abschluss.crc2.font = "10px Verdana";
            abschluss.crc2.fillStyle = "red";
            abschluss.crc2.fillText("SGE", -10, 3);
            abschluss.crc2.rotate(-this.rotate * Math.PI / 180);
            abschluss.crc2.translate(-this.xBall, -this.yBall);
        }
        setSchuss(n) {
            this.schuss = n;
        }
        setLaden(n) {
            this.laden = n;
        }
    }
    abschluss.Ball = Ball;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=Ball.js.map