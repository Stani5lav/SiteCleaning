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
let sqTotalPrice = 2
let plusSquareBtn = document.querySelector('.plus-square');
let minusSquareBtn = document.querySelector('.minus-square');
let fullSquare = document.querySelector('.full-square');
let sqPrice = document.querySelector('.sq-price-b');

function PrintInput() {
    square.value = sq;
    fullSquare.innerHTML = sq + ' м²';
    sqTotalPrice = sq * 2;
    sqPrice.innerHTML = sqTotalPrice + 'zł';
    totalResult.innerHTML = sqTotalPrice + totalPrice + 'zł';
}


plusSquareBtn.onclick = function () {
    sq++;
    minusSquareBtn.src = "img/home/minus.png";

    PrintInput();
}

minusSquareBtn.onclick = function () {
    if (sq > 1) {
        sq--;

        PrintInput();
    }

    if (sq === 1) {
        minusSquareBtn.src = "img/home/minus-na.png";
    }
    PrintInput();
}

square.oninput = function () {
    if (square.value >= 1) {
        sq = square.value;

        PrintInput();

        if (sq > 1) {
            minusSquareBtn.src = "img/home/minus.png";
        }
        return;
    }

    sq = 1;
    PrintInput();
}




//*********************      Забрати/Привезти ключі         ************************************ */

let keyButton1 = document.querySelector('.key-button-1');
let receiveAdress = document.querySelector('.key-receive');

keyButton1.onclick = function () {
    keyButton1.classList.toggle('active');
    receiveAdress.classList.toggle('hidden');

};

let keyButton2 = document.querySelector('.key-button-2');
let backAdress = document.querySelector('.key-back');

keyButton2.onclick = function () {
    keyButton2.classList.toggle('active');
    backAdress.classList.toggle('hidden');

};


//**********************      Поточна дата                    ********************** */
let currentDate = new Date();

let dateString = currentDate.toISOString().slice(0, 10);

document.getElementById("inputDate").value = dateString;
document.getElementById("inputDate").min = dateString;

//*********************      Час        ******************************************** */

// function validateTime() {
//     var inputTime = document.getElementById('inputTime');
//     var minTime = '08:00';
//     var maxTime = '17:00';

//     // Приводим значения к стандартному формату времени
//     var inputTimeValue = inputTime.value.substring(0, 5);

//     if (inputTimeValue < minTime) {
//         inputTime.value = minTime;
//     } else if (inputTimeValue > maxTime) {
//         inputTime.value = maxTime;
//     }
// }


//*********************      Оплата       ******************************************** */

let crCardButton = document.querySelector('.crCard-button');
let cashButton = document.querySelector('.cash-button');

crCardButton.onclick = function () {
    crCardButton.classList.add('active');
    cashButton.classList.remove('active');
};

cashButton.onclick = function () {
    cashButton.classList.add('active');
    crCardButton.classList.remove('active');
};


//*********************      Додаткові послуги       ******************************************** */

let addServices = document.querySelectorAll('.add-service');

let calcDisp = document.querySelector('.calc-additional');

let addPrice = 0;



for (let i of addServices) {
    i.onchange = function () {
        if (i.checked) {
            calcDisp.innerHTML += '<div class="new-add flex justify-between"><div>'
                + i.parentElement.innerText.slice(0, i.parentElement.innerText.indexOf(' -')) +
                '</div><div><b>'
                + i.parentElement.innerText.slice(i.parentElement.innerText.indexOf(' -') + 3) +
                '</b></div></div>';

            totalPrice += parseFloat(i.value);
            PrintInput();
        }
        else {
            calcDisp.innerHTML = calcDisp.innerHTML.replace('<div class="new-add flex justify-between"><div>'
                + i.parentElement.innerText.slice(0, i.parentElement.innerText.indexOf(' -')) +
                '</div><div><b>'
                + i.parentElement.innerText.slice(i.parentElement.innerText.indexOf(' -') + 3) +
                '</b></div></div>', "");

            totalPrice -= parseFloat(i.value);
            PrintInput();
        }

    }
}


//*********************      Калькуляція       ******************************************** */

let totalPrice = 0;
let totalResult = document.querySelector('.total-result');





























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




