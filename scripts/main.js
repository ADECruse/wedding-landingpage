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
    
    // Update aria-hidden attributes for accessibility AND display for visual layout
    document.querySelectorAll('[data-lang]').forEach(el => {
        const isVisible = el.getAttribute('data-lang') === lang;
        el.setAttribute('aria-hidden', !isVisible);
        el.style.display = isVisible ? 'block' : 'none';
    });
    
    // Announce language change to screen readers
    const announcer = document.getElementById('language-announcer');
    if (announcer) {
        const message = lang === 'en' ? 'Language switched to English' : 'Sprache auf Deutsch gewechselt';
        announcer.textContent = message;
        
        // Clear the message after a short delay
        setTimeout(() => {
            announcer.textContent = '';
        }, 1000);
    }
    
    // Update document language attribute
    document.documentElement.lang = lang;
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