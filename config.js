

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = checkApiKey();

function checkApiKey() {
    if(!localSrorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "self");
    }
    return localStorage.getItem("apiKey");
}