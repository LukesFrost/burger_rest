const { createElement } = require("react");

let select = document.getElementById("burger-select");
for (let typ in nabidkaBurgeru) {
    let burgers = nabidkaBurgeru[typ];
    let option = document.createElement("option");
    option.value = typ;
    option.textContent = `${burgers.nazev} (${burgers.cena} Kč)`;
    select.appendChild(option);

    console.log(nabidkaBurgeru[typ].nazev)
}

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