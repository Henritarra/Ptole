"use strict";
const shapeOne = document.querySelector(".shape1");
const shapeTwo = document.querySelector(".shape2");
const shapeThree = document.querySelector(".shape3");
const backgroundClassic = document.querySelector(".classic");
const classicImage = document.querySelector(".classical-img");

// console.log(window);

document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    console.log("Scroll Position:", scrollPosition);
    let newMargin = Math.min(0, -scrollPosition / 2);
    // shapeOne.style.marginLeft = `${newMargin}px`;
    shapeOne.style.transform = `translateX(${newMargin}px)`
    shapeTwo.style.transform = `translateX(${newMargin}px)`;
    shapeThree.style.clipPath = `polygon(${50 - (0.05 * -newMargin)}% 0%, 100% 0%, 100% 100%, ${50 - (0.05 * -newMargin)}% 100%)`;
    
    
    if (scrollPosition >= 400) {
        let startWhite = 0;
        let transy = (startWhite - 400 + scrollPosition / 2.2);
        let transyPerc = 18 - ((scrollPosition - 400) / 750) * 18;
        const cor = 230;
        backgroundClassic.style.background = `linear-gradient(to left,rgb(105, 11, 1) 0%, rgb(${Math.min(cor, transy)}, ${Math.min(cor, transy)}, ${Math.min(cor, transy)}) ${transyPerc}%)`;
        shapeThree.style.background = `linear-gradient(to left,rgb(105, 11, 1) 0%, rgb(${Math.min(cor, transy)}, ${Math.min(cor, transy)}, ${Math.min(cor, transy)}) ${transyPerc}%)`;
        shapeOne.style.background = `linear-gradient(to left,rgb(105, 11, 1) 0%, rgb(${Math.min(cor, transy)}, ${Math.min(cor, transy)}, ${Math.min(cor, transy)}) ${transyPerc}%)`;
        shapeTwo.style.background = `linear-gradient(to left,rgb(105, 11, 1) 0%, rgb(${Math.min(cor, transy)}, ${Math.min(cor, transy)}, ${Math.min(cor, transy)}) ${transyPerc}%)`;
    }

    if (scrollPosition >= 400) {
        let transyImg = 0 + ((scrollPosition - 400) / 400) * 50;
        classicImage.style.filter = `brightness(${Math.min(100, transyImg)}%)`;
        backgroundClassic.style.paddingTop = `${Math.min(1050, (50 + ((scrollPosition - 400) / 400) * 160))}px`;
        // classicImage.style.paddingTop = `900px`;

    }
})