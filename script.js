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

// let sliderNav = document.querySelectorAll('.slider-nav li');

// for (let i = 0; i < sliderNav.length; i++) {
//     sliderNav[i].onclick = function (e) {
//         e.preventDefault();
//         document.querySelector('.slider-nav li.active').classList.remove('active');
//         e.target.classList.add('active');

//         let id = e.target.dataset.id;

//         document.querySelector('.slider-item.active').classList.remove('active');
//         document.querySelector('.slider-item[data-id="' + id + '"]').classList.add('active');


//     }
// }


$('.slider-nav li').on('click', function (e) { //(для об'єкту лі) (підключаємо подію (он)) "клік", яка виконує функцію
    e.preventDefault();

    $('.slider-nav li.active').removeClass('active'); //видалити клас ектів у об'екта лі
    let id = $(this).data('id'); //створити змінну айді, яка зберігає у собі атрибут айді поточного лі та (строка 68)

    $('.slider-item.active').fadeOut("slow", function () { //плавно приховати активний об'єкт слайдер-айтем та виконати функцію 
        $(this).removeClass('active'); //видалити клас ектів у поточного активного об'єкту слайдер-айтем
        $('.slider-item[data-id="' + id + '"]').fadeIn("slow", function () { //плавно показати об'єкт слайдер-айтем із обраним айді та виконати функцію
            $(this).addClass('active'); //додати йому клас ектів
        });

    });
    $(this).addClass('active'); //(зі строки 59) та додати йому клас ектів

});

//************       Площа приміщення         ********************************************* */

let square = document.querySelector('.square');
let sq = 1;
let plusSquareBtn = document.querySelector('.plus-square');
let minusSquareBtn = document.querySelector('.minus-square');

plusSquareBtn.onclick = function () {
    sq++;
    minusSquareBtn.src = "img/home/minus.png";
    square.value = sq;
}

minusSquareBtn.onclick = function () {
    if (sq > 1) {
        sq--;
        square.value = sq;
    }

    if (sq === 1) {
        minusSquareBtn.src = "img/home/minus-na.png";
    }
}

square.oninput = function () {
    if (sq >= 1) {
        sq = square.value;
        square.value = sq;
        if (sq > 1)
            minusSquareBtn.src = "img/home/minus.png";
    }
}

square.onchange = function () {
    if (square.value < 1) {
        square.value = sq;
    }
    if (sq <= 1) {
        minusSquareBtn.src = "img/home/minus-na.png";
    }

}


//*********************      Забрати/Привезти ключі         ************************************ */

let keyButton1 = document.querySelector('.key-button-1');

keyButton1.onclick = function () {
    keyButton1.classList.toggle('active');
};

let keyButton2 = document.querySelector('.key-button-2');

keyButton2.onclick = function () {
    keyButton2.classList.toggle('active');
};

//**********************      Поточна дата                    ********************** */
let currentDate = new Date();

let dateString = currentDate.toISOString().slice(0, 10);

document.getElementById("inputDate").value = dateString;
document.getElementById("inputDate").min = dateString;































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




