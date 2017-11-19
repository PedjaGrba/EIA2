/*
   Aufgabe: 5, Objektorientierte Skipiste
   Name: Pedja Grba
   Matrikel: 256212
   Datum: 15.11.2017
       
   Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
   */
var aufgabe5;
(function (aufgabe5) {
    class Object1 {
        constructor(_x, _y) {
            this.x = _x + 0;
            this.y = _y + 250 + Math.random() * 300;
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
            aufgabe5.crc2.fillStyle = this.color;
            aufgabe5.crc2.fillRect(this.x, this.y, 10, -25);
            aufgabe5.crc2.fillStyle = "#B40431.color";
            aufgabe5.crc2.fillRect(this.x, this.y, 10, -25);
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x + 20, this.y - 35, 15, 0, 2 * Math.PI);
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.moveTo(this.x - 30, this.y - 15);
            aufgabe5.crc2.lineTo(this.x + 40, this.y + 10);
            aufgabe5.crc2.stroke();
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    aufgabe5.Object1 = Object1;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Object1.js.map