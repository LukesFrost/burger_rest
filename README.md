# Burger Rest - Karta burgeru

Interaktivní webová aplikace pro výběr a objednávku burgerů s možností přidávání extra ingrediencí.

## Funkce

- 🍔 Výběr ze 4 druhů burgerů (Classic, Cheese, Bacon, Veggie)
- 🖼️ Dynamické zobrazování obrázku dle vybraného burgeru
- ➕ Regulace množství objednávaných burgerů
- 🌶️ Přidávání extra ingrediencí (Sýr, Slanina, Rajče)
- 💰 Automatické výpočty ceny včetně příplatků
- 📱 Responzivní design

## Struktura projektu

```
burger_rest/
├── index.html          # Hlavní HTML soubor
├── script.js           # JavaScript logika
├── style.css           # Styly aplikace
├── data.js             # Data burgerů a ingrediencí
├── imgs/               # Obrázky burgerů
│   ├── classic_burger.jpg
│   ├── cheese_burger.jpg
│   ├── bacon_burger.jpg
│   └── veggie_burger.jpg
└── README.md           # Tato dokumentace
```

## Jak použít

1. Otevřete `index.html` v prohlížeči
2. Vyberte burger ze seznamu
3. Nastavte požadované množství (+ / −)
4. Zvolte extra ingredience (checkboxy)
5. Zobrazená cena se automaticky aktualizuje

## Ceny

### Burgery
- Classic Beef Burger: 164,90 Kč
- Cheese Burger: 174,90 Kč
- Bacon Burger: 184,90 Kč
- Veggie Burger: 154,90 Kč

### Extra ingredience
- Sýr: +14,90 Kč
- Slanina: +14,90 Kč
- Rajče: +9,90 Kč

## Technologie

- HTML5
- CSS3
- Vanilla JavaScript (bez externích knihoven)

## Vývoj

Všechny změny jsou verzovány v gitu. Pro push změn:

```bash
git add .
git commit -m "Popis změny"
git push origin master
```

---

Vytvořeno pro Burger Rest objednávkový systém
