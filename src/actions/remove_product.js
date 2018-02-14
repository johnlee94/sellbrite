export function removeProduct(product) {
  console.log(product)
  return {
    type: 'REMOVE_PRODUCT',
    payload: product
  };
}
