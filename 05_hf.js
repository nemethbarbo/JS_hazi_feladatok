// 1. Feladat - Készítsünk függvényt, amelynek első bemenő paramétere egy egész szám, a termék ára, 
// második paramétere az ÁFA értéke. A függvény térjen vissza a termék bruttó árával!
// Az eredményt a felugró ablakban jelenítsük meg!

function bruttoArSzamolKiir(ar, afaKulcs){
    let bruttoAr = ar+(ar*afaKulcs/100);
    alert("A termék bruttó ára: "+bruttoAr + " Ft");
    document.getElementById("bruttoTermekAr").innerHTML = bruttoAr;
}

// 2. Feladat – Készítsünk metódust, ami egy számról eldönti, hogy prím szám –e?
// Az eredményt a felugró ablakban jelenítsük meg!
function primSzamEldont(){
    let szam=Number(prompt("Kérem, hogy gépeljen be egy számot (0 és 1 nem prímszám)!"));
    let prim = true;
    if (szam == 1 || szam == 0){
        alert(szam + ": nem prímszám!");
        prim = false;
    } else {
        for (let j = 2; j <= Math.sqrt(szam); j++){   
            // azért kell a gyökvonás, mert ha gyöke van a számnak, van osztója is -> nem prím - ne menjen addig a számláló feleslegesen
            if (szam % j == 0){
                prim = false;
                alert(szam + ": nem prímszám!");
                break;
            }
            // nem kell else ág mert egyéb esetben úgyis true lesz
        }
        if(prim == true)
            alert(szam + ": prímszám");
    }
    let kiirHtml= prim ? szam + ": prímszám" : szam +": nem prímszám";
    document.getElementById("primSzamE").innerHTML = kiirHtml;
}

/* 3. Feladat – Készítsünk metódust, ami egy szövegről eldönti, hogy palindrome –e?
Az eredményt a HTML kimeneten jelenítsük meg! */

function palindromEldont() {
    let str = prompt("Kérem írjon be egy szöveget, hogy megvizsgáljuk, palindróm-e:")
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    let re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    
    let lowRegStr = str.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";
       
    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";
     
    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    // return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
    document.getElementById("palindromE").innerHTML = reverseStr === lowRegStr? "igen" : "nem";
}

// vagy:
function palindromEldont2() {
    let szoveg = String(prompt("Kérem írjon be egy szöveget, hogy megvizsgáljuk, palindróm-e:"));
    let szovegArray = [];
    let szovegArrayReverse = [];
    szoveg = szoveg.split("");
    szoveg.forEach(elem => {
        if (elem != " " && elem != "," && elem != ".") {
            szovegArray.push(elem);
            szovegArrayReverse.unshift(elem);
        }
    });
    szovegArray = szovegArray.join("").toLowerCase();
    szovegArrayReverse = szovegArrayReverse.join("").toLowerCase();
    if (szovegArray == szovegArrayReverse) {
        document.getElementById("palindromEE").innerHTML = "A megadott szöveg palindrom.";
    } else {
        document.getElementById("palindromEE").innerHTML = "A megadott szöveg nem palindrom.";
    }
}

/* 4. Feladat - Készítsünk függvényt, amelynek bemenő paramétere, hogy milyen hosszú jelszót 
szeretnénk, visszatérése a generált jelszó! Kizárólag angol ABC betűi és számok szerepelhetnek a 
jelszóban, kisbetű-nagybetű vegyesen véletlenszerűen! Az eredményt console kimeneten jelenítsük 
meg!*/
function randomJelszoGeneral(jelszohossz) {
    let karakterek = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
    let jelszo = " ";
    let jelszoKarakterTomb = [];
    for (let i = 0; i < jelszohossz; i++) {
        jelszoKarakterTomb.push(karakterek.charAt(Math.floor(Math.random()*karakterek.length))); 
    }                              //charAt() visszaadja a paraméterként megadott (itt random) index helyén lévő karaktert 
    jelszo = jelszoKarakterTomb.join("");
    return jelszo;
}

