
const toggle = document.getElementById('nav-toggle')
const navLinks = document.querySelectorAll('.navlist')

toggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');

})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

