
let ulCards = document.querySelector('.ulCards')

function renderCards(){

products.forEach((product)=>{
    let title = product.title
    let img = product.img
    let category = product.category
    let price = product.price
    let band = product.band
    let year = product.year
    let id = product.id


let cardLi = document.createElement('li')
    cardLi.classList.add('albumCard')

    let albumImgDiv = document.createElement('div')
        albumImgDiv.classList.add('albumImg')

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

//APPENDS
buttonDiv.append(buyButton)
priceDiv.append(pPrice)
buySection.append(priceDiv, buttonDiv)

albumInfosDiv.append(pAlbName)

creatorInfosDiv.append(pName, pDate)

albumMain.append(creatorInfosDiv, albumInfosDiv, buySection)

albumImgDiv.append(cardImg)

cardLi.append(albumImgDiv, albumMain)

ulCards.append(cardLi)

})

}
renderCards()