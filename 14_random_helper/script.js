const toggles = document.querySelectorAll('.tag')
console.log(toggles)
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('highlight')
  })
})
