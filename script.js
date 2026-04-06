// ── Menu Data ─────────────────────────────────────────────────
const menuSection = [
    {
        id: "section-heading-pizza",
        title: "PIZZA PREMIUM",
        items: [
            { name: "Chicken Pizza",    image: "./images/Sauce-Boss-50kb_variant_.jpg",                                                    desc: "Secret sauce base, mozzarella cheese, Tex Max",                              smallPizzaPrice: 400, mediumPizzaPrice: 800,  largePizzaPrice: 1200, extraLargePizza: 1800 },
            { name: "Fajita Pizza",     image: "./images/CreamyTikka-HandTossedTopcopy_variant_0-2024-11-07073417.jpg",                    desc: "Cheese mayo base, mozzarella cheese, chicken",                               smallPizzaPrice: 500, mediumPizzaPrice: 1000, largePizzaPrice: 1400, extraLargePizza: 2000 },
            { name: "BBQ Pizza",        image: "./images/CreamyTikka-HandTossedTopcopy_variant_0-2024-11-07073417.jpg",                    desc: "BBQ sauce, cheese mayo base, mozzarella cheese, chicken",                    smallPizzaPrice: 500, mediumPizzaPrice: 1000, largePizzaPrice: 1400, extraLargePizza: 2000 },
            { name: "Tikka Pizza",      image: "./images/-ChickenTikka_4.jpg",                                                             desc: "Pizza sauce base, mozzarella cheese, chicken tikka chunks",                  smallPizzaPrice: 500, mediumPizzaPrice: 1000, largePizzaPrice: 1400, extraLargePizza: 2000 },
            { name: "Vegetable Pizza",  image: "./images/b2009180-9cda-11ef-bf94-4552bcb9a3dd-Veggie-HandTossedTopcopy_variant_0-2024-11-07073417.jpg", desc: "Pizza sauce base, mozzarella cheese, onions, green peppers..", smallPizzaPrice: 500, mediumPizzaPrice: 1000, largePizzaPrice: 1400, extraLargePizza: 2000 },
            { name: "Malai Boti Pizza", image: "./images/pepperoni pizza.jpg",                                                             desc: "Pizza sauce base, mozzarella cheese, malai boti toppings",                  smallPizzaPrice: 500, mediumPizzaPrice: 1000, largePizzaPrice: 1400, extraLargePizza: 2000 }
        ]
    },
    {
        id: "section-heading-burger",
        title: "BURGERS",
        items: [
            { name: "Zinger Burger",       image: "./images/Zinger-Burger2.png",             desc: "Crispy Zinger fillet, signature mayo and lettuce",               price: 500 },
            { name: "Cheese Zinger Burger",image: "./images/cheese zindger burger ok.png",   desc: "Crispy Zinger fillet, signature mayo, cheese and lettuce",       price: 600 },
            { name: "Chicken Burger",      image: "./images/chicken burger.02png.jpg",       desc: "Chicken fillet, spicy mayo, lettuce, sesame bun",                price: 300 },
            { name: "KFC Special Burger",  image: "./images/jumbo burger.png",               desc: "2 breaded chicken patties, cheese, lettuce and special sauce",   price: 500 },
            { name: "Jumbo Burger",        image: "./images/jumbo burger.png",               desc: "2 breaded chicken patties, cheese, lettuce and extra sauce",     price: 700 }
        ]
    },
    {
        id: "section-heading-bbq",
        title: "BBQ PREMIUM",
        items: [
            { name: "Chicken Tikka Leg",   image: "./images/chicken tikka bbq.jpg",          desc: "Chicken leg piece, marinated with secret ingredients, tangy taste",     price: 400 },
            { name: "Chicken Tikka Chest", image: "./images/Chicken-Chest-Piece-2.png.jpg",  desc: "Chicken chest piece, marinated with secret ingredients, tangy taste",   price: 500 },
            { name: "Malai Tikka Leg",     image: "./images/CHICKEN-MALAI-TIKA-LEG.jpg",     desc: "Chicken leg piece, marinated with yogurt and special ingredients",       price: 550 },
            { name: "Malai Tikka Chest",   image: "./images/CHICKEN-MALAI-TIKA-chestjpg.jpg",desc: "Chicken chest piece, marinated with yogurt and special ingredients",     price: 650 },
            { name: "Malai Butti",         image: "./images/chicken butti bbq.jpg",           desc: "Chicken pieces, marinated with yogurt and spices, rich taste",          price: 500 },
            { name: "Chicken Butti",       image: "./images/chicken butti bbq.jpg",           desc: "Chicken pieces, marinated with secret ingredients, tangy taste",        price: 400 }
        ]
    },
    {
        id: "section-heading-roll",
        title: "ROLLS PREMIUM",
        items: [
            { name: "Chicken Roll",     image: "./images/chicken roll 2.jpg",       desc: "Crispy chicken with sauce base and mozzarella cheese",           price: 150 },
            { name: "Chicken Mayo Roll",image: "./images/mayo roll.jpg",            desc: "Chicken filled with spicy chunks and special mayo",              price: 250 },
            { name: "Zinger Roll",      image: "./images/zinger roll.jpg",          desc: "Zinger filled chicken with spicy chunks and sauce",              price: 300 },
            { name: "Cheese Roll",      image: "./images/chicken cheese roll.jpg",  desc: "Sauce base, mozzarella cheese and chicken tikka chunks",         price: 250 },
            { name: "Malai Butti Roll", image: "./images/chicken kabab roll.jpg",   desc: "Malai butti with mozzarella cheese, onions and green peppers",   price: 250 },
            { name: "Kabab Roll",       image: "./images/Kabab roll.jpg",           desc: "Perfectly grilled kabab with special chutney",                   price: 200 }
        ]
    },
    {
        id: "section-heading-fries",
        title: "FRIES",
        items: [
            { name: "Masala Fries", image: "./images/masala fries.jpg",    desc: "Crispy fries tossed with KFC special masala",                        price: 100 },
            { name: "Mayo Fries",   image: "./images/mayo garlic fries.jpg",desc: "Crispy fries with masala and special garlic mayo sauce",             price: 150 },
            { name: "Cheese Fries", image: "./images/cheese fries.jpg",    desc: "Fries loaded with chicken and melted cheese, baked in oven",         price: 400 },
            { name: "Pizza Fries",  image: "./images/pizza fries.jpg",     desc: "Pizza style fries with sauce, olives and a generous amount of cheese",price: 450 }
        ]
    },
    {
        id: "section-heading-friedchicken",
        title: "FRIED CHICKEN",
        items: [
            { name: "Quarter Broast",       image: "./images/Two-Piece-Broast-Chest-quarter.png", desc: "One chest plus one wing, fried to crisp perfection",          price: 500 },
            { name: "Half Broast",          image: "./images/half broast.png",                    desc: "Two chest pieces plus two wings, fried crisp and tender",    price: 600 },
            { name: "Crispy Chicken Wings", image: "./images/fried chicken wings.png",            desc: "Chicken wings marinated to taste, crispy and juicy",         price: 550 }
        ]
    },
    {
        id: "section-heading-sandwich",
        title: "SANDWICHES",
        items: [
            { name: "Chicken Sandwich",        image: "images/chicken sandwich.jpg",   desc: "Grilled chicken, fresh lettuce and special sauce, all in one bite",  price: 400 },
            { name: "Club Sandwich",           image: "./images/club sandwich.jpg",    desc: "Grilled chicken, fresh lettuce and cheese in a classic club style",  price: 550 },
            { name: "Grilled Chicken Sandwich",image: "./images/grilled sandwich.jpg", desc: "Smoky BBQ sauce, grilled chicken fillet, toasted to perfection",    price: 600 }
        ]
    },
    {
        id: "section-heading-extra",
        title: "EXTRAS",
        items: [
            { name: "Cold Drinks",  image: "./images/cold drink 1.5l.jpeg", desc: "Pepsi, 7up, Sprite, Dew, Coca-Cola — 500ml & 1.5L", smallPepsiPrice: 100, largePepsiPrice: 200 },
            { name: "Water Bottle", image: "./images/Water.jpg",            desc: "Fresh mineral water — 500ml and 1.5 Liter",         smallWaterPrice: 40,  LargeWaterPrice: 60  },
            { name: "Naan",         image: "./images/naan.jpg",             desc: "Tandoori naan crafted with love, fresh from oven",   singleNaanPrice: 30,  doubleNaanPrice: 50  },
            { name: "Puri Paratha", image: "./images/puti paratha.jpg",     desc: "Crispy golden paratha made fresh daily",             price: 50 }
        ]
    }
];

