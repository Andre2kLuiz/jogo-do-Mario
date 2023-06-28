
document.addEventListener('DOMContentLoaded', () => {
    const Yoshi = document.querySelector('.Yoshi');

    const Pipe = document.querySelector('.Pipe');
  
    const jump = () => {
      if (!Yoshi.classList.contains('jump')) {
        Yoshi.classList.add('jump');
        setTimeout(() => {
          Yoshi.classList.remove('jump');
        }, 500);
      }
    };

    const loop = setInterval(() => {

        const pipePosition = Pipe.offsetLeft;

        const YoshiPosition = +window.getComputedStyle(Yoshi).bottom.replace('px', '');

        if (pipePosition <= 110 && pipePosition > 0 && YoshiPosition < 95) {

            Pipe.style.animation = 'none';
            Pipe.style.left = `${pipePosition}px`;

            Yoshi.style.animation = 'none';
            Yoshi.style.bottom = `${YoshiPosition}px`;

            Yoshi.src ='./Image/DorklyYoshiIdleAnim.gif';
            Yoshi.style.width = '95px';

            clearInterval(loop);
        }

    }, 10)
  
    document.addEventListener('keydown', (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        jump();
      }
    });
  });