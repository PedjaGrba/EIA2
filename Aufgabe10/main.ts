/* Name:Predrag Grba
     Matrikel:256212
     Datum:07.01.18
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/




namespace Aufgabe10 {
    
    window.addEventListener("load", init);
    
//1.Variablen erstellen und befüllen bzw. kreeieren 
       
    //AuswahlBoxen
    let baumart: HTMLSelectElement = document.createElement("select");
    let halterungen: HTMLSelectElement = document.createElement("select"); //Selekt Boxen erstellen
    let lieferoptionen: HTMLSelectElement = document.createElement("select");
    let korb: HTMLDivElement = document.createElement("div"); //Warenkorb Div erstellen
    
    //Persönlich //Texteingabefelder erstellen
    let persName: HTMLInputElement = document.createElement("input");
    let persVorname: HTMLInputElement = document.createElement("input");
    let persMail: HTMLInputElement = document.createElement("input"); 
    let persAdresse: HTMLInputElement = document.createElement("input");
    let persPlz: HTMLInputElement = document.createElement("input");

    //Button
    let prufen: HTMLDivElement = document.createElement("div"); 

//All die erstellten Elemente werden später im Code mit Eigenschaften ausgestattet und ans DOM gehängt
    
    let gesamtpreis: number = 0; //Festlegen einer Gesamtpreis Variable, damit diese überall im Dokument aufrufbar ist

    
//2.GROßE FUNKTION    
    
    function init(): void {
        
        //Warenkorb definieren und anhängen ans HTML
        let h2: HTMLHeadingElement = document.createElement("h2"); //Warenkorb Überschrift
        h2.innerText = "Warenkorb"; //Text der Überschrift
        h2.style.position = "absolute"; //CSS Gestaltung
        h2.style.right = "125px";
        h2.style.top = "0px";
        h2.style.zIndex = "99";
        document.getElementById("korbid").appendChild(h2); //Überschrift an div mit id korb id ins DOM hinzufügen
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

        for (let i: number = 0; i < baumdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = baumdaten[i].name; 
            baumart.id = baumdaten[i].element;     //Baumart bzw. die id des Elements zuweisen, siehe Daten.ts
                                                   //Wird später im Warenkorb gebraucht um zu prüfen ob Objekt schon vorhanden ist 
            baumart.appendChild(option);
        }


//HALTERUNGEN
        
        //Halterungen definieren und anhängen          
        halterungen.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterungen);

        for (let i: number = 0; i < halterungdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = halterungdaten[i].name;
            halterungen.id = halterungdaten[i].element; 
            halterungen.appendChild(option);
        }

 //KUGELN ANDERS  
           
        //Kugeln definieren und anhängen + anonyme Funktion im EventListener     
        for (let i: number = 0; i < kugeldaten.length; i++) {
            
            let kugeln: HTMLInputElement = document.createElement("input");
            kugeln.type = "checkbox"; //Macht es zur Checkbox
            kugeln.id = kugeldaten[i].element; //Halterung bzw. id des Elements zuweisen, siehe Daten.ts
            kugeln.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu übergeben
                CheckBoxKugelnAuslesen(kugeln, "1"); //Werte übergeben-in kugeln ist alles enthalten
            });
                           
            document.getElementById("kugeln").appendChild(kugeln);

            //Labels hinzufügen (Rot,Grün,Gelb) und anhängen
            let kugellabel: HTMLLabelElement = document.createElement("label");
            kugellabel.innerText = kugeldaten[i].name;
            document.getElementById("kugeln").appendChild(kugellabel);

            //ANDERS:Anzahl der Kugeln definieren und anhängen
            let kugelanzahl: HTMLInputElement = document.createElement("input");
            kugelanzahl.type = "number"; //Nummern werden hochgezählt
            kugelanzahl.step = "1";
            kugelanzahl.min = "0";
            kugelanzahl.value = "1";
            kugelanzahl.style.marginRight = "1.5em";
            kugelanzahl.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu übergeben
                kugeln.checked = true; //Chekbox anhaken, wenn Wert geändert wird
                CheckBoxKugelnAuslesen(kugeln, kugelanzahl.value);
            });
            document.getElementById("kugeln").appendChild(kugelanzahl);
        }

//KERZEN ANDERS

        //Kerzen definieren und anhängen + anonyme Funktion im EventListener       
        for (let i: number = 0; i < kerzendaten.length; i++) {
            let kerzen: HTMLInputElement = document.createElement("input");
            kerzen.type = "checkbox";
            kerzen.id = kerzendaten[i].element;
            kerzen.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu übergeben
                CheckBoxKerzenPreisAuslesen(kerzen, "1");
            });
                   
            document.getElementById("kerzen").appendChild(kerzen);

            //Label hinzufügen für Kerzen.Rot,Grün,Gelb
            let kerzelabel: HTMLLabelElement = document.createElement("label");
            kerzelabel.innerText = kerzendaten[i].name;
            document.getElementById("kerzen").appendChild(kerzelabel);

            //Anzahl
            let kerzenanzahl: HTMLInputElement = document.createElement("input");
            kerzenanzahl.type = "number";
            kerzenanzahl.step = "1";
            kerzenanzahl.min = "0";
            kerzenanzahl.value = "1";
            kerzenanzahl.style.marginRight = "1.5em";
            kerzenanzahl.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu übergeben
                kerzen.checked = true; //Chekbox Anhaken wenn wert geändert wird
                CheckBoxKerzenPreisAuslesen(kerzen, kerzenanzahl.value);
            });
            document.getElementById("kerzen").appendChild(kerzenanzahl);
        }


//LIEFEROPTIONEN
        
        //Lieferoption definieren und anhängen       
        lieferoptionen.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferoptionen);

        for (let i: number = 0; i < lieferoptionendaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = lieferoptionendaten[i].name;
            lieferoptionen.id = lieferoptionendaten[i].element;
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
        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Bestellung Prüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
    }

//5.GROßE FUNKTION WEITERHIN + FUNKTIONEN FÜR CHECKBOXEN KUGELN,KERZEN,BAUMART ZUM AUSLESEN
    
    function CheckBoxKugelnAuslesen(checkBoxElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < kugeldaten.length; i++) {
            if (kugeldaten[i].element == checkBoxElement.id) {

                Warenkorb(checkBoxElement.id, kugeldaten[i].name, kugeldaten[i].preis, parseInt(anzahl), checkBoxElement.checked);

            }
        }
    }

    function CheckBoxKerzenPreisAuslesen(checkBoxElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < kerzendaten.length; i++) {
            if (kerzendaten[i].element == checkBoxElement.id) {
                Warenkorb(checkBoxElement.id, kerzendaten[i].name, kerzendaten[i].preis, parseInt(anzahl), checkBoxElement.checked);
            }
        }
    }


    function AuswahlAuslesen(): void {
        var baumname: string = baumart.value; //baumtyp.value == ausgewählter Wert im DropDown
        if (baumname != "") {
            ZuWarenkorb(baumdaten, true, baumname); //true --> Element ist ausgewählt
        }
        else {
            ZuWarenkorb(baumdaten, false, baumname); //false --> Element wurde abgewählt
        }


        var halterungname: string = halterungen.value;
        if (halterungname != "") {
            ZuWarenkorb(halterungdaten, true, halterungname);
        } else {
            ZuWarenkorb(halterungdaten, false, halterungname);
        }



        var lieferant: string = lieferoptionen.value;
        if (lieferant != "") {
            ZuWarenkorb(lieferoptionendaten, true, lieferant);
        }
    }

    //Wird von DropDown genutzt; Sucht nach dem Preis
    function ZuWarenkorb(daten: Daten[], ischeckt: boolean, elementname: string): void { 

        for (let i: number = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewählt werden kann
            }
        }
    }

//6.NEUE FUNKTION,WARENKORB
    
    function Warenkorb(elementId: string, value: string, preis: number, anzahl: number, selected: boolean): void {

        var preisElement: number; //Preis von Anzahl * Element berechnen
        preisElement = anzahl * preis;

        //Wird erst bei zweitem Durchgang ausgeführt, zu Beginn KEINE Elemente in Korb vorhanden
        for (let i: number = 0; i < korb.getElementsByTagName("p").length; i++) { //Warenkorb auf vorhandene p prüfen
            if (korb.getElementsByTagName("p")[i].id == elementId) { //Vergleicht Elemente im Warenkorb mit ausgewähltem Element
                var innerPreis: string = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //Preis extrahieren
                korb.getElementsByTagName("p")[i].remove(); //Wenn vorhanden Element löschen
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen
            }
            
            //Gesamtpreis p-Zeilen entfernen, um später aktualisiert zurück einzufügen
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                korb.getElementsByTagName("p")[i].remove();
            }
        }

        if (selected) {
            var p: HTMLParagraphElement = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            gesamtpreis = gesamtpreis + preisElement; //Gesamtpreis erhöhen
            korb.appendChild(p);
        }

        //Gesamtpreis wieder hinzufügen
        var pGesamt: HTMLParagraphElement = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        korb.appendChild(pGesamt);
    }

//7.NEUE FUNKTION, DATEN PRÜFEN
    
    function PrufeDaten(): void {

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



}