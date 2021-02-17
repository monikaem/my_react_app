import {SUBMIT} from "./FormReducer";

export const validateForm = store => next => action => {
    console.log(action);
    if (action.type === SUBMIT && !action.payload.name.length) {
        alert('Musisz podać imię')
        return;
    }
    next(action);
}