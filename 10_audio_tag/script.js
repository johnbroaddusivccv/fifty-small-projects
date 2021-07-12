const sounds = [
  'sound-one',
  'sound-two',
  'sound-three',
  'sound-four',
  'sound-five',
  'sound-six',
]

sounds.forEach((sound) => {
  const btn = document.createElement('button')

  btn.classList.add('btn')

  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })

  btn.innerText = sound

  document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound)

    song.pause()
    song.currentTime = 0
  })
}
