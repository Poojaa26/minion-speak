var btnTranslate = document.querySelector("#btnTranslate");
var input = document.querySelector("#input");
var output = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructURL(text) {
    return serverURL + "?text=" + text;
}
function doFetch(text) {
    fetch( constructURL(text) )
    .then(response => response.json() )
    .then(json => output.innerText=json.contents.translated );
}
function translate() {

    doFetch(input.value);
    //output.innerText;
}

btnTranslate.addEventListener("click",translate);