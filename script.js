let placar = document.querySelector(".placar")
let playerP = document.querySelector('#player').innerHTML

//localStorage.setItem("player 1", playerP)
//localStorage.setItem("pontos", placar)

let score = 0 
let gameOver = false

document.addEventListener('DOMContentLoaded', () => {

  const music = new Audio
  music.src = 'audio/stage.mp3'
  music.play()

  const Yoshi = document.querySelector('.Yoshi');

  const Pipe = document.querySelector('.Pipe');

  const jump = () => {
    if (!Yoshi.classList.contains('jump') && loop) {
      Yoshi.classList.add('jump');
      setTimeout(() => {
        Yoshi.classList.remove('jump');  
      }, 500);
    }
    
  };

    const loop = setInterval(() => {

      const gameover = document.querySelector('.gameover')

      const pipePosition = Pipe.offsetLeft;

      const YoshiPosition = +window.getComputedStyle(Yoshi).bottom.replace('px', '');

      if (pipePosition <= 110 && pipePosition > 0 && YoshiPosition < 100 ) {

        const gamelost = new Audio
        gamelost.src = 'audio/GameOver.mp3'
        music.pause()
        gamelost.play()

        Pipe.style.animation = 'none';
        Pipe.style.left = `${pipePosition}px`;

        Yoshi.style.animation = 'none';
        Yoshi.style.bottom = `${YoshiPosition}px`;

        Yoshi.src ='./Image/DorklyYoshiIdleAnim.gif';
        Yoshi.style.width = '95px';

        gameover.style.display = 'flex'
        gameOver = true

        

        clearInterval(loop);
      }
    }, 10)
  
    document.addEventListener('keydown', (event) => {
      if (event.key === ' ' || event.key === 'Spacebar') {
        jump();
        const pipePosition = Pipe.offsetLeft;
        if(gameOver === false && pipePosition <= 300){
          pontos(placar)
        }
      }
    });
  });

function pontos(/*placar*/){
    score = score + 1
    document.querySelector(".placar").innerHTML = `Placar: ${score}`
    //placar.innerHTML = `Placar: ${score}`
}

var btn = document.querySelector("#botao"); btn.addEventListener("click", function() { 
  location.reload(); 
});  
  
  