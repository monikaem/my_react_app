import {combineReducers} from "redux";
import FormReducer from "./FormReducer";
import CalculatorReducer from "./CalculatorReducer";

const allReducers = combineReducers({
    form: FormReducer,
    calculator: CalculatorReducer,
})

export default allReducers;