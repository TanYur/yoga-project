var slides = document.querySelectorAll('.slider .item');
var lenghtVisibleItem = document.querySelectorAll('.slider .item-active').length;
//var indexfirstVisibleItem = [...slides].findIndex(i=>i == firstVisibleItem);  
var colors = [];

function getRandomColor() {
};



//получить следующее изображее
//get next img
function getNextImg(x) {
    return 'url("./yoga-img/' + x + '.jpg")';
}


function moveSlidesNext() {
    let items = [...slides];
    let last = [...slides].pop().innerHTML[0];
    //console.log(items[0].innerHTML[0]);
    items.forEach(i => +last < 78 ? i.innerHTML = +i.innerHTML[0] + 1 : i);
    items.forEach(i => i.style.backgroundImage = getNextImg(+i.innerHTML[0]));

}


function moveSlidesPrev() {
    let items = [...slides];
    let first = [...slides][0].innerHTML[0];
    console.log(first)
    items.forEach(i => +first > 1 ? i.innerHTML = +i.innerHTML[0] - 1 : i);
    items.forEach(i => i.style.backgroundImage = getNextImg(+i.innerHTML[0]));
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

// setTimeButton.onclick = function () {    
//     console.log(time);
//     time = getTime();
//     console.log(time);
// }

// function getTime() {
//     time = 1000;
//     var minutes = document.querySelector('.minutes');
//     var seconds = document.querySelector('.seconds');
//     time = (+minutes.value * 60000) + (+seconds.value * 1000);
//     return time;
// }

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

//повернуть карточку и изменить текс
//var card = document.querySelector('.slider .item');
let card = '';
document.querySelector('.slider').addEventListener('click', function (e) {
    card = e.target//.innerHTML[0];
    changeCardContent();
    console.log(card);
})
// function rotateCard() {
//     card.style.transform = "rotateY(" + 360 + "deg)";    
// }
function changeCardContent() {
    if (card.classList.contains('mirror')) {
        card.style.backgroundImage = 'url("./yoga-img/1.jpg")';
        card.classList.remove('mirror');
        // document.querySelector('.item-01').innerHTML = '1';     
    } else {
        card.style.backgroundImage = 'none'
        card.classList.add('mirror');
        card.innerHTML = `1 ВРИКШАСАНА (поза дерева) Это поза растягивает и укрепляет мышцы ног и учит сохранять равновесие. Регулярное выполнение поз на равновесие улучшит концентрацию внимания, повысит мышечный тонус и поможет обрести душевное равновесие.`;
    }
}

// card.addEventListener('click', function () {
//     rotateCard();
//     changeCardContent();
// })

// card.onclick = function () {
//     // rotateCard();
//     changeCardContent();
//     // console.log(card.innerHTML);
// }

