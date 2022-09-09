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
    console.log(header)
    this.scrollY >= 50 ? header.classList.add("onScrollHeader") : header.classList.remove("onScrollHeader");
}
window.addEventListener('scroll', onScrollHeader)

