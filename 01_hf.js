//******************************Függvény, metódus feladatok*************************************//
/*Függvények segítségével oldjuk meg a következő feladatokat! A függvények meghívására használjuk a 
gombok „onclick” eseményét! Az eredményt a HTML kimeneten, felugró ablakban vagy a console-on 
jelenítsük meg a feladatleírás szerint (ha nincs meghatározva, akkor tetszőleges).
A megjelenítéshez használjunk Bootstrap-et!*/

/*1. Feladat - Készítsünk függvényt, amelynek első bemenő paramétere egy egész szám, a termék ára, 
második paramétere az ÁFA értéke. A függvény térjen vissza a termék bruttó árával! Az eredményt a 
felugró ablakban jelenítsük meg!*/
function bruttoArSzamolKiir(ar, afaKulcs){
    let bruttoAr = ar+(ar*afaKulcs/100);
    alert("A termék bruttó ára: "+bruttoAr + " Ft");
    document.getElementById("bruttoTermekAr").innerHTML = bruttoAr;
}


/*2. Feladat – Készítsünk metódust, ami egy számról eldönti, hogy prím szám –e? Az eredményt a felugró 
ablakban jelenítsük meg!*/
function primSzamEldont(){
    let szam=Number(prompt("Kérem, hogy gépeljen be egy számot (0 és 1 nem prímszám)!"));
    let prim = true;
    if (szam == 1 || szam == 0){
        alert(szam + ": nem prímszám!");
        prim = false;
    } else {
        for (let j = 2; j <= Math.sqrt(szam); j++){
            if (szam % j == 0){
                prim = false;
                alert(szam + ": nem prímszám!");
                break;
            }
        }
        if(prim == true)
            alert(szam + ": prímszám");
    }
    let kiirHtml= prim?szam+ ": prímszám" : szam+": nem prímszám";
    document.getElementById("primSzamE").innerHTML = kiirHtml;
}

/*3. Feladat – Készítsünk metódust, ami egy szövegről eldönti, hogy palindrome –e? (Pld. Rád rohan a 
hordár.). Az eredményt a HTML kimeneten jelenítsük meg!*/
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

/*4. Feladat - Készítsünk függvényt, amelynek bemenő paramétere, hogy milyen hosszú jelszót 
szeretnénk, visszatérése a generált jelszó! Kizárólag angol ABC betűi és számok szerepelhetnek a 
jelszóban, kisbetű-nagybetű vegyesen véletlenszerűen! Az eredményt console kimeneten jelenítsük 
meg!*/



/*5. Feladat – Kész számról döntsük el, hogy osztói –e egymásnak maradék nélkül!*/
function egymasOsztoiEldont() {
    let szam1 =  Number(prompt("Kérem adjon meg egy számot: "));
    let szam2 =  Number(prompt("Kérem adjon meg egy másik számot: "));
    document.getElementById("egymasOsztoi").innerHTML = szam1%szam2==0 && szam2%szam1==0? "igen" : "nem";
    }

/*6. Feladat – Készítsünk ötöslottó alkalmazást, generáljunk le 5 darab lehetséges nyerőszámot! Egy héten 
egy számot csak egyszer húzhatnak ki! Az eredményt a HTML kimeneten jelenítsük meg!*/
function randomOtosLottoGenerate() {
	let nyeroszamok = [];
    for (i = 0; i < 5; i++) {
		nyeroszamok[i] = (Math.floor(Math.random() * 90)) + 1;
        if (!nyeroszamok.includes(nyeroszamok[i])) {
            nyeroszamok.push(nyeroszamok[i]);
        }
    }
    document.getElementById("otosLotto").innerHTML = nyeroszamok;
}

/* 7. Feladat – Készítünk függvényt, amely egy teljes év lehetséges hatoslottó számait legenerálja! Egy 
héten egy számot csak egyszer húzhatnak ki! Az eredményt a HTML kimeneten jelenítsük meg!*/
/* function randomHatosLottoGenerate() {
	let nyeroszamok = [];
    for (i = 0; i < 6; i++) {
		nyeroszamok[i] = (Math.floor(Math.random() * 45)) + 1;
        if (!nyeroszamok.includes(nyeroszamok[i])) {
            nyeroszamok.push(nyeroszamok[i]);
        }
    }
    return nyeroszamok;
}
function egyEvHatosLottoGenerate(){
    let egyEvNyeroszamok = [];
    for (i = 0; i < 52; i++) {
        egyEvNyeroszamok[i]= randomHatosLottoGenerate();
        egyEvNyeroszamok.push(egyEvNyeroszamok[i]);
    }
    document.getElementById("hatosLotto").innerHTML = egyEvNyeroszamok;
}
*/



/* 8. Feladat - Készítsünk függvényt, amely egy szövegről elárulja, a karakterek hány százaléka 
magánhangzó! A speciális karaktereket ne vegyük figyelembe a számításkor!*/
function maganhangzoSzamol(){
    let szoveg = prompt("Kérem írjon be egy tetszőleges szöveget!");
    let maganhangzok = maganhangzokSzama(szoveg);
    document.getElementById("maganhangzo").innerHTML = 100*maganhangzok/szoveg.length+" %-a a karaktereknek";
};

function maganhangzokSzama(szoveg) {
let szamol = szoveg.match(/[aáeéiíoóöőuúüű]/gi).length;
return szamol;
}

