/* fogjuk meg az azon neveű elemet! */
const azonELEM = document.getElementById("azon")
const azonELEM2 = document.querySelector("#azon")
console.log(azonELEM)
console.log(azonELEM2)
console.log(typeof azonELEM)
/* típusa html elem */
azonELEM.innerHTML="Alakul a js"

/* kártya elemek elérése */
const kartyaELEM=document.getElementsByClassName("kartya")
console.log(kartyaELEM) /* típusa html collection, lista */
/* a 2. kártyába szeretnék beírni */
kartyaELEM[1].innerHTML="Beleirtunk a második kártyába"

const kartyaELEM2=document.querySelector(".kartya")
console.log(kartyaELEM2)/* ez elso ilyen html elemet kapjuk */

const kartyaELEM3=document.querySelectorAll(".kartya")
console.log(kartyaELEM3)/* NodeList, azaz lista */
/* a 3. divet akarom elérni - irjunk bele valamit */
kartyaELEM3[2].innerHTML+=" Hozzáírunk valamit"

/* fogjuk meg a button gombot */
const buttonELEM=document.querySelectorAll("button")[0]
console.log(buttonELEM)

/* kattintsunk rá a gombra és csináljon valamit. Ráteszünk egy eseménykezelőt */
buttonELEM.addEventListener("click", gombraKattint) //nincs ( a gombraKattint után)

/* ez a függvény csak egy referencia vagy hivatkozás a függvényre */
function gombraKattint(){
    //alert("Hurrá, rákattintottál a gombra!")
    /* Ha rákattintunk, akkor az első kártyába kerüljön bele a 4. kártya tartalma is */
    kartyaELEM3[0].innerHTML += kartyaELEM3[3].innerHTML
}