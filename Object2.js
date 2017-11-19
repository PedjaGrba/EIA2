/*
    Aufgabe: 5, Objektorientierte Skipiste
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 15.11.2017
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
var aufgabe5;
(function (aufgabe5) {
    class Object2 {
        constructor(_x, _y) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 600;
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
            aufgabe5.crc2.beginPath();
            aufgabe5.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            aufgabe5.crc2.fillStyle = "#FFFFFF";
            aufgabe5.crc2.fill();
        }
        setRandomStyle() {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    aufgabe5.Object2 = Object2;
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Object2.js.map