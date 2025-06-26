console.log("Wedding page loaded");
const userLang = navigator.language.slice(0, 2);
console.log(userLang);

langEn = document.querySelectorAll("[data-lang='en']");
langDe = document.querySelectorAll("[data-lang='de']");
console.log(langEn);
console.log(langDe);

function setContentLanguage(params) {
    if (userLang == "en") {
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