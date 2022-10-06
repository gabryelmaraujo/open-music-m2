
function darkMode(){
    const dmButton = document.querySelector('.darkModeButton')
    const dmIcon = document.querySelector('.dmIcon')
    const html = document.querySelector('html')

    dmButton.addEventListener('click', ()=>{
        html.classList.toggle('darkMode')

        if(html.classList.contains('darkMode')){
            dmIcon.src = "/assets/img/sun.svg"
        }else{
            dmIcon.src = "/assets/img/moon.svg"
        }
    })
}
darkMode()
