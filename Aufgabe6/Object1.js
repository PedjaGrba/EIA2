/*
   Aufgabe: 6, Inheritance: Polymorphe Skipiste
   Name: Pedja Grba
   Matrikel: 256212
   Datum: 22.11.2017
       
   Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
   */
var aufgabe6;
(function (aufgabe6) {
    class Object1 extends aufgabe6.MoveObjects {
        constructor(_x, _y) {
            super(_x + 0, _y + 250 + Math.random() * 300);
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
                this.y = 250 + Math.random() * 300;
            }
            this.x += 10;
            this.y += 5;
        }
        draw() {
            aufgabe6.crc2.fillStyle = this.color;
            aufgabe6.crc2.fillRect(this.x, this.y, 10, -25);
            aufgabe6.crc2.fillStyle = "#B40431.color";
            aufgabe6.crc2.fillRect(this.x, this.y, 10, -25);
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.arc(this.x + 20, this.y - 35, 15, 0, 2 * Math.PI);
            aufgabe6.crc2.fill();
            aufgabe6.crc2.beginPath();
            aufgabe6.crc2.moveTo(this.x - 30, this.y - 15);
            aufgabe6.crc2.lineTo(this.x + 40, this.y + 10);
            aufgabe6.crc2.stroke();
        }
    }
    aufgabe6.Object1 = Object1;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=Object1.js.map