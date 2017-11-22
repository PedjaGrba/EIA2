/*
   Aufgabe: 6, Inheritance: Polymorphe Skipiste
   Name: Pedja Grba
   Matrikel: 256212
   Datum: 22.11.2017
       
   Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
   */
var aufgabe6;
(function (aufgabe6) {
    class MoveObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            //Hallo
        }
        draw() {
            //Hallo
        }
    }
    aufgabe6.MoveObjects = MoveObjects;
})(aufgabe6 || (aufgabe6 = {}));
//# sourceMappingURL=MoveObjects.js.map