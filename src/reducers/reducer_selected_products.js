const initialSelectedState = {
  arr: []
}

export default function (state = initialSelectedState, action) {
  console.log(initialSelectedState.arr)
  console.log(action.payload)
  switch(action.type) {
    case 'ADD_PRODUCT' :
    console.log(state.arr)
      return {
        arr: state.arr.concat(action.payload)
      };

      default: return state;
  }
}
