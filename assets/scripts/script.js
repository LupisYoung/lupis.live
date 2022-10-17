window.onload = randomImage

let bg = document.getElementById('hero-bg')
let arrow = document.getElementById('subhead')

let header = document.querySelector('header')

window.addEventListener('scroll', function(){


    let value = window.scrollY;

    header.style.top = - value * 0.08 + 'px';

    bg.style.opacity = 100 - value * 0.15 + '%';
    header.style.opacity = 100 - value * 0.15 + '%';
    arrow.style.opacity = 100 - value * 0.8 + '%';

})

function randomImage() {
    var randomtxt=[
        "assets/images/logo.png",
        "assets/images/logo.png",
        "assets/images/logo.png",
        "assets/images/logo.png",
        "assets/images/logo.png",
        "assets/images/poof.png"
    ];
    let randomImg = randomtxt[Math.floor((Math.random() * 5.99))];
    document.getElementById('logoimg').src = randomImg
}