function myScrollTo(id) {
    var topmenu = document.getElementById("mainnav");
    var el = document.getElementById(id);
    if (el) {
        window.scrollTo({
            top: el.offsetTop - mainnav.scrollHeight,
            behavior: 'smooth'
        });
    }
    return false;
}

function toggleHamburguer() {
    const nav = document.getElementById("mainnav");
    nav.classList.toggle("active");
}
