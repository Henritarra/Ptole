"use strict";
const shapeOne = document.querySelector(".shape1");
const shapeTwo = document.querySelector(".shape2");
const shapeThree = document.querySelector(".shape3");
const backgroundClassic = document.querySelector(".classic");
const classicPosition = backgroundClassic.getBoundingClientRect();
const classicImage = document.querySelector(".classical-img");
const classicText = document.querySelector(".classical-text");
const classicVideo = document.querySelector(".video-classical");
const worldSection = document.querySelector(".world");
const worldImage = document.querySelector(".world-music-img");
const worldText = document.querySelector(".world-music-text");
const worldVideo = document.querySelector(".video-world");
const rockSection = document.querySelector(".rock");
const rockImage = document.querySelector(".rock-img");
const rockText = document.querySelector(".rock-text");
const rockVideo = document.querySelector(".video-rock");

// console.log(window);

document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    console.log("Scroll Position:", scrollPosition);
    let newMargin = Math.min(0, -scrollPosition / 2);
    // shapeOne.style.marginLeft = `${newMargin}px`;
    shapeOne.style.transform = `translateX(${newMargin}px)`
    shapeTwo.style.transform = `translateX(${newMargin}px)`;
    shapeThree.style.clipPath = `polygon(${50 - (0.05 * -newMargin)}% 0%, 100% 0%, 100% 100%, ${50 - (0.05 * -newMargin)}% 100%)`;
    // SET COLOT FOR CLASSICAL AND WORLD MUSIC TRANSITION
    const cor = 230;
    
    if (scrollPosition >= 400) {
        let startWhite = 0;
        let transy = (startWhite - 400 + scrollPosition / 2.2);
        let transyPerc = 18 - ((scrollPosition - 400) / 750) * 18;
        
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

    ////////////////NEW TECHNIQUE//////////////////
    const screenHeight = window.innerHeight;
    const newScrollPosition = window.scrollY + window.innerHeight;

    ////////////////CLASSIC//////////////////
    const visibilityClassic = 0.3;
    const whenToChangeClassic = classicPosition.top + screenHeight * visibilityClassic;
    ////Image
    if(newScrollPosition >= whenToChangeClassic) {
        classicImage.style.transform = `translateY(${Math.min(30, -(whenToChangeClassic - newScrollPosition) * 0.027)}%)`
    }
    ////Text and Video
    if(newScrollPosition >= whenToChangeClassic) {
        classicText.style.transform = `translateY(${Math.min(20, -(whenToChangeClassic - newScrollPosition) * 0.01)}%)`;
        classicVideo.style.transform = `translateY(${Math.min(20, -(whenToChangeClassic - newScrollPosition) * 0.02)}%)`;
    }
    

    ////////////////WORLD//////////////////
    const worldPosition = worldSection.getBoundingClientRect();
    const realWorldPositionTop = newScrollPosition -screenHeight + worldPosition.top;
    const realWorldPositionBottom = newScrollPosition - screenHeight + worldPosition.bottom;
    const visibilityWorld = 0.05;
    const whenToChangeWorld = realWorldPositionTop + ((realWorldPositionBottom - realWorldPositionTop) * visibilityWorld);

    ///Image
    if(newScrollPosition >= whenToChangeWorld) {
        worldImage.style.transform = `translateY(${Math.min(30, -(whenToChangeWorld - newScrollPosition) * 0.027)}%)`
    }
    //Text and Video
    if(newScrollPosition >= whenToChangeWorld) {
        worldText.style.transform = `translateY(${Math.min(20, -(whenToChangeWorld - newScrollPosition) * 0.01)}%)`;
        worldVideo.style.transform = `translateY(${Math.min(20, -(whenToChangeWorld - newScrollPosition) * 0.02)}%)`;
    }
    ////////////BACKGROUND//////////////
    // const whenToChange = worldPosition.top + screenHeight * visibility;
    if (newScrollPosition >= whenToChangeWorld) {
        let equation = (newScrollPosition - whenToChangeWorld) / 800;
        console.log("Equation", equation);
        // console.log("worldPosition.top", worldPosition.top);
        const [r, g, b] = changeBackgroundColor ( [cor, cor, cor], [52, 30, 30], equation);
        worldSection.style.backgroundColor = `rgb(${Math.max(52, r)}, ${Math.max(30, g)}, ${Math.max(30, b)})`;
        backgroundClassic.style.background = "none";
        backgroundClassic.style.backgroundColor = `rgb(${Math.max(52, r)}, ${Math.max(30, g)}, ${Math.max(30, b)})`;
    }


////////////////ROCK//////////////////
const rockPosition = rockSection.getBoundingClientRect();
const rockPositionTop = newScrollPosition - screenHeight + rockPosition.top;
const rockPositionBottom = newScrollPosition - screenHeight + rockPosition.bottom;
const visibilityRock = 0.05;
const whenToChangeRock = rockPositionTop + ((rockPositionBottom - rockPositionTop) * visibilityRock);

if(newScrollPosition >= whenToChangeRock) {
    ///Image
    rockImage.style.transform = `translateY(${Math.min(30, -(whenToChangeRock - newScrollPosition) * 0.027)}%)`
    //Text and Video
    rockText.style.transform = `translateY(${Math.min(20, -(whenToChangeRock - newScrollPosition) * 0.01)}%)`;
    // rockVideo.style.transform = `translateY(${Math.min(20, -(whenToChangeRock - newScrollPosition) * 0.02)}%)`;
    ////////////BACKGROUND//////////////
    let equation = (newScrollPosition - whenToChangeRock) / 800;
    console.log("Equation", equation);
    const [r, g, b] = changeBackgroundColor ( [52, 30, 30], [90, 85, 92], equation);
    worldSection.style.backgroundColor = `rgb(${Math.max(52, r)}, ${Math.max(30, g)}, ${Math.max(30, b)})`;
    rockSection.style.backgroundColor = `rgb(${Math.max(52, r)}, ${Math.max(30, g)}, ${Math.max(30, b)})`;
}

})

function changeBackgroundColor (startColor, endColor, factor) {
    return startColor.map((c, i) => Math.round(c + factor * (endColor[i] - c)));
}
// let visibility = Math.max(0, Math.min(1, (windowHeight - worldPosition.top) / windowHeight));

// function interpolateColor(start, end, factor) {
//     return start.map((c, i) => Math.round(c + factor * (end[i] - c)));
// }

// IntersectionObserver