const initialSelectedState = {
  contents: []
}

export default function (state = initialSelectedState, action) {
  console.log(initialSelectedState.contents)
  console.log(action.payload)
  switch(action.type) {
    case 'ADD_PRODUCT' :
    console.log(state.contents)
      return {
        contents: state.contents.concat(action.payload)
      };

      default: return state;
  }
}
