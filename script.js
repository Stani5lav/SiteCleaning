/**
 * =========================
 * HEADER
 *==========================
 */

/**
 * ======
 * Menu
 * ======
 */

let btnOpenMenu = document.querySelector("#openMenu");
let btnCloseMenu = document.querySelector("#closeMenu");
console.dir(btnOpenMenu);

btnOpenMenu.onclick = function (e) {
    e.preventDefault();

    let sidebarMenu = document.querySelector('.sidebar-menu');
    sidebarMenu.classList.add('opened');
}

btnCloseMenu.onclick = function (e) {
    e.preventDefault();

    let sidebarMenu = document.querySelector('.sidebar-menu');
    sidebarMenu.classList.remove('opened');
}

/**
 * 
 * Slider
 * 
 */

let sliderNav = document.querySelectorAll('.slider-nav li');

for (let i = 0; i < sliderNav.length; i++) {
    sliderNav[i].onclick = function (e) {
        e.preventDefault();
        document.querySelector('.slider-nav li.active').classList.remove('active');
        e.target.classList.add('active');

        let id = e.target.dataset.id;

        document.querySelector('.slider-item.active').classList.remove('active');
        document.querySelector('.slider-item[data-id="' + id + '"]').classList.add('active');


    }
}































const boxes = Array.from(document.querySelectorAll(".que"));

boxes.forEach(box => {
    box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".question");
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle("active");
    if (currentBox.classList.contains("active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else {
        currentContent.style.maxHeight = 0;
    }
}




