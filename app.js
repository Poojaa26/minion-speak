var btnTranslate = document.querySelector("#btnTranslate");
var input = document.querySelector("#input");
var output = document.querySelector("#output");

function errorHandler(error) {
    console.log("Error Occured! ",error);
    alert("Server Down! Try Again Later");
}

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructURL(text) {
    return serverURL + "?text=" + text;
}

function doFetch(text) {
    fetch( constructURL(text) )
    .then(response => response.json() )
    .then(json => output.innerText=json.contents.translated )
    .catch(errorHandler);
}

function translate() {
    doFetch(input.value);
}

btnTranslate.addEventListener("click",translate);