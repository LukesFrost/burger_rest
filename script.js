// Jednoduchý objekt burgeru (název, základní cena, ingredience)
		const burger = {
			name: "Classic Burger",
			basePrice: 99, // Kč
			ingredients: {
				slanina: { label: "Slanina", price: 25 },
				syr: { label: "Sýr", price: 20 },
				hranolky: { label: "Hranolky", price: 35 },
				zw: { label: "Zelenina", price: 10 }
			}
		};

		// Helper pro formát ceny
		const fmt = (v) => v.toLocaleString('cs-CZ') + ' Kč';

		// DOM elementy
		const nameEl = document.getElementById('burger-name');
		const basePriceEl = document.getElementById('base-price');
		const ingredientsForm = document.getElementById('ingredients-form');
		const qtyInput = document.getElementById('qty');
		const qtyIncr = document.getElementById('qty-incr');
		const qtyDecr = document.getElementById('qty-decr');
		const totalPriceEl = document.getElementById('total-price');

		// Inicializace UI
		nameEl.textContent = burger.name;
		basePriceEl.textContent = fmt(burger.basePrice);

		// Vygenerovat checkboxy (value = klíč z objektu)
		for (const key of Object.keys(burger.ingredients)) {
			const ing = burger.ingredients[key];
			const id = 'ing-' + key;
			const wrapper = document.createElement('label');
			wrapper.className = 'ing-item';
			wrapper.innerHTML = `
				<input type="checkbox" name="ingredient" value="${key}" id="${id}" />
				<span class="ing-label">${ing.label}</span>
				<span class="ing-price">+ ${fmt(ing.price)}</span>
			`;
			ingredientsForm.appendChild(wrapper);
		}

		// Výpočet celkové ceny
		function calculateTotal() {
			let qty = parseInt(qtyInput.value, 10) || 1;
			if (qty < 1) { qty = 1; qtyInput.value = 1; }
			let totalPerUnit = burger.basePrice;
			const checked = ingredientsForm.querySelectorAll('input[type="checkbox"]:checked');
			checked.forEach(cb => {
				const key = cb.value;
				const ing = burger.ingredients[key];
				if (ing) totalPerUnit += ing.price;
			});
			const total = totalPerUnit * qty;
			totalPriceEl.textContent = fmt(total);
		}

		// Eventy
		ingredientsForm.addEventListener('change', calculateTotal);
		qtyInput.addEventListener('input', calculateTotal);
		qtyIncr.addEventListener('click', () => { qtyInput.value = Math.max(1, parseInt(qtyInput.value || 1) + 1); calculateTotal(); });
		qtyDecr.addEventListener('click', () => { qtyInput.value = Math.max(1, parseInt(qtyInput.value || 1) - 1); calculateTotal(); });

		// Počáteční výpočet
		calculateTotal();