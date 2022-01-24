/**
 * Webapp with Pagination
 */

/**
 * Deklaration der Variablen
 */
let index;
let produkte = undefined;

/**
 * Ausgabe zeigen
 */
function showUI(){
    //Produktinformation
    let htmlObj = document.getElementById("product");
    htmlObj.innerHTML =
        `Name: ${produkte.name}<br>`+
        `Grössen: ${produkte.size}<br>`+
        `Preis: ${produkte.prise}`;
    let imgObj = document.getElementById("picture");
    imgObj.src = produkte.picture;

    //Geeignet für
    htmlObj = document.getElementById("suited");
    htmlObj.innerHTML =
        `${produkte.suited}`;


    //Hautgefühl
    htmlObj = document.getElementById("skin");
    htmlObj.innerHTML =
        `${produkte.skin}`;

    //Hauptinhaltsstoffe
    htmlObj = document.getElementById("ingredients");
    htmlObj.innerHTML =
        `${produkte.ingredients}`;


    //Index im Pagination-Element zeigen
    htmlObj = document.getElementById("showIndex");
    //clear
    htmlObj.innerHTML = "";
    //set
    htmlObj.innerHTML = index;
}


/**
 * Nächster Eintrag (Record) zeigen
 */
function showNext() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index eins kleiner als das Maximum ist
        if (produkteListe.length-1 > index){
            //... erhöhe den index um 1
            index++;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    produkte = produkteListe[index];
    //zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    //Index aus dem Browser-Speicher lesen
    index = localStorage.getItem("index");
    //Testausgabe auf der Console
    console.log(index);
    //Falls der index nicht definiert ist ...
    if (index == undefined){
        //... dann setze den index auf 0 (Anfang)
        index = 0;
    } else {
        //... sonst falls der index grösser als das Minimum ist
        if (index > 0){
            //... vermindere den index um 1
            index--;
        }
    }
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    produkte = produkteListe[index];
    //zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (produkte === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    produkte = produkteListe[index];
    //zeige den Eintrag
    showUI();
}
