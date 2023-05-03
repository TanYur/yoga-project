const slides = document.querySelectorAll('.slider .item');
const lenghtVisibleItem = Object.keys(yogaData).length;
let cardsDescription = document.querySelectorAll('.card-description');

//numbers of cards existing in the database
//номера карточек существующих в базе
let arrNumberCardIs = [];
for (var n in yogaData) {
    if (yogaData.hasOwnProperty(n)) {
        arrNumberCardIs.push(n);
    }
};

//номера показываемых карточек
//the numbers of the cards shown

let arrSlidesNumberCards = [];
slides.forEach(i => arrSlidesNumberCards.push(i.innerHTML));


//получить текущий номер карточки
//get current card number
let getCurrentCardNumber = (i) => yogaData[i] ? yogaData[i].image.replace(/[^0-9]/gi, '') : 0;

function moveSlidesNext() {
    let items = [...slides];
    getImgForAll();

    items.forEach((e, i) => {
        let currentElement = e.innerHTML;
        const numberInData = x => arrNumberCardIs.findIndex(i => i == +x);
        let elementIndexInData = arrNumberCardIs[numberInData(currentElement) + 1];
        e.classList.remove('mirror');
        if (elementIndexInData) {
            e.style.backgroundImage = yogaData[elementIndexInData].image;
            e.innerHTML = elementIndexInData;
        } else {
            e.style.backgroundImage = yogaData[arrNumberCardIs[0]].image;
            e.innerHTML = arrNumberCardIs[0];
        }
    });
}

function moveSlidesPrev() {
    let items = [...slides];

    getImgForAll();
    items.forEach((e) => {
        let currentElement = e.innerHTML;
        const numberInData = x => arrNumberCardIs.findIndex(i => i == +x);
        let elementIndexInData = arrNumberCardIs[numberInData(currentElement) - 1];
        e.classList.remove('mirror');
        if (elementIndexInData) {
            e.style.backgroundImage = yogaData[elementIndexInData].image;
            e.innerHTML = elementIndexInData;
        } else {
            e.style.backgroundImage = yogaData[arrNumberCardIs[arrNumberCardIs.length - 1]].image;
            e.innerHTML = arrNumberCardIs[arrNumberCardIs.length - 1];
        }
    });
}

var nextButton = document.querySelector('.btn-next');
nextButton.onclick = function () {
    moveSlidesNext();
};
document.addEventListener('keydown', function (event) {
    if (event.code == 'ArrowLeft') {
        moveSlidesPrev();
    } else if (event.code == 'ArrowRight') {
        moveSlidesNext();
    }
});

var prevButton = document.querySelector('.btn-prev');
prevButton.onclick = function () {
    moveSlidesPrev();
};

function mirror(){
    let items = Array.from(slides);
    
    //проверка на уже перевернутые карточки
    //checking for already inverted cards
    if (items.some(j => j.classList.contains('mirror'))) {
        getImgForAll();
        cardsDescription.forEach(j => j.innerHTML = "Посмотреть описание")
    };
}


var playButton = document.querySelector('.btn-play');
var stopButton = document.querySelector('.btn-stop');

let timer;
let time = 1000;

// запустить слайдер
//start slider

playButton.onclick = function () {
    clearInterval(timer);
    time = (+document.querySelector('.minutes').value * 60000) + (+document.querySelector('.seconds').value * 1000);
    // let items = Array.from(slides);
    // itemsClassList = [...items].map(i => i.classList).join();
    // if (itemsClassList.includes('mirror')) {
    //     //items.forEach(i => i.classList.remove('mirror'));
    //     getImgForAll();
    // }
    mirror();
    timer = setInterval(function () {
        moveSlidesNext();
    }, time);
};

// остановить слайдер
//stop slider


function stopPlaying() {
    time = (+document.querySelector('.minutes').value * 60000) + (+document.querySelector('.seconds').value * 1000);
    clearInterval(timer);
};

stopButton.onclick = stopPlaying;

// начало\конец слайдера

var startButton = document.querySelector('.btn-start');
var endButton = document.querySelector('.btn-end');

startButton.onclick = function () {
    let items = [...slides];
    items.forEach((e, i) => {
        e.style.backgroundImage = yogaData[+arrNumberCardIs[0 + i]].image;
        e.innerHTML = +arrNumberCardIs[0 + i];
    });
};


endButton.onclick = function () {
    let items = Array.from(slides);

    for (let i = 0, j = numberSliderActive - 1; i < numberSliderActive; i++, j--) {

        items[i].style.backgroundImage = yogaData[+arrNumberCardIs[arrNumberCardIs.length - 1 - j]].image;
        items[i].innerHTML = +arrNumberCardIs[arrNumberCardIs.length - 1 - j];
    }
};


//повернуть карточку и изменить текст
//получить карту, по которой кликнули
let card = '';

// получить массив номеров из данных

function getArrNumberCurrentCards(arr) {
    let arrNumberCurrentCards = arr.map(i => +i.innerHTML.replace(/[^0-9]/gi, ''));
    return arrNumberCurrentCards;
}

//возвращение сарточки в исходное состояние, при нажатии на другую карточку

function getImgForAll() {

    let items = Array.from(slides);
    let arrNumberCurrentCards = getArrNumberCurrentCards(items);
    items.forEach((i, index) => {
        i.style.backgroundImage = yogaData[arrNumberCurrentCards[index]].image;
        i.innerHTML = +arrNumberCurrentCards[index];
        i.classList.remove('mirror');
    });
};



// сменить надпись на кнопке переворачивания карточки и перевернуть карточку
for (let i = 0; i < cardsDescription.length; i++) {

    //кнопка переворачивания
    //flip button
    const cardDescription = cardsDescription[i];

    //stop slider
    cardDescription.onclick = stopPlaying;


    cardDescription.addEventListener('click', function (e) {

        //получить карточку, по кнопке под кликнули
        //get a card, the button under clicked
        card = document.querySelector('.slider .item-0' + (i + 1));
        console.log(card.classList.contains('mirror'));

        if (card.classList.contains('mirror')) {
            card.classList.remove('mirror');
            getImgForAll();
            cardsDescription[i].innerHTML = "Посмотреть описание";
        } else {

            // let arrCards = Array.from(slides);
            // console.log(arrCards);

            // //проверка на уже перевернутые карточки
            // //checking for already inverted cards
            // if (arrCards.some(j => j.classList.contains('mirror'))) {
            //     getImgForAll();
            //     cardsDescription.forEach(j => j.innerHTML = "Посмотреть описание")
            // };
            mirror();

            backVisible(card);
            cardsDescription[i].innerHTML = "Посмотреть изображение";
        }
    });
}



//создание описания карточки
//creating a card description
let yogaTitle = document.createElement("p");
let rusTitle = document.createElement("p");
let yogaDescription = document.createElement("p");


function backVisible(back) {
    //получаем номер карточки
    let numberItem = back.innerHTML.replace(/[^0-9]/i, '');
    //удаляем изображение
    back.style.backgroundImage = 'none'
    back.classList.add('mirror');
    //вставляем ранее созданные элементы в нужные нам места
    back.appendChild(yogaTitle);
    back.appendChild(rusTitle);
    back.appendChild(yogaDescription);
    //в уже ранее созданные элементы добавляем содержимое
    yogaTitle.textContent = yogaData[numberItem].yogaName;
    rusTitle.textContent = yogaData[numberItem].rusianName;
    yogaDescription.textContent = yogaData[numberItem].description;
};






