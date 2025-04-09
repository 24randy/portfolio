function mobileMenu() {
    var burger = document.querySelector(".fa-bars");
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
}


let scroller = document.querySelectorAll('.scroll');

if (window.matchMedia("(prefers-reduced-motion: reduced)".matches)) {
    addAnimation();
}

function addAnimation() {
    scroller.forEach(scroll => {
        scroll.setAttribute('data-animated', true);
    });
}


window.onload = function () {
    halkaBox.run("gallery1", {
        animation: "fade",
        theme: "dark",
        hideButtons: false,
        preload: 0
    });

    halkaBox.run("gallery2", {
        animation: "fade",
        theme: "dark",
        hideButtons: false,
        preload: 0
    });

    halkaBox.run("gallery3", {
        animation: "fade",
        theme: "dark",
        hideButtons: false,
        preload: 0
    });

    halkaBox.run("hb-single", {
        theme: "dark"
    });
    
}

