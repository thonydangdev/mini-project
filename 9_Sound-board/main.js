var audio = document.querySelector('#audio');
var listButtons = document.querySelectorAll('.sound-board .btn')
listButtons.forEach(button => {
    button.addEventListener('click', () => {
        const nameSound = button.innerText;
        audio.src = `./sound/sound-board_sounds_${nameSound}.mp3`
        audio.play()
    })
})