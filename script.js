//Vyber burgeru
let headline = document.getElementById("burger-name");

let select = document.getElementById("burger-select");
for (let typ in nabidkaBurgeru) {
    let burgers = nabidkaBurgeru[typ];
    let option = document.createElement("option");
    option.value = typ;
    option.textContent = `${burgers.nazev} (${burgers.cena} Kč)`;
    select.appendChild(option);

    console.log(nabidkaBurgeru[typ].nazev)
}

// Checkboxy pro xtra ingredience

const checkbox_form = document.getElementById("ingredients-form");
for (let typ in extraIngredience) {
    console.log(extraIngredience[typ].nazev);

    let ing = extraIngredience[typ];

    let label = document.createElement("label");
    let inp = document.createElement("input");
    inp.type = "checkbox";
    inp.name = typ;
    inp.value = ing.priplatek;

    label.appendChild(inp);
    label.appendChild(document.createTextNode(` ${ing.nazev} (+${ing.priplatek} Kč)`))

    checkbox_form.appendChild(label);
}

select.addEventListener("change", function () {
    const key = select.value;
    const basePriceEl = document.getElementById("base-price");
        if (!key) {
            headline.textContent = "Vyberte produkt";
            basePriceEl.textContent = "0 Kč";
            return;
        }
        const burger = nabidkaBurgeru[key];
        if (burger && burger.nazev) {
            headline.textContent = burger.nazev;
        }
        if (burger && burger.cena !== undefined && basePriceEl) {
            basePriceEl.textContent = `${burger.cena} Kč`;
        }
    }
);