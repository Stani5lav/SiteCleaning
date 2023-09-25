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




