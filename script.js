//Vyber burgeru

let headline = document.getElementById("burger-name");

let select = document.getElementById("burger-select");
for (let typ in nabidkaBurgeru) {
    let burgers = nabidkaBurgeru[typ];
    let option = document.createElement("option");
    option.value = typ;
    option.textContent = `${burgers.nazev} (${burgers.cena} Kč)`;
    select.appendChild(option);
    //console.log(nabidkaBurgeru[typ].nazev)
}

select.addEventListener("change", function() {
    const burgerObrazek = document.getElementById("burger-obraz");
    const key = select.value;
    
    if (key) {
        const burger = nabidkaBurgeru[key];
        if (burger && burger.img) {
            burgerObrazek.src = burger.img;
        }
    } else {
        burgerObrazek.src = "imgs/classic_burger.jpg";
    }
});

select.addEventListener("change", function () {
    const key = select.value;
    const basePriceEl = document.getElementById("z-cena-castka");
        if (!key) {
            headline.textContent = "Vyberte produkt";
            basePriceEl.textContent = "0 Kč";
            vypocitatCenu();
            return;
        }
        const burger = nabidkaBurgeru[key];
        if (burger && burger.nazev) {
            headline.textContent = burger.nazev;
        }
        if (burger && burger.cena !== undefined && basePriceEl) {
            basePriceEl.textContent = `${burger.cena} Kč`;
        }
        vypocitatCenu();
    }
);

const burger_img = document.getElementById("burger-obraz");

//pocitani mnozstvi

const mnozstviInp = document.getElementById("mnozstvi");
const minus = document.getElementById("mnz-decr");
const plus = document.getElementById("mnz-incr");

minus.addEventListener("click", function() {
        let current = parseInt(mnozstviInp.value);
        if (current > 1) {
            mnozstviInp.value = current - 1;
        }
        vypocitatCenu();
    }

);

plus.addEventListener("click", function() {
        let current = parseInt(mnozstviInp.value);
        mnozstviInp.value = current + 1;
        vypocitatCenu();
    }

);

// Checkboxy pro xtra ingredience

    const checkbox_form = document.getElementById("ingredients-form");
    for (let typ in extraIngredience) {
    //console.log(extraIngredience[typ].nazev);

    let ing = extraIngredience[typ];

    let label = document.createElement("label");
    let inp = document.createElement("input");
    inp.type = "checkbox";
    inp.name = typ;
    inp.value = ing.priplatek;
    inp.addEventListener("change", vypocitatCenu);

    label.appendChild(inp);
    label.appendChild(document.createTextNode(` ${ing.nazev} (+${ing.priplatek} Kč)`))

    checkbox_form.appendChild(label);
}


//vysledna cena
function vypocitatCenu() {
    let cena = 0;
    const vybranyBurger = nabidkaBurgeru[select.value];
    
    if (vybranyBurger) {
        cena += vybranyBurger.cena;
    }

    const zaskrtnuteIngredience = checkbox_form.querySelectorAll("input:checked");
    zaskrtnuteIngredience.forEach((ing) => {
        cena += parseFloat(ing.value);
    });

    const mnozstvi = parseInt(mnozstviInp.value);
    const celkovaCena = cena * mnozstvi;

    const vystup = document.getElementById("celkova-cena");
    if (vystup) {
        vystup.textContent = celkovaCena.toFixed(2) + " Kč";
    }
}
console.log(nabidkaBurgeru.classic.img)