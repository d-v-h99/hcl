const btnPopup = document.getElementById("btn-popup");
// const popup = document.getElementById("popup");
// const btnClosePopup = document.getElementById('btn-close-popup');

// btnPopup.addEventListener('click', function (e) {
//     popup.style.display = "flex";
// });

// btnClosePopup.addEventListener('click', function (e) {
//     popup.style.display = "none";
// });

const form = document.getElementById('form-confirm');
const form1 = document.getElementById('form-1');
const main = document.getElementById('main-content');
let isShowForm = false;

btnPopup.addEventListener('click', function (e) {
    if (isShowForm) {
        form.style.display = 'none'
        main.style.display = 'flex';
    } else {
        form.style.display = 'flex'
        form1.style.display = 'flex';
        main.style.display = 'none';
    }
    isShowForm = !isShowForm

})