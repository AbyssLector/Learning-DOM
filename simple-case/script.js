const button = document.querySelector(".btn");
let i = 0;
button.addEventListener('click', function () {
    if (i % 2 == 0) {
        const body = document.querySelector('body');
        body.style.backgroundColor = "orange";
    }
    else {
        const body = document.querySelector('body');
        body.removeAttribute('style');
    }
    i++;
});
const btn = document.createElement('button');
const text = document.createTextNode('2nd btn');
btn.appendChild(text);
const container = document.querySelector('.container');
container.appendChild(btn);
btn.setAttribute('type', 'button');

btn.addEventListener('click', function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const body = document.querySelector('body');
    body.style.backgroundColor = randomColor;
});

r = 255;
g = 255;
b = 255;
const sRed = document.querySelector('input[name=red]');
sRed.addEventListener('input', function () {
    r = sRed.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
const sGreen = document.querySelector('input[name=green]');
sGreen.addEventListener('input', function () {
    g = sGreen.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
const sBlue = document.querySelector('input[name=blue]');
sBlue.addEventListener('input', function () {
    b = sBlue.value;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});