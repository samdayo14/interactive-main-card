// UI Elements
const textInput = document.querySelector("#text");
const textNumber = document.querySelector("#number");
const textMonth = document.querySelector("#month");
const textCvc = document.querySelector("#cvc");
const confirmBtn = document.querySelector("#confirm");
const errorMsg = document.querySelector(".error");
const sucMsg = document.querySelector(".success");
const input = document.querySelectorAll(".input");

// load all Events listeneres
loadEventListeners();

function loadEventListeners() {
  // submit event
  confirmBtn.addEventListener("click", submit);
}

function submit(e) {
  // textInput
  if (textInput.value === "") {
    errorMsg.style.display = "block";
    textInput.style.border = "1px #FF0000 solid";
  } else {
    errorMsg.style.display = "none";
    textInput.style.border = " 1px #c0c0c0 solid";
  }

  if (textNumber.value === "") {
    errorMsg.style.display = "block";
    textNumber.style.border = "1px #FF0000 solid";
  } else {
    errorMsg.style.display = "none";
    textNumber.style.border = " 1px #c0c0c0 solid";
  }

  if (textMonth.value === "") {
    errorMsg.style.display = "block";
    textMonth.style.border = "1px #FF0000 solid";
  } else {
    errorMsg.style.display = "none";
    textInput.style.border = " 1px #c0c0c0 solid";
  }

  if (textCvc.value === "") {
    errorMsg.style.display = "block";
    textCvc.style.border = "1px #FF0000 solid";
  } else {
    errorMsg.style.display = "none";
    textCvc.style.border = " 1px #c0c0c0 solid";
  }

  //   if (confirmBtn == "submit") {
  //     sucMsg.style.display = "block";
  //   }

  e.preventDefault();
}
