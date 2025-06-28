console.log("Wedding page loaded");
const browserLang = navigator.language.slice(0, 2);
console.log(browserLang);

langEn = document.querySelectorAll("[data-lang='en']");
langDe = document.querySelectorAll("[data-lang='de']");
console.log(langEn);
console.log(langDe);

function setContentLanguage(params) {
    if (browserLang == "en") {
        langDe.forEach(element => {
            element.style.display = "none";
        });
    } else {
        langEn.forEach(element => {
            element.style.display = "none";
        })
    }
}

setContentLanguage();