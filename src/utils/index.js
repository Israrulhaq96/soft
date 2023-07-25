import products from '../jsondata/productList.json'

export function getCategoryProducts(category){
    const array = products.filter(product => category.cat_id === product.cat_id);
    // console.log(category, array);
    return array;
}