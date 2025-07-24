"use strict";
const shapeOne = document.querySelector(".shape1");
const shapeTwo = document.querySelector(".shape2");
const shapeThree = document.querySelector(".shape3");
const menu = document.querySelector(".menu");
const frontPage = document.querySelector(".front-page");
const navDiv = document.querySelector(".nav-div");
const menuLong = document.querySelector(".menu-long");
const hamb = document.querySelector(".hamb");
const overlay = document.getElementById("overlay-hamburguer");
const menuMobile = document.querySelector(".menu-mobile");
const menuProjects = document.querySelector(".menu-projects");
const back =  document.querySelector("#back");
const backgroundClassic = document.querySelector(".classic");
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
const experimentalSection = document.querySelector(".experimental");
const experimentalImage = document.querySelector(".experimental-img");
const experimentalText = document.querySelector(".experimental-text");
const experimentalVideo = document.querySelector(".video-experimental");
const corClassic = [233, 233, 233];
const corWorld = [52, 30, 30];
const corRock = [90, 85, 92];
const corExperimental = [218, 215, 247];

// Position Fixed of Menu when is not over the main section
const observy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {navDiv.classList.remove("nav-fix")} 
        else {navDiv.classList.add("nav-fix")}
      });
    },{threshold: 0.1}
  );
  observy.observe(frontPage);


hamb.addEventListener("click", function () {
    overlay.classList.toggle("hidden");
    menuMobile.classList.toggle("hidden");
})

// Needs WORK ON THE PROJECTS TAB
menuMobile.addEventListener("click", function (e) {
    if (e.target.classList.contains("dropbtn-mobile")) {
        // Put here what you want to do when Projects is clicked
        menuMobile.classList.toggle("hidden");
        menuProjects.classList.toggle("hidden");
        return;
      }
    overlay.classList.toggle("hidden");
    menuMobile.classList.toggle("hidden");
    console.log(e.target)
})

menuProjects.addEventListener("click", function (e) {
    if (e.target.id = "back") {
        // Put here what you want to do when Projects is clicked
        menuMobile.classList.toggle("hidden");
        menuProjects.classList.toggle("hidden");
        return;
      }
})

// console.log(window);
if (window.innerWidth < 1120) {
    shapeOne.style.clipPath = "polygon(0% 0%, 25% 0%, 10% 50%, 25% 100%, 0% 100% )";
    shapeTwo.style.clipPath = "polygon(50% 0%, 35% 60%, 50% 100%, 85% 100%, 85% 0%)";

    ////MENU////
    menuLong.classList.add("hidden");
    hamb.classList.remove("hidden");
// menu.innerHTML = `<svg class="hamburger" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//   <path d="M4 10h24a2 2 0 100-4H4a2 2 0 100 4zm24 4H4a2 2 0 100 4h24a2 2 0 100-4zm0 8H4a2 2 0 100 4h24a2 2 0 100-4z"/>
// </svg>`

                            }

