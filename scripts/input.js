
let priceInput = document.querySelector('.priceInput')

let arrPrices = products.map((product)=>{
    return product.price
})
console.log(arrPrices)
let maxPrice = arrPrices.reduce((a,b)=>{
    return Math.max(a, b)
})
console.log(maxPrice)


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

function filterByInput(){
    
}
})