/*
    Aufgabe: 5, Objektorientierte Skipiste
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 15.11.2017
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
var aufgabe5;
(function (aufgabe5) {
    class Object3 {
        constructor(_x, _y) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 150 + 40;
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
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x + 30, this.y, 50, 0, 2 * Math.PI);
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x, this.y - 40, 40, 0, 2 * Math.PI);
            aufgabe5.crc2.fill();
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x, this.y, 60, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#FFFFFF";
            aufgabe5.crc2.fill();
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    aufgabe5.Object3 = Object3;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Object3.js.map