// script.js
// Interactive JavaScript code for responsive web app

window.onload = function() {
    ensureResponsive();
};

function ensureResponsive() {
    const viewportWidth = window.innerWidth;
    const content = document.getElementById('content');

    if (viewportWidth < 600) {
        content.style.fontSize = '14px';
        content.style.padding = '10px';
    } else if (viewportWidth < 1200) {
        content.style.fontSize = '16px';
        content.style.padding = '20px';
    } else {
        content.style.fontSize = '18px';
        content.style.padding = '30px';
    }
}

window.onresize = ensureResponsive;