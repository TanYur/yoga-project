const cards = document.querySelectorAll('.card-item');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cards[i].addEventListener('mousemove', startRotate);
    cards[i].addEventListener('mouseout', stopRotate);
}


function startRotate(event) {
    const cardItem =
        this.querySelector('.item-active');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    // console.log(halfHeight)
    // cardItem.innerText = event.offsetX + "" + event.offsetY;
    cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 12 + 'deg)rotateY(' + (event.offsetX - halfWidth) / 12 + 'deg)';
    cardItem.style.opacity = 0.7;
    cardItem.style.borderTop = "2px solid #e1e1e1cc";
    cardItem.style.borderLeft = "2px solid #e1e1e1cc";
   
}

function stopRotate() {
    const cardItem =
        this.querySelector('.item-active');
    cardItem.style.transform = 'rotate(0)';
    cardItem.style.opacity = 0.5;
    cardItem.style.borderTop = "0";
    cardItem.style.borderLeft = "0";
   
}