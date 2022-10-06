
let buttonsUl = document.querySelector('.genreButtonUl')

function renderButtons(){
    categories.forEach((element) => {
        let idByIndex = categories.indexOf(element)

        let liGenreButton = document.createElement('li')
            liGenreButton.classList.add('genreButton')
            liGenreButton.id=`${idByIndex}`
            liGenreButton.innerHTML = `${element}`

            buttonsUl.append(liGenreButton)
    })
}
renderButtons()