/* 9. Feladat – Pitagorasz tétel  kérjünk be a derékszögű háromszög 2 befogóját, majd írjuk ki az átfogó 
értékét! */
function PitagoraszSzamol (){
    let befogo1 = Number(prompt("Kérem adja meg a háromszög egyik befogóját: "));
    let befogo2 = Number(prompt("Kérem adja meg a háromszög másik befogóját: "));
    let atfogo = Math.sqrt((Math.pow(befogo1, 2))+(Math.pow(befogo2, 2)));
    document.getElementById("haromszogAtfogo").innerHTML = atfogo;
}

/* 10. Feladat – Programunk kérje be egy autó fogyasztását (literben 100 km-en), a benzin literenkénti árát 
és a megteendő út hosszát, majd számítsa ki az útiköltséget! */


/* 11. Feladat – Programunk kérje be az Euró árfolyamát (1 € hány Ft-ot ér), majd azt, hogy hány eurót 
akarunk átváltani Ft-ba, majd írja ki, hogy hány Ft az átváltott euró.*/


/* 12. Hozzunk létre alkalmazást, amely kiszámolja a kocka felszínét és térfogatát!*/


/* 13. Olvassuk be egy egyenes körkúp sugarát és magasságát, majd számoljuk ki belőle a térfogatát és a 
felszínét!*/


/* 14. Feladat - Készítsünk függvényt tombFeltolt() néven, amely feltölt véletlen számokkal egy tömböt a 
felhasználótól érkező és véletlenszerű bemenő paraméterekkel. Az első paraméter legyen az 
elemszám (hány darab elem legyen a tömbben)  ez legyen véletlen szám 5-20 között, a második a 
véletlen számok alsó határa, a harmadik pedig a felső határa, melyeket a felhasználó adjon meg. A 
függvény visszatérése tömb adatszerkezet legyen! A következő feladatokat függvények segítségével 
oldjuk meg!
a. Hozzunk létre egy függvényt, amely kiírja a tömb elemeit a HTML kimenetre egymás 
mellé vesszővel elválasztva, utolsó elem után ne legyen vessző!
b. Hozzunk létre függvényt, amely a páros elemek összegével tér vissza! Az eredményt a 
HTML kimeneten jelenítsük meg!
c. Hozzunk létre függvényt, amelynek visszatérése a páratlan elemek átlaga! Az 
eredményt a HTML kimeneten jelenítsük meg!
d. Legkisebb érték meghatározására hozzunk létre egy függvényt. Az eredményt a HTML 
kimeneten jelenítsük meg!
e. Legkisebb értékű elem indexével is térjen vissza egy függvény. Több ilyen érték is lehet.
Az eredményt a HTML kimeneten jelenítsük meg!
f. A tömbből véletlenszerűen jelenítsünk meg 1 db elemet! Az eredményt felugró 
ablakban jelenítsük meg!
g. A listából minden 5. elemet jelenítsünk meg a HTML kiementen!
	function selectAllFifth() {
        	let randomNumberArray = tombFeltolt();
        	let allFifthElement = [];
        	for (i = 0; i < randomNumberArray.length; i++) {
            		if (i % 5 == 0) {
                		allFifthElement.push(randomNumberArray[i])
           		}
        	}
        	console.log(allFifthElement);
        	document.getElementById("randomArray").innerHTML = "A random tömb minden 5. eleme: " + allFifthElement;
    	}
     
h. A HTML kimeneten jelenítsük meg a hárommal maradék nélkül osztható számokat!
Amennyiben esetleg nem volt ilyen, arról is tájékoztassuk a felhasználót!*/
	function selectDivOfThree() {
    		let randomNumberArray = tombFeltolt();
   		let divOfThree = [];
    		randomNumberArray.forEach(num => {
       			if (num % 3 == 0) {
            			divOfThree.push(num)
        		};
    		});
    		if (divOfThree.length > 0) {
        		document.getElementById("randomArray").innerHTML = "A random tömb 3-al osztható elemei: " + divOfThree
   		} else {
        		document.getElementById("randomArray").innerHTML = "Nem keletkezett 3-al osztható szám."
    		};
	}


/*15. Kérjük be a felhasználó tömegét kg-ban és magasságát cm-ben, majd számítsuk ki és írjuk a 
képernyőre a felhasználó testtömeg-indexét a következő képlet alapján: TTI=testtömeg[kg]/testmagasság2[m2]
A testtömeg-index és táblázat alapján írjuk ki szövegesen a testsúly-osztályzást!*/


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

/* 17. Készítsünk egy másodfokú egyenlet megoldó alkalmazást! Kérjük be a, b és c értékét, majd számoljuk 
ki x1-et és x2-t, ahol:*/


/* 18. Írjuk ki 3 db pénzfeldobás eredményét (fej vagy írás véletlenszerűen, szövegesen jelenjen meg)! */


/* 19. Egy pénztáros a napi bevételének 5%-át megkapja jutalomként. Kérd be a napi bevételt, és írd a 
képernyőre, hogy mennyi a jutalom! A jutalmat kerekítsd egész értékre!*/


/* 20. Kérjük be a felhasználó születési helyét, majd döntsük el, hogy vidéken vagy a fővárosban született*/
function holSzuletettEldont(){
    let holSzuletett = prompt("Kérem adja meg, melyik városban született:");
    if (holSzuletett == "Budapest"){
        alert("A fővárosban született!");
    } else {
        alert("Vidéken született!");
    }
}
