// const title = document.querySelector('#title') as Element; 별로 좋지 않음
var title = document.querySelector('#title');
var link = document.querySelector('.link');
var btn = document.querySelector('#button');
var img = document.querySelector('#image');
var links = document.querySelectorAll('.naver');
if (title !== null) {
    title.innerHTML = 'hello';
}
if (title instanceof Element) {
    title.innerHTML = '안녕하세요';
}
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://www.kakaocorp.com/page/';
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    console.log('hello');
});
if (img instanceof HTMLImageElement) {
    img.src = 'Teemo.png';
}
links.forEach(function (l) {
    if (l instanceof HTMLAnchorElement)
        l.href = 'https://www.kakaocorp.com/page/';
});
