/*
    Aufgabe: 6, Inheritance: Polymorphe Skipiste
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 22.11.2017
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
var aufgabe6;
(function (aufgabe6) {
    class Object2 extends aufgabe6.MoveObjects {
        constructor(_x, _y) {
            super(_x + Math.random() * 800, _y + Math.random() * 600);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += 3;
        }
        draw() {
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#FFFFFF";
            aufgabe6.crc2.fill();
        }
    }
    aufgabe6.Object2 = Object2;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Object2.js.map