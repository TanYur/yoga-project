var slidesNumber = document.querySelectorAll('.slider .front');
var lenghtVisibleItem = document.querySelectorAll('.slider .item-active').length;
//var indexfirstVisibleItem = [...slides].findIndex(i=>i == firstVisibleItem);  


function getRandomColor() {
};



//получить следующее изображее
//get next img
function getNextImg(x) {
    return 'url("./yoga-img/' + x + '.jpg")';
}

function moveSlidesNext() {
    //let items = [...slides ];
    let items = document.querySelectorAll('.slider .front');
    console.log(items);
    let last = items[2].innerHTML[0];
    items.forEach(i => {
        +last < 78 ? i.innerHTML = +i.innerHTML[0] + 1 : i;
        i.style.backgroundImage = getNextImg(+i.innerHTML[0]);
        if (i.classList.contains('mirror')) {
            changeCardContent();
        }
    });
}


function moveSlidesPrev() {
    let items = [...slides];
    let first = [...slides][0].innerHTML[0];
    console.log(first);
    items.forEach(i => {
        +first > 1 ? i.innerHTML = +i.innerHTML[0] - 1 : i;
        i.style.backgroundImage = getNextImg(+i.innerHTML[0]);
        if (i.classList.contains('mirror')) {
            changeCardContent();
        }
    });
}

var nextButton = document.querySelector('.btn-next');
nextButton.onclick = function () {
    moveSlidesNext();
};

var prevButton = document.querySelector('.btn-prev');
prevButton.onclick = function () {
    moveSlidesPrev();
};


var playButton = document.querySelector('.btn-play');
var stopButton = document.querySelector('.btn-stop');
var setTimeButton = document.querySelector('.bnt-set-time');
let timer;
let time = 1000;



playButton.onclick = function () {
    clearInterval(timer);
    time = (+document.querySelector('.minutes').value * 60000) + (+document.querySelector('.seconds').value * 1000);
    timer = setInterval(function () {
        moveSlidesNext();
    }, time);
    console.log(time)
};

stopButton.onclick = function () {
    time = (+document.querySelector('.minutes').value * 60000) + (+document.querySelector('.seconds').value * 1000);
    clearInterval(timer);
};

var startButton = document.querySelector('.btn-start');
var endButton = document.querySelector('.btn-end');

startButton.onclick = function () {
    document.querySelector('.item-01').innerHTML = '1';
    document.querySelector('.item-02').innerHTML = '2';
    document.querySelector('.item-03').innerHTML = '3';
    document.querySelector('.item-01').style.backgroundImage = 'url("./yoga-img/1.jpg")';
    document.querySelector('.item-02').style.backgroundImage = 'url("./yoga-img/2.jpg")';
    document.querySelector('.item-03').style.backgroundImage = 'url("./yoga-img/3.jpg")';
};

endButton.onclick = function () {
    document.querySelector('.item-01').innerHTML = '76';
    document.querySelector('.item-02').innerHTML = '77';
    document.querySelector('.item-03').innerHTML = '78';
    document.querySelector('.item-01').style.backgroundImage = 'url("./yoga-img/76.jpg")';
    document.querySelector('.item-02').style.backgroundImage = 'url("./yoga-img/77.jpg")';
    document.querySelector('.item-03').style.backgroundImage = 'url("./yoga-img/78.jpg")';
};

//повернуть карточку и изменить текст
//получить карту, по которой кликнули
let card = '';


// document.querySelector('.front').addEventListener('click', function (e) {
//     card = e.target;//.innerHTML[0];
//     console.log(card);
//     if (!isHoverableDevice) {
//         // e.preventDefault();
//         changeCardContent();
//     } else if (isHoverableDevice) {
//         // card.classList.remove('mirror');
//         document.querySelectorAll('.slider .front').forEach(i => {
//             i.classList.remove('mirror');
//             i.innerHTML = '1';
//             i.style.backgroundImage = 'url("./yoga-img/1.jpg")';
//         });
//     }

// });


document.querySelector('.front').addEventListener('click', function (e) {
    card = e.target;//.innerHTML[0];
    console.log(card);
    changeCardContent();  
});



window.addEventListener('mousemove', () => {
    document.querySelectorAll('.slider .front').forEach(i => {
        i.classList.remove('mirror');
        i.innerHTML = '1';
        i.style.backgroundImage = 'url("./yoga-img/1.jpg")';
    });

});


function changeCardContent() {
    if (card.classList.contains('mirror')) {
        card.innerHTML = '1';
        card.style.backgroundImage = 'url("./yoga-img/1.jpg")';
        card.classList.remove('mirror');
    } else {
        card.style.backgroundImage = 'none'
        card.classList.add('mirror');
        card.innerHTML = `
        1 ВРИКШАСАНА (поза дерева) Это поза растягивает и 
        укрепляет мышцы ног и учит сохранять равновесие. Регулярное выполнение 
        поз на равновесие улучшит концентрацию внимания, повысит мышечный тонус и 
        поможет обрести душевное равновесие.
        `;
    }
}


// это опредлеляет только !СТАРТ, то есть с какого экрана стартует приложение
//определить начало работы на каком устройстве, с тачэкраном или без тач.
var isTouchCapable = 'ontouchstart' in window ||
    window.DocumentTouch && document instanceof window.DocumentTouch ||
    navigator.maxTouchPoints > 0 ||
    window.navigator.msMaxTouchPoints > 0;

window.DocumentTouch && document instanceof DocumentTouch
if (isTouchCapable) {
    console.log('touch ecran is true');
} else console.log('not touch');


//ещё один способ 
function is_touch_device() {
    return !!('ontouchstart' in window);
}
function isTouchDevice() {
    try {
        document.createEvent('TouchEvent');
        return true;
    }
    catch (e) {
        return false;
    }
}

//на эту тему

window.addEventListener('touchstart', (event) => {
    console.log('Вы запустили приложение на устройстве с тачпадем');

});

// window.addEventListener('mousemove', (event) => {
//     console.log('Вы передвинули мышь');
// });

var isMouse;
const isHoverableDevice = window.matchMedia('(hover: hover) and (pointer: fine)');
