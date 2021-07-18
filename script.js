var inputText = document.querySelector("#txt-input")
var outputText = document.querySelector("#output")
var btnTranslate = document.querySelector("#btn-translate")


var serverURL = "https://api.funtranslations.com/translate/yoda.json?text="

function errorHandler(error) {
    console.log("error occured", error);
    alert("Server Takes Only 5 requests per hour so try again after sometime. Sorry :(")
}

btnTranslate.addEventListener("click",
function callback(){
    fetch(serverURL + inputText.value)
    .then(res => res.json())
    .then(json => outputText.innerText = json.contents.translated) 
    .catch(errorHandler)
})
