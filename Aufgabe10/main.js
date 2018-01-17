/* Name:Predrag Grba
     Matrikel:256212
     Datum:07.01.18
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/
var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    //1.Variablen erstellen und befüllen bzw. kreeieren 
    //AuswahlBoxen
    let baumart = document.createElement("select");
    let halterungen = document.createElement("select"); //Selekt Boxen erstellen
    let lieferoptionen = document.createElement("select");
    let korb = document.createElement("div"); //Warenkorb Div erstellen
    //Persönlich //Texteingabefelder erstellen
    let persName = document.createElement("input");
    let persVorname = document.createElement("input");
    let persMail = document.createElement("input");
    let persAdresse = document.createElement("input");
    let persPlz = document.createElement("input");
    //Button
    let prufen = document.createElement("div");
    //All die erstellten Elemente werden später im Code mit Eigenschaften ausgestattet und ans DOM gehängt
    //2.GROßE FUNKTION    
    function init() {
        //Warenkorb definieren und anhängen ans HTML
        let h2 = document.createElement("h2"); //Warenkorb Überschrift
        h2.innerText = "Warenkorb"; //Text der Überschrift
        h2.style.position = "absolute"; //CSS Gestaltung
        h2.style.right = "125px";
        h2.style.top = "0px";
        h2.style.zIndex = "99";
        document.getElementById("korbid").appendChild(h2); //Überschrift an div mit id korb ins DOM hinzufügen
        korb.style.display = "inline-block"; //Warenkorb stylen
        korb.style.position = "absolute";
        korb.style.right = "5px";
        korb.style.top = "5px";
        korb.style.width = "250px";
        korb.style.height = "200px";
        korb.style.backgroundColor = "#FA5858";
        korb.style.paddingTop = "40px";
        korb.style.paddingLeft = "90px";
        document.getElementById("korbid").appendChild(korb); //Warenkorb (korb) an DOM anhängen
        //3.GROßE FUNKTION WEITERHIN + BAUMART,HALTERUNGEN,KUGELN,KERZEN DEFINIERT UND ANHÄNGEN AN HTML bzw. DIV     
        //BAUMART
        //Baum definieren und anhängen        
        baumart.addEventListener("change", AuswahlAuslesen); //oben erstellten baumart vararbeiten
        document.getElementById("baumtyp").appendChild(baumart);
        for (let i = 0; i < Aufgabe10.baumdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.baumdaten[i].name;
            baumart.id = Aufgabe10.baumdaten[i].element; //Baumart bzw. die id des Elements zuweisen, siehe Daten.ts
            //Wird später im Warenkorb gebraucht um zu prüfen ob Objekt schon vorhanden ist 
            baumart.appendChild(option);
        }
        //HALTERUNGEN
        //Halterungen definieren und anhängen          
        halterungen.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterungen);
        for (let i = 0; i < Aufgabe10.halterungdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.halterungdaten[i].name;
            halterungen.id = Aufgabe10.halterungdaten[i].element;
            halterungen.appendChild(option);
        }
        //KUGELN ANDERS  
        //Kugeln definieren und anhängen + anonyme Funktion im EventListener     
        for (let i = 0; i < Aufgabe10.kugeldaten.length; i++) {
            let kugeln = document.createElement("input");
            kugeln.type = "checkbox"; //Macht es zur Checkbox
            kugeln.id = Aufgabe10.kugeldaten[i].element; //Halterung bzw. id des Elements zuweisen, siehe Daten.ts
            kugeln.addEventListener("change", function () {
                CheckBoxKugelnPreisAuslesen(kugeln, "1"); //Werte übergeben-in kugeln ist alles enthalten
            });
            document.getElementById("kugeln").appendChild(kugeln);
            //Labels hinzufügen (Rot,Grün,Gelb) und anhängen
            let kugellabel = document.createElement("label");
            kugellabel.innerText = Aufgabe10.kugeldaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);
            //ANDERS:Anzahl der Kugeln definieren und anhängen
            let kugelanzahl = document.createElement("input");
            kugelanzahl.type = "number"; //Nummern werden hochgezählt
            kugelanzahl.step = "1";
            kugelanzahl.min = "0";
            kugelanzahl.value = "1";
            kugelanzahl.style.marginRight = "1.5em";
            kugelanzahl.addEventListener("change", function () {
                kugeln.checked = true; //Chekbox anhaken, wenn Wert geändert wird
                CheckBoxKugelnPreisAuslesen(kugeln, kugelanzahl.value);
            });
            document.getElementById("kugeln").appendChild(kugelanzahl);
        }
        //KERZEN ANDERS
        //Kerzen definieren und anhängen + anonyme Funktion im EventListener       
        for (let i = 0; i < Aufgabe10.kerzendaten.length; i++) {
            let kerzen = document.createElement("input");
            kerzen.type = "checkbox";
            kerzen.id = Aufgabe10.kerzendaten[i].element;
            kerzen.addEventListener("change", function () {
                CheckBoxKerzenPreisAuslesen(kerzen, "1");
            });
            document.getElementById("kerzen").appendChild(kerzen);
            //Label hinzufügen für Kerzen.Rot,Grün,Gelb
            let kerzelabel = document.createElement("label");
            kerzelabel.innerText = Aufgabe10.kerzendaten[i].name;
            document.getElementById("kerzen").appendChild(kerzelabel);
            //Anzahl
            let kerzenanzahl = document.createElement("input");
            kerzenanzahl.type = "number";
            kerzenanzahl.step = "1";
            kerzenanzahl.min = "0";
            kerzenanzahl.value = "1";
            kerzenanzahl.style.marginRight = "1.5em";
            kerzenanzahl.addEventListener("change", function () {
                kerzen.checked = true; //Chekbox Anhaken wenn wert geändert wird
                CheckBoxKerzenPreisAuslesen(kerzen, kerzenanzahl.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanzahl);
        }
        //LIEFEROPTIONEN
        //Lieferoption definieren und anhängen       
        lieferoptionen.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferoptionen);
        for (let i = 0; i < Aufgabe10.lieferoptionendaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe10.lieferoptionendaten[i].name;
            lieferoptionen.id = Aufgabe10.lieferoptionendaten[i].element;
            lieferoptionen.appendChild(option);
        }
        //4.GROßE FUNKTION WEITERHIN + PERSÖNLICHE DATEN
        //Persönliche Daten Eingeben
        persName.type = "text";
        persName.placeholder = "Name";
        persName.required = true;
        persName.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persName);
        persVorname.type = "text";
        persVorname.placeholder = "Vorname";
        persVorname.required = true;
        persVorname.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persVorname);
        persMail.type = "email"; //Um Nutzung von @-Zeichen vorrauszusetzen
        persMail.placeholder = "Email, bitte @ nicht vergessen";
        persMail.required = true;
        persMail.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persMail);
        persAdresse.type = "text";
        persAdresse.placeholder = "Adresse";
        persAdresse.required = true;
        persAdresse.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persAdresse);
        persPlz.type = "text";
        persPlz.placeholder = "PLZ";
        persPlz.required = true;
        document.getElementById("persdaten").appendChild(persPlz);
        //5.BUTTON ERSTELLEN FÜR ÜBERPRÜFUNG BESTELLUNG
        //Button generieren
        let button = document.createElement("button");
        button.innerText = "Bestellung Prüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
    }
    //5.NEUE FUNKTIONEN FÜR CHECKBOXEN KUGELN,KERZEN,BAUMART ZUM AUSLESEN
    function CheckBoxKugelnPreisAuslesen(checkBoxElement, anzahl) {
        for (let i = 0; i < Aufgabe10.kugeldaten.length; i++) {
            if (Aufgabe10.kugeldaten[i].element == checkBoxElement.id) {
                Warenkorb(checkBoxElement.id, Aufgabe10.kugeldaten[i].name, Aufgabe10.kugeldaten[i].preis, parseInt(anzahl), checkBoxElement.checked);
            }
        }
    }
    function CheckBoxKerzenPreisAuslesen(checkBoxElement, anzahl) {
        for (let i = 0; i < Aufgabe10.kerzendaten.length; i++) {
            if (Aufgabe10.kerzendaten[i].element == checkBoxElement.id) {
                Warenkorb(checkBoxElement.id, Aufgabe10.kerzendaten[i].name, Aufgabe10.kerzendaten[i].preis, parseInt(anzahl), checkBoxElement.checked);
            }
        }
    }
    function AuswahlAuslesen() {
        var baumname = baumart.value; //baumtyp.value == ausgewählter Wert im DropDown
        if (baumname != "") {
            ZuWarenkorb(Aufgabe10.baumdaten, true, baumname); //true --> Element ist ausgewählt
        }
        else {
            ZuWarenkorb(Aufgabe10.baumdaten, false, baumname); //false --> Element wurde abgewählt
        }
        var halterungname = halterungen.value;
        if (halterungname != "") {
            ZuWarenkorb(Aufgabe10.halterungdaten, true, halterungname);
        }
        else {
            ZuWarenkorb(Aufgabe10.halterungdaten, false, halterungname);
        }
        var lieferant = lieferoptionen.value;
        if (lieferant != "") {
            ZuWarenkorb(Aufgabe10.lieferoptionendaten, true, lieferant);
        }
    }
    //Wird von DropDown genutzt; Sucht nach dem Preis
    function ZuWarenkorb(daten, gecheckt, elementname) {
        for (let i = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, gecheckt); //1 --> da nur ein Element ausgewählt werden kann
            }
        }
    }
    //6.NEUE FUNKTION,WARENKORB
    function Warenkorb(elementId, value, preis, anzahl, selected) {
        let gesamtpreis = 0; //Festlegen einer Gesamtpreis Variable, damit diese überall im Dokument aufrufbar ist
        let preisElement; //Preis von Anzahl * Element berechnen
        preisElement = anzahl * preis;
        //erstelle p
        if (selected) {
            var p = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            gesamtpreis = gesamtpreis + preisElement; //Gesamtpreis erhöhen
            korb.appendChild(p);
        }
        //Wird erst bei zweitem Durchgang ausgeführt, zu Beginn KEINE Elemente in Korb vorhanden
        for (let i = 0; i < korb.getElementsByTagName("p").length; i++) {
            if (korb.getElementsByTagName("p")[i].id == elementId) {
                var innerPreis = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //Preis extrahieren
                korb.getElementsByTagName("p")[i].remove(); //Wenn vorhanden Element löschen
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen
            }
            //Gesamtpreis p-Zeilen entfernen, um später aktualisiert zurück einzufügen
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                korb.getElementsByTagName("p")[i].remove();
            }
        }
        //Gesamtpreis wieder hinzufügen
        var pGesamt = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        korb.appendChild(pGesamt);
    }
    //7.NEUE FUNKTION, DATEN PRÜFEN
    function PrufeDaten() {
        prufen.innerText = "";
        if (persName.checkValidity() == false || persVorname.checkValidity() == false || persMail.checkValidity() == false || persPlz.checkValidity() == false || persAdresse.checkValidity() == false) {
            prufen.innerText = "Deine Eingabe war leider fehlerhaft! Überprüfe sie noch einmal.";
            prufen.style.color = "red";
            document.body.appendChild(prufen);
        }
        else {
            prufen.innerText = "Deine Bestellung wurde erfolgreich verifiziert!";
            prufen.style.color = "green";
            document.body.appendChild(prufen);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main.js.map