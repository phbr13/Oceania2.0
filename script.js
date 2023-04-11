const sound = document.getElementById('sound-img')
const fundo = document.getElementById('fundo-img')
const audo = document.getElementById('audo')
const start = document.getElementById('start')
const jogar = document.getElementById('jogar')
const desaparecer = document.querySelector('.desaparecer')
const escurecer = document.querySelector('.escurecer')
let play = 0

sound.addEventListener('click', () => {
    if (sound.alt === 'sound') {
        sound.alt = 'no-sound'
        sound.src = 'imgs/no-sound.png'
        audo.pause()
    } else {
        sound.alt = 'sound'
        sound.src = 'imgs/sound.png'
        audo.play()
    }
})

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (play === 0) {
        if(evt.keyCode === 32) {
            start.play()
            play = 1
            jogar.style.animation = 'start 2s ease-in-out'
            jogar.style.opacity = 0
            sound.style.animation = 'desaparecer 2.1s ease-in-out'
            sound.style.opacity = 0
            fundo.style.animation = 'desaparecer 3s ease-in-out'
            fundo.style.opacity = 0
            desaparecer.style.animation = 'desaparecer 2.1s ease-in-out'
            desaparecer.style.opacity = 0
            escurecer.style.animation = 'escurecer 5s ease-in-out'
            escurecer.style.background = '#101010'
            async function cleberson() {
                for (let index = 0; index < 6; index++) {
                    await new Promise(resolve => {
                        audo.volume = audo.volume - 0.16
                        setTimeout(resolve, 1000)
                    })
                }
            }
            cleberson()
            setInterval(() => {
                document.location.href = 'pages/tabuleiro.html';
            }, 6000);
         }
    }
}