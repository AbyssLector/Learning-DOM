function computer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function hasil(comp, player) {
    if (player == comp)
        return 'SERI!';
    if (player == 'gajah')
        return (comp == 'orang') ? 'Menang!' : 'Kalah!';
    if (player == 'orang')
        return (comp == 'gajah') ? 'Kalah!' : 'Menang!';
    if (player == 'semut')
        return (comp == 'orang') ? 'Kalah!' : 'Menang!';
}

function putar() {
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'orang', 'semut'];
    let i = 0;
    const start = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - start > 1000) {
            clearInterval;
            return;
        }
        imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i >= gambar.length) i = 0;
    }, 100);
}

const info = document.querySelector('.info');
const imgComp = document.querySelector('.img-komputer');
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (img) {
    img.addEventListener('click', function () {
        const comp = computer();

        const player = img.className;
        const res = hasil(comp, player);
        putar();
        setTimeout(function () {
            info.innerHTML = res;
            imgComp.setAttribute('src', 'img/' + comp + '.png');
        }, 1000);
        // console.log(img + ' ' + comp + ' ' + res);
    });
});

// const jempol = document.querySelector('.gajah');
// jempol.addEventListener('click', function () {
//     const comp = computer();

//     const player = jempol.className;
//     const res = hasil(comp, player);
//     console.log(player + ' ' + comp + ' ' + res);
//     info.innerHTML = res;

//     imgComp.setAttribute('src', 'img/' + comp + '.png');
// });