/*
Aufgabe: 7, StudiVZ
Name: Pedja Grba
Matrikel: 256212
Datum: 04.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace StudiVZ {
    interface StudentData {
        matrikelnummer: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;
    
    //prompt ruft Fenster zum eingeben auf
    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        
        //verschiedene Fälle werden definiert
        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=m oder 1=w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        
        //Student Objekt vom Typ StudentData erstellen
        let stringToSplit: string[] = _input.split(",", 6);   //string wird in 6 Teile gesplitted
        if (parseInt(stringToSplit[0]) == NaN) {
            return "'Matrikelnummer' muss eine Zahl sein";
        }
        else if (stringToSplit[1] == "") {
            return "'Name' darf nicht leer sein";
        }
        else if (stringToSplit[2] == "") {
            return "'Vorname' darf nicht leer sein";
        }
        else if (parseInt(stringToSplit[3]) == NaN) {
            return "'Alter' muss eine Zahl sein";
        }
        else if (parseInt(stringToSplit[4]) != 1 && parseInt(stringToSplit[4]) != 0) {
                return "'Geschlecht' bitte mit 0=m oder 1=w eingeben; Eingabe war: " + stringToSplit[4];
        }
        else if (stringToSplit[5] == "") {
            return "'Kommentar' als Wörter eingeben";
        }
        else {
            let student: StudentData = {
                matrikelnummer: parseInt(stringToSplit[0]),          //parseInt wandelt string in number
                name: stringToSplit[1],
                vorname: stringToSplit[2],
                alter: parseInt(stringToSplit[3]),
                geschlecht: parseInt(stringToSplit[4]) == 1,
                kommentar: stringToSplit[5]
            };
            students.push(student);
            console.log(students);
            return "Erfolgreich gespeichert";
        }
    }

    function queryData(_matrikel: number): string {
        for (var i: number = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {
                let matrikelnummer: string = "Matrikelnummer " + students[i].matrikelnummer;
                let name: string = "Name: " + students[i].name;
                let vorname: string = "Vorname: " + students[i].vorname;
                let alter: string = "Alter: " + students[i].alter;
                
                let geschlecht: string;
                if (students[i].geschlecht)
                    geschlecht = "Geschlecht: weiblich";
                else
                    geschlecht = "Geschlecht: männlich";
                
                let kommentar: string = "Kommentar: " + students[i].kommentar;

                return "Deine Daten: " + "\n" + matrikelnummer + "\n" + name + "\n" + vorname + "\n" + alter + "\n" + geschlecht + "\n" + kommentar;
            }
        }
    }
}
