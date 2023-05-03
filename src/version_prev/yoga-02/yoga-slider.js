var slides = document.querySelectorAll('.slider .item');
var lenghtVisibleItem = document.querySelectorAll('.slider .item-active').length;
//var indexfirstVisibleItem = [...slides].findIndex(i=>i == firstVisibleItem);  

function moveSlidesNext() {

    var indexfirstVisibleItem = [...slides].findIndex(i => i.classList.contains('item-active'));
    //console.log('indexfirstVisibleItem '+indexfirstVisibleItem);
    var firstVisibleItem = document.getElementsByClassName('item-active')[0];
    //console.log('firstVisibleItem '+ firstVisibleItem);
    var midVisibleItem = document.querySelector('.item-mid');

    let curretLastVisibleItem = indexfirstVisibleItem + lenghtVisibleItem;
    if (curretLastVisibleItem < slides.length) {

        firstVisibleItem.classList.remove('item-active');
        midVisibleItem.classList.remove('item-mid');
        midVisibleItem = [...slides][indexfirstVisibleItem + 2];
        slides[curretLastVisibleItem].classList.add('item-active');
        midVisibleItem.classList.add('item-mid');
    }
}

function moveSlidesPrev() {

    // var indexLastVisibleItem = [...slides].findIndex(i => i.classList.contains('item-active')) + lenghtVisibleItem - 1;

    var lastVisibleItem = document.getElementsByClassName('item-active')[lenghtVisibleItem - 1];
    var indexfirstVisibleItem = [...slides].findIndex(i => i.classList.contains('item-active'));

    var nextFirstVisibleItem = slides[indexfirstVisibleItem - 1]
    var midVisibleItem = document.querySelector('.item-mid');

    if (indexfirstVisibleItem != 0) {
        lastVisibleItem.classList.remove('item-active');
        midVisibleItem.classList.remove('item-mid');
        midVisibleItem = [...slides][indexfirstVisibleItem];
        nextFirstVisibleItem.classList.add('item-active');
        midVisibleItem.classList.add('item-mid');
    }
}

var nextButton = document.querySelector('.btn-next');
nextButton.onclick = function () {
    moveSlidesNext();
};

var prevButton = document.querySelector('.btn-prev');
prevButton.onclick = function () {
    moveSlidesPrev();
};