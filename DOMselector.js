// // DOM Selection
// // document.getElementById()
// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Halo Dunia!';

// // document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// // document.getElementsByClassName

// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Diubah dengan js';

// // document.querySelector -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // document.querySelectorAll()
// const pAll = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     pAll[i].style.fontSize = '25px';
// }
// change root
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.color = 'magenta';

// element.setAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'mboh');

// element.classList.<> (add, remove, replace, toggle, )
// const p2 = document.querySelector('.p2');

// // Node Manipulation
// const newP = document.createElement('p');
// const text = document.createTextNode('Paragraf Baru');
// // store the text
// newP.appendChild(text);
// // store newP at the end of section#a
// // const secA = document.querySelector('#a');
// // secA.appendChild(newP);
// document.querySelector('#a').appendChild(newP);

// const newLi = document.createElement('li');
// const textLi = document.createTextNode('Li Baru');
// newLi.appendChild(textLi);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');
// ul.insertBefore(newLi, li2);


// // 
// const secA = document.querySelector('#a');
// const link = document.getElementsByTagName('a')[0];
// secA.removeChild(link);

// // replaceChild()

