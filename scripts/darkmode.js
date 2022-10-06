
function darkMode(){
    const dmButton = document.querySelector('.darkModeButton')
    const dmIcon = document.querySelector('.dmIcon')
    const html = document.querySelector('html')

    dmButton.addEventListener('click', ()=>{
        html.classList.toggle('darkMode')

        let dmPref = localStorage.getItem('darkmode')
        if(!dmPref){
            localStorage.setItem('darkmode', true)
        }else{
            localStorage.removeItem('darkmode')
        }

        if(html.classList.contains('darkMode')){
            dmIcon.src = "/assets/img/sun.svg"
        }else{
            dmIcon.src = "/assets/img/moon.svg"
        }
    })
}
darkMode()

const dmPref = localStorage.getItem('darkmode')
const dmIcon = document.querySelector('.dmIcon')

if(dmPref){
    const html = document.querySelector('html')
    html.classList.add('darkMode')
    dmIcon.src = "/assets/img/sun.svg"
}