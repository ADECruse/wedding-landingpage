console.log("Wedding page loaded");
// const browserLang = navigator.language.slice(0, 2);
// console.log(browserLang);

// langEn = document.querySelectorAll("[data-lang='en']");
// langDe = document.querySelectorAll("[data-lang='de']");
// console.log(langEn);
// console.log(langDe);

// function setContentLanguage(lang) {
//     if (browserLang == "en" || lang == "en") {
//         langDe.forEach(element => {
//             element.style.display = "none";
//         });
//     } else if (lang == "de") {
//         langEn.forEach(element => {
//             element.style.display = "none";
//         })
//     }
// }

// setContentLanguage();

function setLanguage(lang) {
    localStorage.setItem('lang_selected', lang);
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = (el.getAttribute('data-lang') === lang) ? 'block' : 'none';
    });
}

// Detect browser language or use saved preference
const storedLang = localStorage.getItem('lang_selected');
const browserLang = navigator.language || navigator.userLanguage;
const defaultLang = storedLang || (browserLang.startsWith('de') ? 'de' : 'en');
setLanguage(defaultLang);