const banner = document.getElementById('cookie-banner');
const accept = document.getElementById('accept');
const decline = document.getElementById('decline');

accept.addEventListener('click', function () {
    localStorage.setItem('consent', 'accept')
    banner.style.display = 'none';
});

decline.addEventListener('click', function () {
    localStorage.setItem('consent', 'decline')
    banner.style.display = 'none';
});

if (localStorage.getItem('consent')) {
    banner.style.display = 'none';
}