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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // trigger only once
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in-up').forEach((el) => {
    observer.observe(el);
});

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