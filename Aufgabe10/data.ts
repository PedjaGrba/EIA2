/* Name:Predrag Grba
     Matrikel:256212
     Datum:07.01.18
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/



namespace Aufgabe10 {

export interface Daten {
    element: string;
    name: string;
    preis: number;
}
    

export let baumdaten: Daten[] = [ //multidimensionales heterogenes Array
    {element: "baum", name: "", preis: 0},
    {element: "baum", name: "Fichte", preis: 19},
    {element: "baum", name: "Nordmanntanne", preis: 30}
];
   
export let halterungdaten: Daten[] = [
    {element: "halterung", name: "", preis: 0},
    {element: "halterung", name: "Sternhalterung", preis: 10},
    {element: "halterung", name: "Viereckhalterung", preis: 7}
];
    
    
export let kugeldaten: Daten[] = [
    {element: "kugelR", name: "Rot", preis: 10},
    {element: "kugelG", name: "Gold", preis: 7},
    {element: "kugelB", name: "Blau", preis: 7}
];    
    
    
export let kerzendaten: Daten[] = [
    {element: "kerzeR", name: "Rot", preis: 10},
    {element: "kerzeB", name: "Bunt", preis: 7},
    {element: "kerzeG", name: "Gelb", preis: 7}
]; 
    
    
  export let lieferoptionendaten: Daten[] = [
    {element: "lieferant", name: "DHL", preis: 0},
    {element: "lieferant", name: "UPS", preis: 5},
    {element: "lieferant", name: "Hermes", preis: 7}
];
       
}