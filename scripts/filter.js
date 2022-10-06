


function filter(){

    let button = document.querySelectorAll('.genreButton')

    let buttons = Array.from(button)
    
    buttons.forEach((button)=>{
        let onButtonsArrId = buttons.indexOf(button)
        let categoriesId = categories.forEach((category)=>{
            return categories.indexOf(category)
        })

button.addEventListener('click', ()=>{

    let cardsSection = document.querySelector('.productsCards')

    let ulCardsOld = document.querySelector('.ulCards')
        ulCardsOld.remove()

    let newUlCards = document.createElement('ul')
        newUlCards.classList.add('ulCards')
        cardsSection.append(newUlCards)

//FILTERED CARDS RENDER
products.forEach((product)=>{

    let title = product.title
    let img = product.img
    let category = product.category
    let price = product.price
    let band = product.band
    let year = product.year
    let id = product.id
if(onButtonsArrId == 0){

    let cardLi = document.createElement('li')
    cardLi.classList.add('albumCard')

    let imgDiv = document.createElement('div')
        imgDiv.classList.add('albumImg')

        let cardImg = document.createElement('img')
            cardImg.src = img
            cardImg.alt = title

    let albumMain = document.createElement('main')
        albumMain.classList.add('albumMain')

        let creatorInfosDiv = document.createElement('div')
            creatorInfosDiv.classList.add('creatorInfos')

            let pName = document.createElement('p')
                pName.classList.add('creatorName')
                pName.innerText = band
            
            let pDate = document.createElement('p')
                pDate.classList.add('releaseDate')
                pDate.innerText = year

        let albumInfosDiv = document.createElement('div')
            albumInfosDiv.classList.add('albumInfos')

            let pAlbName = document.createElement('p')
                pAlbName.classList.add('albumName')
                pAlbName.innerText = title

        let buySection = document.createElement('section')
            buySection.classList.add('buySection')
    
                let priceDiv = document.createElement('div')
                    priceDiv.classList.add('albumPriceDiv')
    
                    let pPrice = document.createElement('p')
                        pPrice.classList.add('albumPrice')
                        pPrice.innerHTML = `R$ ${price},00`
    
                let buttonDiv = document.createElement('div')
                    buttonDiv.classList.add('buyButton')
    
                    let buyButton = document.createElement('button')
                        buyButton.type = 'submit'
                        buyButton.innerText = 'Comprar'

//APENDS
buttonDiv.append(buyButton)
priceDiv.append(pPrice)
buySection.append(priceDiv, buttonDiv)

albumInfosDiv.append(pAlbName)
    
creatorInfosDiv.append(pName, pDate)

albumMain.append(creatorInfosDiv, albumInfosDiv, buySection)

imgDiv.append(cardImg)

cardLi.append(imgDiv, albumMain)

newUlCards.append(cardLi)    

}
if(onButtonsArrId == category){


let cardLi = document.createElement('li')
    cardLi.classList.add('albumCard')

    let imgDiv = document.createElement('div')
        imgDiv.classList.add('albumImg')

        let cardImg = document.createElement('img')
            cardImg.src = img
            cardImg.alt = title

    let albumMain = document.createElement('main')
        albumMain.classList.add('albumMain')

        let creatorInfosDiv = document.createElement('div')
            creatorInfosDiv.classList.add('creatorInfos')

            let pName = document.createElement('p')
                pName.classList.add('creatorName')
                pName.innerText = band
            
            let pDate = document.createElement('p')
                pDate.classList.add('releaseDate')
                pDate.innerText = year

        let albumInfosDiv = document.createElement('div')
            albumInfosDiv.classList.add('albumInfos')

            let pAlbName = document.createElement('p')
                pAlbName.classList.add('albumName')
                pAlbName.innerText = title

        let buySection = document.createElement('section')
            buySection.classList.add('buySection')
    
                let priceDiv = document.createElement('div')
                    priceDiv.classList.add('albumPriceDiv')
    
                    let pPrice = document.createElement('p')
                        pPrice.classList.add('albumPrice')
                        pPrice.innerHTML = `R$ ${price},00`
    
                let buttonDiv = document.createElement('div')
                    buttonDiv.classList.add('buyButton')
    
                    let buyButton = document.createElement('button')
                        buyButton.type = 'submit'
                        buyButton.innerText = 'Comprar'

//APENDS
buttonDiv.append(buyButton)
priceDiv.append(pPrice)
buySection.append(priceDiv, buttonDiv)

albumInfosDiv.append(pAlbName)
    
creatorInfosDiv.append(pName, pDate)

albumMain.append(creatorInfosDiv, albumInfosDiv, buySection)

imgDiv.append(cardImg)

cardLi.append(imgDiv, albumMain)

newUlCards.append(cardLi)



}
})



})

    })

}

filter()