document.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    // console.log("Scroll Position:", scrollPosition);
    let newMargin = Math.min(0, -scrollPosition / 2);
    // shapeOne.style.marginLeft = `${newMargin}px`;
   
    shapeOne.style.transform = `translateX(${newMargin}px)`
    shapeTwo.style.transform = `translateX(${newMargin}px)`;
    ///////////Não me lembro o que é que faz... Comentei-o.
    shapeThree.style.clipPath = `polygon(${50 - (0.05 * -newMargin)}% 0%, 100% 0%, 100% 100%, ${50 - (0.05 * -newMargin)}% 100%)`;
    // SET COLOR FOR CLASSICAL AND WORLD MUSIC TRANSITION
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

    ////////////////////////////////////////////////////ANTIGO//////////////////////////////
    if (scrollPosition >= 400) {
        let transyImg = 0 + ((scrollPosition - 400) / 400) * 50;
        classicImage.style.filter = `brightness(${Math.min(100, transyImg)}%)`;
        // backgroundClassic.style.paddingTop = `${Math.min(1150, (50 + ((scrollPosition - 400) / 400) * 80))}px`;
    }


    ////////////////NEW TECHNIQUE//////////////////
    const screenHeight = window.innerHeight;
    const newScrollPosition = window.scrollY + window.innerHeight;

    ////////////////CLASSIC//////////////////
    const classicPosition = backgroundClassic.getBoundingClientRect();
    const visibilityClassic = 0.2;
    const classicPositionTop = newScrollPosition - screenHeight + classicPosition.top;
    const classicPositionBottom = newScrollPosition - screenHeight + classicPosition.bottom;
    const whenToChangeClassic = classicPositionTop + ((classicPositionTop - classicPositionBottom) * visibilityClassic);
    
    if (window.innerWidth >= 1120) {
        ////Image, Text and Video
        if(newScrollPosition >= whenToChangeClassic) {
            classicImage.style.transform = `translateY(${Math.min(60, -(whenToChangeClassic - newScrollPosition) * 0.02)}%)`
            classicText.style.transform = `translateY(${Math.min(30, -(whenToChangeClassic - newScrollPosition) * 0.009)}%)`;
            classicVideo.style.transform = `translateY(${Math.min(30, -(whenToChangeClassic - newScrollPosition) * 0.008)}%)`;
        }
    }
    

    ////////////////WORLD//////////////////
    const worldPosition = worldSection.getBoundingClientRect();
    const realWorldPositionTop = newScrollPosition -screenHeight + worldPosition.top;
    const realWorldPositionBottom = newScrollPosition - screenHeight + worldPosition.bottom;
    const visibilityWorld = 0.05;
    const whenToChangeWorld = realWorldPositionTop + ((realWorldPositionBottom - realWorldPositionTop) * visibilityWorld);

    //Image, Text and Video
    if (window.innerWidth >= 1120) {
        if(newScrollPosition >= whenToChangeWorld) {
            worldImage.style.transform = `translateY(${Math.min(30, -(whenToChangeWorld - newScrollPosition) * 0.027)}%)`
            worldText.style.transform = `translateY(${Math.min(20, -(whenToChangeWorld - newScrollPosition) * 0.01)}%)`;
            worldVideo.style.transform = `translateY(${Math.min(20, -(whenToChangeWorld - newScrollPosition) * 0.02)}%)`;
        }
    }
    ////////////BACKGROUND//////////////
    // const whenToChange = worldPosition.top + screenHeight * visibility;
    if (newScrollPosition >= whenToChangeWorld) {
        let equation = (newScrollPosition - whenToChangeWorld) / 800;
        // console.log("Equation", equation);
        // console.log("worldPosition.top", worldPosition.top);
        const [r, g, b] = changeBackgroundColor ( [cor, cor, cor], corWorld, equation);
        worldSection.style.backgroundColor = `rgb(${Math.max(corWorld[0], r)}, ${Math.max(corWorld[1], g)}, ${Math.max(corWorld[2], b)})`;
        backgroundClassic.style.background = "none";
        backgroundClassic.style.backgroundColor = `rgb(${Math.max(corWorld[0], r)}, ${Math.max(corWorld[1], g)}, ${Math.max(corWorld[2], b)})`;
    }


////////////////ROCK//////////////////
const rockPosition = rockSection.getBoundingClientRect();
const rockPositionTop = newScrollPosition - screenHeight + rockPosition.top;
const rockPositionBottom = newScrollPosition - screenHeight + rockPosition.bottom;
const visibilityRock = 0.05;
const whenToChangeRock = rockPositionTop + ((rockPositionBottom - rockPositionTop) * visibilityRock);

