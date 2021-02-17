export const COUNT = 'COUNT';
export const countBMI = ({isWoman, isMan, personWeight, personHeight, BMIresult}) => {
    return {
        type: COUNT,
        payload: {
            isWoman,
            isMan,
            personWeight,
            personHeight,
            BMIresult,
        }
    }
}


const CalculatorReducer = (state = [], action) => {
    switch (action.type) {
        case COUNT:
            return [...state, action.payload]

        default:
            console.warn('nie ma takiej akcji');
            return state;
    }
}


export default CalculatorReducer;