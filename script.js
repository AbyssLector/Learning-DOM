const p3 = document.querySelector('.p3');
function changeColor() {
    p3.style.backgroundColor = 'orange';
}

p3.setAttribute('onclick', 'changeColor()');

function changeColor2() {
    p2.style.backgroundColor = 'orange';
}

const p2 = document.querySelector('.p2');
p2.onclick = changeColor2;

const p4 = document.querySelector('.p4');
let i = 3;
p4.addEventListener('click', function () {
    i++;
    alert('ok');
    const newLi = document.createElement('li');
    const str = `item ${i}`;
    const newText = document.createTextNode(str);
    newLi.appendChild(newText);
    const secUl = document.querySelector('section#b ul');
    secUl.appendChild(newLi);
});