var btnTranslate = document.querySelector("#btnTranslate");
var input = document.querySelector("#input");

function translate() {
    console.log(input.value);
}
btnTranslate.addEventListener("click",translate);