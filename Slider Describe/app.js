let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let describe = document.querySelector('.describe');
let listHTML = document.querySelector('.describe .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    describe.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.describe .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        describe.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        describe.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        describe.classList.remove('next', 'prev');
        describe.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    describe.classList.remove('showDetail');
}
