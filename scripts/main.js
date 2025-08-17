console.log("Wedding page loaded");

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

// Update copyright year automatically
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
}

// Call the function when the page loads
updateCopyrightYear();