/*
    Aufgabe: Abschlussaufgabe
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 12.02.2018
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */

namespace abschluss {

    export class Tafel {
        tore: number = 0;
        txt: string = "";
        texte: string[] = ["WOW", "PROFISPIELER?", "FAST  WIE ROBBEN", "ROBBEN, BIST DU ES?", "PERFEKT!"];
        texteS: string[] = ["DAS GEHT BESSER", "VERSUCHS WEITER", "NICHT GUT", "GEB NICHT AUF", "SPIEL LIEBER CURLING"];


        constructor() {
//
        }


        update(): void {
            this.draw();
        }




        draw(): void {
            crc2.fillStyle = "grey";
            crc2.fillRect(220, 0, 20, 20);
            crc2.fillRect(460, 0, 20, 20);
            crc2.fillRect(200, 20, 300, 100);
            crc2.fillStyle = "black";
            crc2.fillRect(210, 30, 280, 80);
            crc2.fillStyle = "white";
            crc2.font = "20px Verdana";
            crc2.fillText("TORE:" + this.tore, 300, 50);
            crc2.fillText("" + this.txt, 230, 100);
        }

        textLob(): void {
            this.tore++;
            let rand: number = Math.random() * 10;
            if (rand <= 2) {
                this.txt = this.texte[0];
            }
            else if (rand <= 4) {
                this.txt = this.texte[1];
            }
            else if (rand <= 6) {
                this.txt = this.texte[2];
            }
            else if (rand <= 8) {
                this.txt = this.texte[3];
            }
            else if (rand <= 10) {
                this.txt = this.texte[4];
            }
        }
        textSchande(): void {
            let rand: number = Math.random() * 10;
            if (rand <= 2) {
                this.txt = this.texteS[0];
            }
            else if (rand <= 4) {
                this.txt = this.texteS[1];
            }
            else if (rand <= 6) {
                this.txt = this.texteS[2];
            }
            else if (rand <= 8) {
                this.txt = this.texteS[3];
            }
            else if (rand <= 10) {
                this.txt = this.texteS[4];
            }
        }


    }

}        
