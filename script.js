let adult = window.document.getElementById("adultosInput");
let child = window.document.getElementById("criancasInput");
let hours = window.document.getElementById("horasInput");
let btn = window.document.getElementById("button");
let res = window.document.getElementById("res");

btn.addEventListener("click", calc);

function calc() {
    let aValue = adult.value;
    let cValue = child.value;
    let hValue = hours.value;


    function calcMeat() {

        if (hValue < 6) {
            return (aValue * 500) + (cValue * 250);
        } else {
            return (aValue * 750) + (cValue * 375);
        }
    }

    function calcBeer() {
        if (hValue < 6) {
            return (aValue * 1800);
        } else {
            return (aValue * 3600);
        }
    }

    function calcDrink() {
        if (hValue < 6) {
            return (aValue * 600) + (cValue * 300);
        } else {
            return (aValue * 800) + (cValue * 400);
        }
    }

    res.innerHTML = `<p><span class="titleJava">Você vai precisar de:</span></p><br>`

    res.innerHTML += `<p><img src="./assets/meat.png" class="fotoJava">
    ${calcMeat()/1000}Kg de <span class="textJava">carne</span>.</p><br>`

    res.innerHTML += `<p><img src="./assets/beer.png" class="fotoJava">
    ${calcBeer()/1000}L de <span class="textJava">cerveja</span>.</p><br>`

    res.innerHTML += `<p><img src="./assets/sodawater.png" class="fotoJava">
    ${calcDrink()/1000}L de <span class="textJava">água/refrigerante</span>.</p><br>`
}