if(newScrollPosition >= whenToChangeRock) {
    if (window.innerWidth >= 1120) {
        rockImage.style.transform = `translateY(${Math.min(30, -(whenToChangeRock - newScrollPosition) * 0.027)}%)`
        rockText.style.transform = `translateY(${Math.min(20, -(whenToChangeRock - newScrollPosition) * 0.01)}%)`;
        rockVideo.style.transform = `translateY(${Math.min(20, -(whenToChangeWorld - newScrollPosition) * 0.02)}%)`;
    }
    ////////////BACKGROUND//////////////
    let equation = (newScrollPosition - whenToChangeRock) / 800;
    const [r, g, b] = changeBackgroundColor (corWorld, corRock, equation);
    worldSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    rockSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}


////////////////EXPERIMENTAL//////////////////
const experimentalPosition = experimentalSection.getBoundingClientRect();
const experimentalPositionTop = newScrollPosition - screenHeight + experimentalPosition.top;
const experimentalPositionBottom = newScrollPosition - screenHeight + experimentalPosition.bottom;
const visibilityExperimental = 0.05;
const whenToChangeExperimental = experimentalPositionTop + ((experimentalPositionBottom - experimentalPositionTop) * visibilityExperimental);

if(newScrollPosition >= whenToChangeExperimental) {
   
    if (window.innerWidth >= 1120) {
        experimentalImage.style.transform = `translateY(${Math.min(30, -(whenToChangeExperimental - newScrollPosition) * 0.027)}%)`
        experimentalText.style.transform = `translateY(${Math.min(20, -(whenToChangeExperimental - newScrollPosition) * 0.01)}%)`;
        experimentalVideo.style.transform = `translateY(${Math.min(20, -(whenToChangeExperimental - newScrollPosition) * 0.02)}%)`;
    }
    ////////////BACKGROUND//////////////
    let equation = (newScrollPosition - whenToChangeExperimental) / 800;
    // console.log("Equation", equation);
    const [r, g, b] = changeBackgroundColor ( [90, 85, 92], [218, 215, 247], equation);
    rockSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    experimentalSection.style.backgroundColor = `rgb(${Math.max(90, r)}, ${Math.max(85, g)}, ${Math.max(92, b)})`;
}
////////////////UPCOMING CONCERTS//////////////////


})

function changeBackgroundColor (startColor, endColor, factor) {
    return startColor.map((c, i) => Math.round(c + factor * (endColor[i] - c)));
}

const elements = document.querySelectorAll(".concert-box");
const elements2 = document.querySelectorAll(".biography p");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.8 });

elements.forEach(element => observer.observe(element));
elements2.forEach(element => observer.observe(element));

//////////////Menu/////////////

document.querySelectorAll('.linky').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor jump
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
  });
  });



// document.querySelectorAll('.menu a').forEach(anchor => {
//     if (anchor.getAttribute('href').startsWith('#')) {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
//             if (targetElement) {
//                 if (targetId === "music") {
//                     console.log("It is Music!!!!");
//                     targetElement.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'end',
//                     });
//                 }
//                 else {
//                     targetElement.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start',
//                     }); 
//                 }
//             }
//         });
//     }




    // anchor.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     const targetId = this.getAttribute('href').substring(1);
    //     const targetElement = document.getElementById(targetId);
    //     if (targetElement) {
    //         if (targetElement.id == "music") {
    //             console.log("It is Music!!!!");
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'end',
    //             });
    //         }
    //         else {
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //             }); 
    //         }
    //     }
    // });
// });


/////////////////COPY EMAIL///////////////
const emailP = document.querySelector(".email");
const emailCopy = document.querySelector(".copy-me");

emailP.addEventListener("mouseenter", function (e) {
    emailCopy.classList.remove("hidden");
});
emailP.addEventListener("mouseleave", function () {
    emailCopy.classList.add("hidden");
});

emailP.addEventListener("click", async function () {
    emailCopy.innerHTML = "Copied!";
    const textToCopy = emailP.textContent;
    await navigator.clipboard.writeText(textToCopy);
    emailCopy.classList.remove("hidden");
    setTimeout(function () {
        emailCopy.classList.add("hidden");
        emailCopy.innerHTML = "Copy Me!";
    }, 3000);
});


