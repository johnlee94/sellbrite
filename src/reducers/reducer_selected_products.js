import { addProduct } from '../actions/add_product';

const initialSelectedState = {
  arr: []
}

export default function (state = initialSelectedState, action) {
  switch(action.type) {
    case 'PRODUCT_ADDED':
      return {
        ...state,
        arr: [...state.arr, action.product]
      };

  }
  return state;
}
