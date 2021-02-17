export const SUBMIT = 'SUBMIT';
export const submitForm = ({name, last, age, mail, phone, isSubmitted}) => {
    return {
        type: SUBMIT,
        payload: {
            name,
            last,
            age,
            mail,
            phone,
            isSubmitted,
        }
    }
}


const FormReducer = (state = [], action) => {
    switch (action.type) {
        case SUBMIT:
            return [...state, action.payload]

        default:
            console.warn('nie ma takiej akcji');
            return state;
    }
}


export default FormReducer;