// ── Get size options from an item ─────────────────────────────
function getSizeOptions(item) {
    const sizes = [];
    if (item.smallPizzaPrice)  sizes.push({ label: "Small",       price: item.smallPizzaPrice });
    if (item.mediumPizzaPrice) sizes.push({ label: "Medium",      price: item.mediumPizzaPrice });
    if (item.largePizzaPrice)  sizes.push({ label: "Large",       price: item.largePizzaPrice });
    if (item.extraLargePizza)  sizes.push({ label: "Extra Large", price: item.extraLargePizza });
    if (item.smallPepsiPrice)  sizes.push({ label: "500ml",       price: item.smallPepsiPrice });
    if (item.largePepsiPrice)  sizes.push({ label: "1.5L",        price: item.largePepsiPrice });
    if (item.smallWaterPrice)  sizes.push({ label: "500ml",       price: item.smallWaterPrice });
    if (item.LargeWaterPrice)  sizes.push({ label: "1.5L",        price: item.LargeWaterPrice });
    if (item.singleNaanPrice)  sizes.push({ label: "Single",      price: item.singleNaanPrice });
    if (item.doubleNaanPrice)  sizes.push({ label: "Double",      price: item.doubleNaanPrice });
    return sizes;
}

// ── Render menu cards ─────────────────────────────────────────
let html = '';
menuSection.forEach((section) => {
    if (!section.items || section.items.length === 0) return;

    html += `<h3 id="${section.id}">${section.title}</h3><div class="pizza-section">`;

    section.items.forEach((item, index) => {
        const sizes = getSizeOptions(item);
        const basePrice = item.price ?? sizes[0]?.price ?? 0;

        html += `
        <div class="pizza-section-boxes" onclick="openPopup('${section.id}', ${index})">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="manu-card-cointainer">
                <h4>${item.name}
                    <a href="#" onclick="event.stopPropagation(); toggleWishlist(this)">
                        <i class="ri-heart-line"></i>
                    </a>
                </h4>
                <p>${item.desc}</p>
                <h5>From <span>Rs.${basePrice}</span></h5>
            </div>
        </div>`;
    });

    html += `</div>`;
});

