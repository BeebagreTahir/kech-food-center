// Select popup elements
    const popupCard = document.getElementById('popup-card');
    const popupImg = document.getElementById('popup-img');
    const popupTitle = document.getElementById('popup-title');
    const popupDesc = document.getElementById('popup-desc');
    const popupPrice = document.getElementById('popup-price');
    const closeBtn = document.getElementById('close-btn');

    // Select all food cards
    const foodCards = document.querySelectorAll('.pizza-section-boxes');

    foodCards.forEach(card => {
        card.addEventListener('click', () => {
            const img = card.querySelector('img').src;
            const title = card.querySelector('h4').innerText;
            const desc = card.querySelector('p').innerText;
            const price = card.querySelector('h5 span').innerText;

            popupImg.src = img;
            popupTitle.innerText = title;
            popupDesc.innerText = desc;
            popupPrice.innerText = price;

            popupCard.style.display = 'flex';
        });
    });

    // Close popup
    closeBtn.addEventListener('click', () => {
        popupCard.style.display = 'none';
    });

    // Close when clicking outside the popup
    popupCard.addEventListener('click', (e) => {
        if(e.target === popupCard){
            popupCard.style.display = 'none';
        }
    });