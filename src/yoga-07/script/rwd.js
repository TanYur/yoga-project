const slidesAll = document.querySelectorAll('.slider .card-item');

//console.log('ширина экрана: ' + window.innerWidth);


let ecranSize = '';
let choiseEcranSize = { 'Desktop': 3, 'Tablet': 2, 'Smartphone': 1 };

function screen_check() {
    if (window.innerWidth > 1020) {
        ecranSize = 'Desktop';
    } else if (window.innerWidth < 1021 && window.innerWidth > 600) {
        ecranSize = 'Tablet';
    } else if (window.innerWidth < 600) {
        ecranSize = 'Smartphone';
    }
    return ecranSize;
};

let numberSliderActive = choiseEcranSize[screen_check()];

//function numberOfActiveCard() {  
    for (let i = numberSliderActive; i < 3; i++) {
        slidesAll[i].classList.add('card-none');
    };
//}

//numberOfActiveCard();

