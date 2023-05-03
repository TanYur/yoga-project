const slidesAll = document.querySelectorAll('.slider .card-item');


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


for (let i = numberSliderActive; i < 3; i++) {
    slidesAll[i].classList.add('card-none');
};
