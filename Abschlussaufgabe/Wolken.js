/*
    Aufgabe: Abschlussaufgabe
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 12.02.2018
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
var abschluss;
(function (abschluss) {
    class Wolken extends abschluss.MovingStadium {
        constructor(_x, _y) {
            super(_x + Math.random() * 800, _y + Math.random() * 150 + 40);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += 2;
        }
        draw() {
            abschluss.crc2.beginPath();
            abschluss.crc2.fillStyle = "#FFFFFF";
            abschluss.crc2.arc(this.x + 30, this.y, 50, 0, 2 * Math.PI);
            abschluss.crc2.fill();
            abschluss.crc2.beginPath();
            abschluss.crc2.arc(this.x, this.y - 40, 40, 0, 2 * Math.PI);
            abschluss.crc2.fill();
            abschluss.crc2.beginPath();
            abschluss.crc2.arc(this.x, this.y, 60, 0, 2 * Math.PI);
            abschluss.crc2.fill();
        }
    }
    abschluss.Wolken = Wolken;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=Wolken.js.map