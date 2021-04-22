// RESPONSIVE MENU

const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const reserve = document.querySelector('.reserve');


// intentamos ocultar gridcontainer al momento de hacer click en el menu

const gridContainer = document.getElementById('gridContainer')

let menuCounter = 0

const clickOnMenu = () => {
    if (menuCounter == 0) {
        gridContainer.style.display = 'flex'
    } else if (menuCounter == 1) {
        gridContainer.style.display = 'none'
    }

}


// abrir y cerrar menu

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    menu.style.display = 'block';
    menu.style.top = '0';
    menuCounter++
    clickOnMenu()

}

function close() {
    menu.style.top = '-100%';
    menuCounter--
    clickOnMenu()

}



// MAPA

var map = L.map('map').setView([-34.653802, -58.349283], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.653802, -58.349283]).addTo(map)

.openPopup();


// SCROLL FUNCTION

function smoothScroll(target, duration) {
    let e = document.querySelector(target);
    var targetPosition = e.getBoundingClientRect().top + window.scrollY
    let startPosition = window.pageYOffset || window.scrollY;
    let substraction = 115
    let distance = targetPosition - startPosition - substraction;
    let startTime = null;

    function loop(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(loop);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    };

    requestAnimationFrame(loop);
}


// SCROLL LA BARBERIA
const laBarberiabtn = document.getElementById('laBarberiabtn')

laBarberiabtn.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll('.sectionGreyColor', 1000)
    close()
})


// SCROLL SERVICIOS
const serviciosbtn = document.getElementById('serviciosbtn')

serviciosbtn.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll('.services', 1000)
    close()
})


// SCROLL TRABAJOS
const trabajosbtn = document.getElementById('trabajosbtn')

trabajosbtn.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll('.ourWork', 1000)
    close()
})


// SCROLL STAFF
const equipobtn = document.getElementById('equipobtn')

equipobtn.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll('.staffSection', 1000)
    close()
})


// SCROLL STAFF
const opinionesbtn = document.getElementById('opinionesbtn')

opinionesbtn.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll('.opinion', 1000)
    close()
})


// SCROLL LOCATION
const locationbtn = document.getElementById('locationbtn')

locationbtn.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll('.location', 1000)
    close()
})


// SCROLL LOCATION
const publicacionesbtn = document.getElementById('publicacionesbtn')

publicacionesbtn.addEventListener('click', (e) => {
    e.preventDefault()
    smoothScroll('.instagramFeed', 1000)
    close()
})