/* Name: Predrag Grba
     Matrikel:256212
     Datum:18.12.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/
var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeydown);
    let text;
    let aBisZ;
    let tempABisZ = "";
    function init() {
        //      console.log("Hallo");
        aBisZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        for (let i = 0; i < aBisZ.length; i++) {
            let s1 = document.createElement("div");
            s1.style.width = "40px";
            s1.style.margin = "2px";
            s1.style.height = "40px";
            s1.style.backgroundColor = "#A4A4A4";
            s1.style.color = "white";
            s1.style.fontSize = "30px";
            s1.style.display = "inline";
            s1.style.textAlign = "center";
            s1.innerText = aBisZ[i];
            s1.id = aBisZ[i].toLowerCase();
            s1.addEventListener("mousedown", handleMouseDownS1);
            document.body.appendChild(s1);
        }
        let s2 = document.createElement("div");
        s2.style.backgroundColor = "#A4A4A4";
        s2.style.width = "1150px";
        s2.style.height = "500px";
        s2.style.marginTop = "10px";
        s2.addEventListener("mousedown", handleMouseDownS2);
        document.body.appendChild(s2);
    }
    function handleMouseDownS1(_event) {
        //      console.log(_event.target);
        if (tempABisZ == "") {
            let h = _event.target;
            //          console.log(h.innerText);
            h.style.color = "#A4A4A4";
            h.style.backgroundColor = "white";
            tempABisZ = h.id.toUpperCase();
        }
    }
    function handleMouseDownS2(_event) {
        if (tempABisZ == "")
            return;
        text = document.createElement("div");
        text.innerText = tempABisZ;
        text.style.position = "absolute";
        text.style.color = "white";
        text.style.fontSize = "30px";
        text.style.fontFamily = "'Shadows Into Light', cursive";
        text.style.left = _event.pageX.toString();
        text.style.top = _event.pageY.toString();
        text.addEventListener("mousedown", handleMouseDownDelete);
        document.body.appendChild(text);
        let clickedDiv = document.getElementById(tempABisZ.toLowerCase());
        clickedDiv.style.color = "white";
        clickedDiv.style.backgroundColor = "#A4A4A4";
        tempABisZ = "";
    }
    function handleKeydown(_event) {
        //        console.log(_event);
        if (aBisZ.indexOf(_event.key.toUpperCase()) != -1) {
            let h = document.getElementById(_event.key);
            //          console.log(h.innerText);
            h.style.color = "#A4A4A4";
            h.style.backgroundColor = "white";
            tempABisZ = _event.key.toUpperCase();
        }
    }
    function handleMouseDownDelete(_event) {
        //        console.log("Funktion wird aufgerufen");
        if (_event.altKey == false)
            return;
        if (_event.altKey == true) {
            let h = _event.target;
            document.body.removeChild(h);
        }
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=mainEvent.js.map