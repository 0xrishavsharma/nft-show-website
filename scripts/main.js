// Close and open mobile nav menu
let toggleMenu = document.querySelector("#toggleMenu");
let menuCloseWrapper = document.querySelector("#menuCloseWrapper");
let menuCloseIcon = document.querySelector("#menuCloseIcon");
let navMenu = document.querySelector("#navMenu");

toggleMenu.addEventListener('click', () => {
    if (!navMenu.classList.contains("openMenu")) {
        navMenu.classList.add("openMenu");
    }
})
menuCloseIcon.addEventListener('click', () => {
    navMenu.classList.remove("openMenu");
})

// Close mobile menu when we click on individual nav links
let navLink = document.querySelectorAll(".navLink");
navLink.forEach((e) => {
    e.addEventListener("click", (e) => {
        e.preventDefault();
        navMenu.classList.remove("openMenu");
    })
})

// Change the background of header
const onScrollHeader = (e) => {
    let header = document.querySelector(".header");
    this.scrollY >= 50 ? header.classList.add("onScrollHeader") : header.classList.remove("onScrollHeader");
}
window.addEventListener('scroll', onScrollHeader)


// Countdown timer
const x = setInterval(() => {


    let tillDate = new Date("Nov 1, 2022 23:59:59").getTime();
    let currentDate = new Date().getTime();
    let difference = tillDate - currentDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor(difference % (1000 * 60) / (1000))


    const timeLeft = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }

    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;
}, 1000);