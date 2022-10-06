
let darkButton = document.querySelector('.darkModeButton')
let body = document.querySelector('body')
let nav = document.querySelector('nav')
let h1 = document.querySelector('h1')
let logoDiv = document.querySelector('div')
let buttons = document.querySelectorAll('button')

darkButton.addEventListener('click', ()=>{
    body.classList.toggle('darkMode')
    nav.classList.toggle('darkMode')
    h1.classList.toggle('darkMode')
    logoDiv.classList.toggle('darkMode')
    buttons.classList.toggle('darkMode')
})
