export function addProduct(product) {
  return {
    type: 'PRODUCT_ADDED',
    payload: product
  };
}
