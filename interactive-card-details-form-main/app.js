document.getElementById("confirm").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission

  var inputs = document.getElementsByClassName("input");
  var errorMsg = document.getElementsByClassName("error");
  var successMsg = document.getElementsByClassName("success")[0];

  // Clear all error messages
  for (var i = 0; i < errorMsg.length; i++) {
    errorMsg[i].style.display = "none";
  }

  var isError = false;

  // Check if any input is empty
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      errorMsg[i].style.display = "block";
      isError = true;
    }
  }

  if (isError) {
    successMsg.style.display = "none";
  } else {
    successMsg.style.display = "block";
  }
});
