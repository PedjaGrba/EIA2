/*
    Aufgabe: Abschlussaufgabe
    Name: Pedja Grba
    Matrikel: 256212
    Datum: 12.02.2018
        
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    */
var abschluss;
(function (abschluss) {
    class Tafel {
        constructor() {
            this.tore = 0;
            this.txt = "";
            this.texte = ["WOW", "PROFISPIELER?", "FAST  WIE ROBBEN", "ROBBEN, BIST DU ES?", "PERFEKT!"];
            this.texteS = ["DAS GEHT BESSER", "VERSUCHS WEITER", "NICHT GUT", "GEB NICHT AUF", "SPIEL LIEBER CURLING"];
            //
        }
        update() {
            this.draw();
        }
        draw() {
            abschluss.crc2.fillStyle = "grey";
            abschluss.crc2.fillRect(220, 0, 20, 20);
            abschluss.crc2.fillRect(460, 0, 20, 20);
            abschluss.crc2.fillRect(200, 20, 300, 100);
            abschluss.crc2.fillStyle = "black";
            abschluss.crc2.fillRect(210, 30, 280, 80);
            abschluss.crc2.fillStyle = "white";
            abschluss.crc2.font = "20px Verdana";
            abschluss.crc2.fillText("TORE:" + this.tore, 300, 50);
            abschluss.crc2.fillText("" + this.txt, 230, 100);
        }
        textLob() {
            this.tore++;
            let rand = Math.random() * 10;
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
        textSchande() {
            let rand = Math.random() * 10;
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
    abschluss.Tafel = Tafel;
})(abschluss || (abschluss = {}));
//# sourceMappingURL=Tafel.js.map