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

    if (!aValue || !cValue || !hValue) {
        res.innerHTML = `<p><span class="titleJava">Todos os campos devem ser preenchidos!</span></p>`
    } else {

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
                return (aValue * 600) + (cValue * 500);
            } else {
                return (aValue * 800) + (cValue * 700);
            }
        }

        res.innerHTML = `<p><span class="titleJava">Você precisará de:</span></p><br>`

        res.innerHTML += `<p><i class="fa-solid fa-drumstick-bite fa-xl"></i>
    ${calcMeat() / 1000}Kg de <span class="textJava">carne</span>.</p><br>`

        res.innerHTML += `<p><i class="fa-solid fa-beer-mug-empty fa-xl"></i>
    ${calcBeer() / 1000}L de <span class="textJava">cerveja</span>.</p><br>`

        res.innerHTML += `<p><i class="fa-solid fa-glass-water fa-xl"></i>
    ${calcDrink() / 1000}L de <span class="textJava">água/refrigerante</span>.</p><br>`

    }
}
