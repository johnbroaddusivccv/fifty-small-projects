// Puts elements into a node list
const panels = document.querySelectorAll('.panel')

// High order array method to loop through the nodelists
// Higher order array methods take in a function as an argument
panels.forEach((panel) => {
  // console.log(panel)
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