function randomJelszoKiir(){
let jelszohossz = 8;
let generaltJelszo = randomJelszoGeneral(jelszohossz);
console.log("Random generált jelszó: "+generaltJelszo);
document.getElementById("randomJelszo").innerHTML = "A generált jelszó: "+generaltJelszo;
}

/*5. Feladat – Két számról döntsük el, hogy osztói –e egymásnak maradék nélkül!*/
function egymasOsztoiEldont() {
    let szam1 =  Number(prompt("Kérem adjon meg egy számot: "));
    let szam2 =  Number(prompt("Kérem adjon meg egy másik számot: "));
    let nagyobbSzam = Math.max(szam1, szam2);
    let kisebbSzam = Math.min(szam1, szam2);
    if (nagyobbSzam % kisebbSzam == 0) {
        document.getElementById("egymasOsztoi").innerHTML = kisebbSzam+ " osztója " +nagyobbSzam+ "-nak/nek";
    } else {
        document.getElementById("egymasOsztoi").innerHTML = kisebbSzam+ " nem osztója " +nagyobbSzam+ "-nak/nek";
    }
}

/*6. Feladat – Készítsünk ötöslottó alkalmazást, generáljunk le 5 darab lehetséges nyerőszámot! Egy héten 
egy számot csak egyszer húzhatnak ki! Az eredményt a HTML kimeneten jelenítsük meg!*/
function randomOtosLottoGeneral() {
	let nyeroszamok = [];
    for (i = 0; i < 5; i++) {
		randomszam = (Math.floor(Math.random() * 90)) + 1;
        if (!nyeroszamok.includes(randomszam)) {
            nyeroszamok.push(randomszam);
        }
    }
    document.getElementById("otosLotto").innerHTML = nyeroszamok;
}

/* 7. Feladat – Készítünk függvényt, amely egy teljes év lehetséges hatoslottó számait legenerálja! Egy 
héten egy számot csak egyszer húzhatnak ki! Az eredményt a HTML kimeneten jelenítsük meg!*/
function egyEvHatosLottoGenerate(){
    for (i = 1; i <= 52; i++) {
        let hatosNyeroszamokArray = [];
        while (hatosNyeroszamokArray.length != 6) {
            randomszam = Math.floor(Math.random() * 45) + 1;
            if (hatosNyeroszamokArray.includes(randomszam) == false) {
                hatosNyeroszamokArray.push(randomszam);
            }
        }
        document.getElementById("hatosLotto").innerHTML += i +". hét nyerőszámai: "+ hatosNyeroszamokArray + "<br>";
    }
}


/*8. Feladat - Készítsünk függvényt, amely egy szövegről elárulja, a karakterek hány százaléka magánhangzó! 
A speciális karaktereket ne vegyük figyelembe a számításkor!*/
function maganhangzoSzamol(){
    let szoveg = prompt("Kérem írjon be egy tetszőleges szöveget!");
    let maganhangzok = maganhangzokSzama(szoveg);
    document.getElementById("maganhangzo").innerHTML = (maganhangzok/szoveg.length)*100+" %-a a karaktereknek";
};

function maganhangzokSzama(szoveg) {
let szamol = szoveg.match(/[aáeéiíoóöőuúüű]/gi).length;
return szamol;
}

