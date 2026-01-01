//Back to Top Logic 
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    // Check scroll position
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    if (scrollPos > 350) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});


//Back to Top Logic to show gracefully
window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});



//To stop page scroll behind hamburger 
const toggle = document.getElementById('menu-toggle');
toggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.overflow = 'hidden'; // Stop background scroll
    } else {
        document.body.style.overflow = 'auto';   // Restore scroll
    }
});