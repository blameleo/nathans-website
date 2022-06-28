/* Open */
const hamburger = document.getElementById('hamburger')
const navul = document.getElementById('list-items') 

hamburger.addEventListener('click', () => {
  navul.classList.toggle('show')
})