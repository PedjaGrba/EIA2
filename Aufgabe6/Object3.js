/*
    Aufgabe: 6, Inheritance: Polymorphe Skipiste
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 22.11.2017
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
var aufgabe6;
(function (aufgabe6) {
    class Object3 extends aufgabe6.MoveObjects {
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
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x + 30, this.y, 50, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x, this.y - 40, 40, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x, this.y, 60, 0, 2 * Math.PI);
            aufgabe6.crc2.fillStyle = "#FFFFFF";
            aufgabe6.crc2.fill();
        }
    }
    aufgabe6.Object3 = Object3;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Object3.js.map