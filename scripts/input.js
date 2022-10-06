
let priceInput = document.querySelector('.priceInput')

let arrPrices = products.map((product)=>{
    return product.price
})

let maxPrice = arrPrices.reduce((a,b)=>{
    return Math.max(a, b)
})



let rangeInput = document.createElement('input')
    rangeInput.type = 'range'
    rangeInput.name = 'priceRange'
    rangeInput.id = 'priceRange'
    rangeInput.min = 0
    rangeInput.max = maxPrice

priceInput.append(rangeInput)

rangeInput.addEventListener('mousemove', ()=>{
    let priceMax = document.querySelector('.priceMax')
        priceMax.innerHTML = `Até R$ ${rangeInput.value},00`

//------------------------------------------
let itens = document.querySelectorAll('.albumCard')

let liArr = Array.from(itens)

liArr.forEach((li)=>{
    let liChildArr = Array.from(li.children)
    let albumMain = liChildArr[1]
    let buySection = albumMain.children[2]
    let priceDiv = buySection.children[0]
    let paragPrice = priceDiv.children[0]
    let priceStr = paragPrice.innerHTML
    let price = parseInt(priceStr.split('').splice(3, 2).join(''))
    
    if(rangeInput.value < price){
        li.classList.add('hidden')
    }else{
        li.classList.remove('hidden')
    }
})
})

