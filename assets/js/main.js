

// Lev1_1_js-einführung_arrow-function

/* function intro() {
    console.log("Hello World");
}
intro()

intro = () => {
    console.log("Hello World als intro");
}
intro()


intro = () => console.log("Hello World als kurzes Intro");
intro()
 */



// ==============================================


// Lev1_2_js-einführung_functions

/* hallo = () => console.log("Hallo")
hallo()


let x = 3
let y = 4
summe = () => console.log(x + y)
summe()


multipl = () => window.alert(x * y)
multipl()
 */


/* Schreibe eine Funktion, die einen Parameter nimmt und den Typ dieses Elements in deinem Browser(console / HTML) anzeigt.
    Teste: i = true; j =”hi”; k = 1; l = { name:”John” }; a = [0, 1] */

/* let i = true;
type = () => console.log(typeof i) //boolean
type()

let j = "hi";
type = () => console.log(typeof j) // string
type()

let k = 1;
type = () => console.log(typeof k) // number
type()

let l = { name: "John" };
type = () => console.log(typeof l) // object
type()

let a = [0, 1];
type = () => console.log(typeof a) // object
type()
 */




// ==============================================


// Lev1_4_js-einführung_function-hero


/* hero = (heroName, heroPower, heroEnemy) => {
    let name = "Mein Lieblingsheld ist: ";
    let power = "Sie hat die Fähigkeit: ";
    let enemy = "Ihr größter Gegner ist: ";

    console.log(name + heroName + power + heroPower + enemy + heroEnemy);
}

hero("Pocahontas", "Nettigkeit", "Regen")

 */

// ==============================================


// Lev1_6_js-einführung_function-vs-variable


/* returnOne = () => {


    return 1 + 1;
}

let x = 1;
let y = returnOne();


if (x === y) {
    console.log("Wird das gedruckt?");
} else {
    console.log("Jetzt?")
}
 */

// ==============================================



// Lev1_7_js-einführung_function-double


/* funkName = (x) => {
    return x * 2
}

console.log(funkName(3))

 */

// ==============================================


// Lev1_8_js-einführung_function-your-age

/* alter = (yearBorn) => {
    return 2021 - yearBorn
}

console.log(alter(1981))
 */

/* alterVergleich = (myAge, otherAge) => {
    let alterDiff = myAge - otherAge;
    return alterDiff;
}

console.log(alterVergleich(40, 27)) */





// ==============================================


// Lev1_9_js-einführung_function-introduction



/* vorstell = (vorname, nachname, geburtsort, alter, wohnort) => {
    return ("Mein Name ist " + vorname + nachname + " ich bin im " + geburtsort + " geboren, bin " + alter + " Jahre jung und lebe in " + wohnort);
}

console.log(vorstell("Julia", "Rinzilotti", "Süden", "40", "Berlin")) */




// ==============================================


// Lev3_1_projekt_js-vertiefung_mehrwertsteuer-rechner 

let betrag = document.getElementById("betrag")
let mWStAufschlagen = document.getElementById("mWStAufschlagen")
let mWStAbziehen = document.getElementById("mWStAbziehen")
let neunzehn = document.getElementById("neunzehn")
let sieben = document.getElementById("sieben")
let ergebnis1 = document.getElementById("ergebnis1");
let ergebnis2 = document.getElementById("ergebnis2");
let ergebAbfrage1 = document.getElementById("ergebAbfrage1");
let unten = document.getElementById("unten");
let fehler = document.getElementById("fehler");


let berechnen = () => {

    if (mWStAufschlagen.checked && neunzehn.checked) {
        ergebnis1.innerHTML = ((betrag.value * 0.19).toFixed(2) + " €");
        ergebnis2.innerHTML = ((betrag.value * 1.19).toFixed(2) + " €");
    } else if (mWStAufschlagen.checked && sieben.checked) {
        ergebnis1.innerHTML = ((betrag.value * 0.07).toFixed(2) + " €");
        ergebnis2.innerHTML = ((betrag.value * 1.07).toFixed(2) + " €");
    } else if (mWStAbziehen.checked && neunzehn.checked) {
        ergebnis1.innerHTML = ((betrag.value / 119) * 19).toFixed(2) + " €";
        ergebnis2.innerHTML = ((betrag.value * 1) / 1.19).toFixed(2) + " €";
    } else if (mWStAbziehen.checked && sieben.checked) {
        ergebnis1.innerHTML = ((betrag.value / 107) * 7) + " €";
        ergebnis2.innerHTML = ((betrag.value * 1) / 1.07) + " €";
    }
}

let checkMWST = () => {
    if (mWStAufschlagen.checked) {
        ergebAbfrage1.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro" + "<span> *</span>";
        unten.innerHTML = "Bruttobetrag (Endpreis)";
    } else {
        ergebAbfrage1.innerHTML = "Bruttobetrag (Preis inkl. Mehrwertsteuer) in Euro" + "<span> *</span>"
        unten.innerHTML = "Nettobetrag";
    }
}

let checkMWS = () => {
    if (neunzehn.checked) {
        console.log("neunzehn")
    } else {
        console.log("sieben")
    }
}










