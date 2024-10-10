export async function getAllCatergoryFromAPI() {
    let url = 'https://dummyjson.com/products/categories';
    let resp = await fetch(url, { method: 'GET' });
    var data = await resp.json()
    return data;
}

export async function getAllProductsFromAPI() {
    let url = 'https://dummyjson.com/products';
    let resp = await fetch(url, { method: 'GET' });
    var data = await resp.json()
    return data;
}

export function getPriceAfterDiscount(price, disPercentage) {
    var p = price - price * (disPercentage / 100);
    return p.toFixed(2);
}

export function getTotalPriceOfCart(arrCart) {
    let price=0.00;
    for(let e of arrCart){
        price += getPriceAfterDiscount(
            e.product.price,
            e.product.discountPercentage
        )* e.quantity;
        
    }
    return price ;
}

export function limitToTwoDecimalPlaces(number) {
    return Math.round(number * 100) / 100;
}