import { combineReducers } from "redux";
import cartCounterReducer from "./cartCounter";
import cartProductsReducer from "./cartProduct";

const rootReducer = combineReducers({
    count: cartCounterReducer,
    cart: cartProductsReducer,
});

export default rootReducer;