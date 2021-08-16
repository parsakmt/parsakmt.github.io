const navListWrapper = document.querySelector(".nav-list-wrapper"); 
const hamburgerOpen = document.querySelector(".fas.fa-bars");
const hamburgerClose = document.querySelector(".far.fa-window-close"); 
var mediaQuery = window.matchMedia("(max-width: 800px)");


hamburgerOpen.addEventListener('click', openHamburger);
hamburgerClose.addEventListener('click', closeHamburger);

window.addEventListener("resize", function(event) {
    hideOpenAndCloseIcons(); 
})

hamburgerOpen.addEventListener('click', openHamburger);
hamburgerClose.addEventListener('click', closeHamburger);

function openHamburger() {
    navListWrapper.style.display = 'block'; 
    hamburgerOpen.style.display = 'none'; 
    hamburgerClose.style.display = 'block'; 
}

function closeHamburger() {
    navListWrapper.style.display = 'none'; 
    hamburgerOpen.style.display = 'block'; 
    hamburgerClose.style.display = 'none'; 
}

function hideOpenAndCloseIcons(){
    if (!mediaQuery.matches){
        navListWrapper.style.display = 'block'; 
        hamburgerOpen.style.display = 'none'; 
        hamburgerClose.style.display = 'none'; 
    }
    else if (hamburgerClose.style.display == 'block'){
        navListWrapper.style.display = 'block';
        hamburgerOpen.style.display = 'none'; 
    }
    else{
        navListWrapper.style.display = 'none';
        hamburgerOpen.style.display = 'block'; 
        hamburgerClose.style.display = 'none'; 
    }
}
