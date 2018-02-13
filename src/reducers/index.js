import { combineReducers } from 'redux';
import ProductsReducers from './reducer_products';

const rootReducer = combineReducers({
  products: ProductsReducers
});

export default rootReducer;
