/*
   Aufgabe: 6, Inheritance: Polymorphe Skipiste
   Name: Pedja Grba
   Matrikel: 256212
   Datum: 22.11.2017
       
   Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
   */

namespace aufgabe6 {

    export class MoveObjects {
        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number) {
            
            this.x = _x;
            this.y = _y;
        }



        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            //Hallo
}

        draw(): void {
            //Hallo
        }
    }
}