/* másik megoldás:
function maganhangzoSzamol(){
    let szoveg = prompt("Kérem írjon be egy tetszőleges szöveget!");
    let szovegArray = szoveg.trim().split("");
    let specKarakter = [
        "!",
        ".",
        ",",
        "?",
    ];
    let maganhangzo = [
        "a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"
    ];
    let szovegArraySpecKarakterNelkul = [];
    szovegArray.forEach(betu => {
        if(!specKarakter.includes(betu) && betu !=" "){
            szovegArraySpecKarakterNelkul.push(betu);
        }
    });
    let szovegArrayMaganhangzo = [];
    szovegArray.forEach(betu => {
        if(maganhangzo.includes(betu)) {
            szovegArrayMaganhangzo.push(betu)
        }
    })
    document.getElementById("maganhangzo").innerHTML = (szovegArrayMaganhangzo.length / szovegArraySpecKarakterNelkul)*100+" %-a magánhangzó 0a karaktereknek";
}

/* 9. Feladat – Pitagorasz tétel  kérjünk be a derékszögű háromszög 2 befogóját, majd írjuk ki az átfogó 
értékét! */
function pitagoraszSzamol (){
    let befogo1 = Number(prompt("Kérem adja meg a háromszög egyik befogóját: "));
    let befogo2 = Number(prompt("Kérem adja meg a háromszög másik befogóját: "));
    let atfogo = Math.sqrt((Math.pow(befogo1, 2))+(Math.pow(befogo2, 2)));
    document.getElementById("haromszogAtfogo").innerHTML = atfogo;
}

/* 10. Feladat – Programunk kérje be egy autó fogyasztását (literben 100 km-en), a benzin literenkénti árát 
és a megteendő út hosszát, majd számítsa ki az útiköltséget! */
function utikoltsegSzamol(){
    let fogyasztas = Number(prompt("Kérem adja meg az autó fogyasztását literben 100km-en: "));
    let benzinAr = Number(prompt("Kérem adja meg a benzin literenkénti árát: "));
    let utHossz = Number(prompt("Kérem adja meg a a megteendő út hosszát: "));
    let utikoltseg = utHossz * (fogyasztas/100) * benzinAr;
    document.getElementById("utikoltseg").innerHTML = "Az útiköltség "+utikoltseg+"Ft lesz.";
}

/* 11. Feladat – Programunk kérje be az Euró árfolyamát (1 € hány Ft-ot ér), majd azt, hogy hány eurót 
akarunk átváltani Ft-ba, majd írja ki, hogy hány Ft az átváltott euró.*/
function euroAtvalt(){
    let euroArfolyam = Number(prompt("Kérem adja meg az euró árfolyamát (1 € hány Ft-ot ér): "));
    let atvaltandoOsszeg = Number(prompt("Kérem adja meg, hány eurót szeretne átváltani: "));
    document.getElementById("eurovaltas").innerHTML = atvaltandoOsszeg+ " € "+atvaltandoOsszeg*euroArfolyam+" Ft lesz.";

}

/* 12. Hozzunk létre alkalmazást, amely kiszámolja a kocka felszínét és térfogatát!*/



/* 16. Olvassuk be, hogy a felhasználó átlagosan hány órát alszik naponta (egész számként), és jellemezzük 
az alvásidejét a következő módon: 0-6 óráig kevés, 7-9 óráig átlagos, 10-12 óráig sok, 13-24 óráig 
nagyon sok!*/
function alvasidoSzamol(){
    let alvasMennyiseg = Number(prompt("Kérem adja meg, hány órát alszik naponta: "));
    let alvasido = "";
    if (alvasMennyiseg>=0 && alvasMennyiseg<=6) {
        alvasido = "kevés!"
    } else if (alvasMennyiseg>=7 && alvasMennyiseg<=9) {
        alvasido = "átlagos."
    } else if (alvasMennyiseg>=10 && alvasMennyiseg<=12) {
        alvasido = "sok."
    } else if (alvasMennyiseg>=13 && alvasMennyiseg<=24) {
        alvasido = "nagyon sok!"
    }
    document.getElementById("alvasido").innerHTML = "Az Ön alvásideje: "+alvasido;
}

/* 20. Kérjük be a felhasználó születési helyét, majd döntsük el, hogy vidéken vagy a fővárosban született*/
function holSzuletettEldont(){
    let holSzuletett = prompt("Kérem adja meg, melyik városban született:");
    if (holSzuletett == "Budapest"){
        alert("A fővárosban született!");
    } else {
        alert("Vidéken született!");
    }
    document.getElementById("szuletesiHely").innerHTML = holSzuletett+" városban született";
}
