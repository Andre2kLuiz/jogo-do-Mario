
const Yoshi = document.querySelector('.Yoshi');

const jump = () => {

    Yoshi.classList.add('jump');

    setTimeout(() => {

        Yoshi.classList.remove('jump');

    }, 500);
}

document.body.addEventListener('keydown', jump);