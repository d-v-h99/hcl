const btnPopup = document.getElementById("btn-popup");
const popup = document.getElementById("popup");
const logo = document.getElementById("logo");
const form = document.getElementById('form-confirm');
const form1 = document.getElementById('form-1');
const form2 = document.getElementById('form-2');
const rad1 = document.getElementById('radio1');
const rad2 = document.getElementById('radio2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const main = document.getElementById('main-content');
let isShowForm = false;

logo.addEventListener('click', function (e) {
    form.style.display = 'none'
    main.style.display = 'flex';
    isShowForm = false;
})
btnPopup.addEventListener('click', function (e) {
    if (isShowForm) {
        form.style.display = 'none'
        main.style.display = 'flex';
    } else {
        form.style.display = 'flex'
        form1.style.display = 'inline';
        form2.style.display = 'none';
        main.style.display = 'none';
    }
    isShowForm = !isShowForm

})

btn1.addEventListener('click', function (e) {
    popup.style.display = "flex";
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
})

btn2.addEventListener('click', function (e) {
    popup.style.display = "flex";
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
})

rad2.addEventListener("click", function (e) {
    form1.style.display = "none";
    form2.style.display = "inline";
    rad1.checked = true;
})