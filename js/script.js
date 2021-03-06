var button = document.querySelector(".searchform-open");
var popup = document.querySelector(".modal");

var dateIn = document.querySelector("[name=check-in-date]");
var dateOut = document.querySelector("[name=check-out-date]");
var adult = document.querySelector("[name=adult]");
var child = document.querySelector("[name=child]");
var form = popup.querySelector("form");

var isStorageSupport = true;
var storage = "";
try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }
popup.classList.add("modal-hidden");
button.addEventListener("click", function (evt) {
evt.preventDefault();
  console.log("клик");
  popup.classList.remove("modal-error");
  popup.classList.toggle("modal-hidden");
  if (storage) {
     adult.value = storage;
     child.value = storage;
   }
  dateIn.focus();
});

form.addEventListener("submit", function (evt) {
  if (!dateIn.value || !dateOut.value || !adult.value || !child.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно ввести информацию");
    } else { if (isStorageSupport) {
      localStorage.setItem("child", child.value);
      localStorage.setItem("adult", adult.value);}
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-hidden")) {
    } else {popup.classList.add("modal-hidden");
            popup.classList.remove("modal-error");}
  }
});
