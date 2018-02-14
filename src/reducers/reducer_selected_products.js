const initialSelectedState = {
  contents: [],
  totalItems: 0
}

export default function (state = initialSelectedState, action) {
  console.log(initialSelectedState.contents)
  console.log(action.payload)
  switch(action.type) {
    case 'ADD_PRODUCT' :
    console.log(state.contents)
      return {
        contents: state.contents.concat(action.payload),
        totalItems: state.contents.length + 1
      };
    case 'REMOVE_PRODUCT' :
      return {
        contents: state.contents.filter(item => item !== action.payload),
        totalItems: state.contents.length + 1
      }

      default: return state;
  }
}
