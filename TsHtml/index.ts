// const title = document.querySelector('#title') as Element; 별로 좋지 않음
const title = document.querySelector('#title');
const link = document.querySelector('.link');
const btn = document.querySelector('#button');
const img = document.querySelector('#image');
const links = document.querySelectorAll('.naver');

if (title !== null) {
    title.innerHTML = 'hello';
}

if (title instanceof Element) {
    title.innerHTML = '안녕하세요'
}

if (link instanceof HTMLAnchorElement){
    link.href = 'https://www.kakaocorp.com/page/';
}

btn?.addEventListener('click', () => {
    console.log('hello');
});

if (img instanceof HTMLImageElement){
    img.src = 'Teemo.png'
}

links.forEach(l => {
    if (l instanceof HTMLAnchorElement) l.href = 'https://www.kakaocorp.com/page/';
})