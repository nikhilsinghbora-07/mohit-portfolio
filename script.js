let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

const allVideos = document.querySelectorAll('video');
console.log("Total video found:", allVideos.length);

allVideos.forEach(video => {
    video.addEventListener('play', () => {
        allVideos.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});
var typed = new Typed('.auto-type', {
    strings: ['Video Editor'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});