let inputs = document.getElementsByClassName("forminput");
let textarea = document.getElementsByClassName("formTextarea");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function () {
    if (this.value.length >= 1) {
      this.nextElementSibling.classList.add("fijar");
    } else {
      this.nextElementSibling.classList.remove("fijar");
    }
  });
}
if(textarea.value.length >= 1){
  
}
