const initialSelectedState = {
  SelectedProducts: []
}

export default function (state = initialSelectedState, action) {
  console.log(initialSelectedState.SelectedProducts)
  console.log(action.payload)
  console.log(state.SelectedProducts)
  switch(action.type) {
    case 'ADD_PRODUCT' :
      return {
        ...state,
        SelectedProducts: state.SelectedProducts.concat(action.payload)
      };

      default: return state;
  }
}
