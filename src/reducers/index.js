import { combineReducers } from 'redux';
import ProductsReducers from './reducer_products';
import SelectedProducts from './reducer_selected_products';

const rootReducer = combineReducers({
  products: ProductsReducers,
  selectedProducts: SelectedProducts
});

export default rootReducer;
