// part 1
const mainTitleEl=document.querySelector('#main-title');
console.log(mainTitleEl);
mainTitleEl.textContent='Welcome to the Cozy Cafe';

// part 2
const highlightTitlesEls=document.querySelectorAll('.highlight-title');
highlightTitlesEls.forEach(function(titleEl){
    console.log(titleEl.textContent);
    titleEl.style.fontStyle="italic";
}
);

const quoteEl=document.querySelector('#quote-of-the-day');
quoteEl.textContent="A little coffee , a little conversation ";
quoteEl.classList.add('featured');

//part 3

const mainPhotoEl=document.querySelector('#main-photo');
const oldsrc=mainPhotoEl.getAttribute('src');
console.log(oldsrc);

mainPhotoEl.setAttribute('src','./assets/berry cake.avif');
mainPhotoEl.setAttribute('alt', 'A berry cake served at the cafe');

// part 4
const bgButtonEl= document.querySelector('#bg-color-btn');
const bodyEl=document.querySelector('body');


function handleBackgroundChange(){
    bodyEl.style.backgroundColor='lavender';
}

bgButtonEl.addEventListener('click',handleBackgroundChange);


// Part 5

const availability = ['Available', 'Sold Out', 'Available'];

const specialtyEls = [
    document.querySelector('#rose-latte'),
    document.querySelector('#croissant'),
    document.querySelector('#cheesecake')
];

function renderSpecialties() {
    specialtyEls.forEach(function(specialtyEl, index) {
        specialtyEl.textContent = availability[index];
    });
}

renderSpecialties();

const soldOutButtonEls = document.querySelectorAll('.sold-out-btn');

function handleSoldOut(event) {
    const index = Number(event.currentTarget.id);
    availability[index] = 'Sold Out';
    renderSpecialties();
}

soldOutButtonEls.forEach(function(buttonEl) {
    buttonEl.addEventListener('click', handleSoldOut);
});
