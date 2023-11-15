function addToCart(){
    let {item, price} = collectUserInput();
    if (item.value && price.value){
    let {cart, newRow, newItem, newPrice} = createElement();
    newItem.innerText = item.value;
    newItem.setAttribute('class','item');
    newPrice.innerText = price.value;
    newPrice.setAttribute('class','price');
    newRow.appendChild(newItem);
    newRow.appendChild(newPrice);
    cart.appendChild(newRow);
    item.value = '';
    price.value = '';
    }


}
function createElement(){
    return{
        cart : document.getElementsByTagName('tbody')[0],
        newRow : document.createElement('tr'),
        newItem : document.createElement('td'),
        newPrice : document.createElement('td')
    }
}

function collectUserInput(){
    let item = document.getElementById('item');
    let price = document.getElementById('price');
    return{
        price,
        item
    }
}

function removeFromCart(){
    let items = document.getElementsByClassName('item');
    let prices = document.getElementsByClassName('price');
    const {item,price} = collectUserInput();
    if (item.value && price.value){
        const index = getInputIndex(items,prices,item,price);
        parent = items[index].parentElement;
        let tbody = document.getElementsByTagName('tbody')[0];
        tbody.removeChild(parent);
        item.value = '';
        price.value = '';
    }
    
}

function getInputIndex(items,prices,item,price){
    let itemIndex;
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.trim() === item.value) {
            itemIndex = i;
            break;
        }
    }
    let priceIndex;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i].textContent.trim() === price.value) {
            priceIndex = i;
            break;
        }
    }
    if(priceIndex === itemIndex) return priceIndex;
}