document.querySelector('.menu-container').innerHTML = html;

// ── Wishlist toggle ───────────────────────────────────────────
function toggleWishlist(el) {
    const icon = el.querySelector('i');
    if (icon.classList.contains('ri-heart-line')) {
        icon.classList.replace('ri-heart-line', 'ri-heart-fill');
        el.style.color = '#e74c3c';
    } else {
        icon.classList.replace('ri-heart-fill', 'ri-heart-line');
        el.style.color = '#ccc';
    }
}

// ── Popup ─────────────────────────────────────────────────────
let currentItem = null;
let selectedPrice = 0;

const overlay   = document.getElementById('popup-overlay');
const popupImg  = document.getElementById('popup-img');
const popupName = document.getElementById('popup-name');
const popupDesc = document.getElementById('popup-desc');
const popupSize = document.getElementById('popup-size-section');
const addBtn    = document.getElementById('popup-add-btn');
const closeBtn  = document.getElementById('popup-close');

function openPopup(sectionId, itemIndex) {
    const section = menuSection.find(s => s.id === sectionId);
    if (!section) return;
    const item = section.items[itemIndex];
    if (!item) return;

    currentItem = item;
    const sizes = getSizeOptions(item);

    popupImg.src = item.image;
    popupImg.alt = item.name;
    popupName.textContent = item.name;
    popupDesc.textContent = item.desc;

    if (sizes.length > 0) {
        selectedPrice = sizes[0].price;

        let sizesHTML = `<p class="size-label">Choose a size</p><div class="size-grid">`;
        sizes.forEach((size, i) => {
            sizesHTML += `
            <button class="size-btn ${i === 0 ? 'selected' : ''}"
                onclick="selectSize(this, ${size.price})">
                <div class="sz">${size.label}</div>
                <div class="pr">Rs. ${size.price.toLocaleString()}</div>
            </button>`;
        });
        sizesHTML += `</div>`;
        popupSize.innerHTML = sizesHTML;
    } else {
        selectedPrice = item.price ?? 0;
        popupSize.innerHTML = `<p class="single-price">Rs. ${selectedPrice.toLocaleString()}</p>`;
    }

    updateAddBtn();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function selectSize(btn, price) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedPrice = price;
    updateAddBtn();
}

function updateAddBtn() {
    addBtn.textContent = `Add to Cart — Rs. ${selectedPrice.toLocaleString()}`;
}

function closePopup() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    currentItem = null;
}

closeBtn.addEventListener('click', closePopup);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closePopup(); });

addBtn.addEventListener('click', () => {
    if (!currentItem) return;
    // ── Your cart logic goes here ──
    console.log('Added to cart:', currentItem.name, '| Price: Rs.', selectedPrice);
    // Example: addToCartArray(currentItem, selectedPrice);
    closePopup();
});

// ── Active nav highlight on scroll ───────────────────────────
const sections = document.querySelectorAll('h3[id]');
const navLinks = document.querySelectorAll('.nav2 .items a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 170) {
            current = sec.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.parentElement.classList.add('active');
            link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    });
});