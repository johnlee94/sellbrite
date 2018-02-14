export function addProduct(product) {
  console.log(product)
  return {
    type: 'ADD_PRODUCT',
    payload: product
  };
}
