const checkbox_form = document.getElementById("ingredients-form");

for (let typ in extraIngredience) {
    console.log(extraIngredience[typ].nazev);

    let ing = extraIngredience[typ];

    let label = document.createElement("label");
    let inp = document.createElement("input");
    inp.type = "checkbox";
    inp.name = typ;
    inp.value = ing.priplatek;
    inp.className = "checkboxes"

    label.appendChild(inp);
    label.appendChild(document.createTextNode(` ${ing.nazev} (+${ing.priplatek} Kč)`))

    checkbox_form.appendChild(label);
}