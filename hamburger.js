const navListWrapper = document.querySelector(".nav-list-wrapper"); 
const hamburgerOpen = document.querySelector(".fas.fa-bars");
const hamburgerClose = document.querySelector(".far.fa-window-close"); 

var timer;

window.addEventListener("resize", function(event) {
    clearTimeout(timer);
    timer = setTimeout(hideOpenAndCloseIcons, 25);
})

hamburgerOpen.addEventListener('click', openHamburger);
hamburgerClose.addEventListener('click', closeHamburger);

function openHamburger() {
    navListWrapper.style.top = '40px'; 
    hamburgerOpen.style.display = 'none'; 
    hamburgerClose.style.display = 'block'; 
}

function closeHamburger() {
    navListWrapper.style.top = '-100vh'; 
    hamburgerOpen.style.display = 'block'; 
    hamburgerClose.style.display = 'none'; 
}

function hideOpenAndCloseIcons(){
    if (document.body.clientWidth > 800){
        hamburgerOpen.style.display = 'none'; 
        hamburgerClose.style.display = 'none'; 
    }
    else if (navListWrapper.style.top == '40px'){
        hamburgerOpen.style.display = 'none'; 
        hamburgerClose.style.display = 'block'; 
    }
    else{
        hamburgerOpen.style.display = 'block'; 
        hamburgerClose.style.display = 'none'; 
    }
}