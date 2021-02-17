import { createStore, applyMiddleware } from "redux";
import allReducers from "./allReducers";
import {validateForm} from "./validateForm";


const store = createStore(allReducers, applyMiddleware(validateForm));


export default store;