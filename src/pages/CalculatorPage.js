import React, {useState} from 'react';
import '../styles/CalculatorPage.css'
import InformationBMIRange from '../components/InformationBMIRange'
import {useDispatch} from "react-redux";
import {countBMI} from "../CalculatorReducer";

const CalculatorPage = ({isWoman = true, isMan = false, personWeight = 50, personHeight = 170, BMIresult}) => {
    const [womanChecked, setWomanChecked] = useState(isWoman);
    const [manChecked, setManChecked] = useState(isMan);
    const [mass, setMass] = useState(personWeight);
    const [height, setHeight] = useState(personHeight);
    const [result, setResult] = useState(BMIresult);


    const handleWomanChecked = (e) => setWomanChecked(e.target.checked);
    const handleManChecked = (e) => setManChecked(e.target.checked);
    const handleMassChange = (e) => setMass(e.target.value);
    const handleHeightChange = (e) => setHeight(e.target.value);

    const dispatch = useDispatch();

    const handleCount = () => {
        const countedResult = Number(mass/Math.pow((height/100), 2)).toFixed(2);
        setResult(countedResult);
        const personInfoObject = {
            isWoman: womanChecked,
            isMan: manChecked,
            personWeight: mass,
            personHeight: height,
            BMIresult: result,
        }
        dispatch(countBMI(personInfoObject));
        console.log(personInfoObject.BMIresult)
    }

    const isBMICorrectOrNot = (bmi) => {
        let message = '';
        if (bmi < 16) {
           message = 'wygłodzenie';
        } else if (bmi >= 16 && bmi < 16.99) {
            message = 'wychudzenie';
        } else if (bmi >= 17 && bmi < 18.49) {
            message = 'niedowaga';
        } else if (bmi >= 18.5 && bmi < 24.99) {
            message = 'wartość prawidłowa'
        } else if (bmi >= 25 && bmi < 29.99) {
            message = 'nadwaga';
        } else if (bmi >= 30 && bmi < 34.99) {
            message = 'I stopień otyłości'
        } else if (bmi >= 35 && bmi < 39.99) {
            message = 'II stopień otyłości';
        } else if (bmi > 40 ) {
            message = 'otyłość skrajna'
        }
        if (message === 'wartość prawidłowa') {
            return <h3 style={{color: 'green'}}>{message}</h3>
        } else {
            return <h3 style={{color: 'red'}}>{message}</h3>
        }
    }

    return (
        <div className="calculator">
            <h2>Sprawdź swoje BMI!</h2>
            <label>Płeć:
                <input id="K" type="radio" checked={womanChecked} name="sex" onChange={handleWomanChecked}/>
                <label htmlFor="K">Kobieta</label>
                <input id="M" type="radio" checked={manChecked} name="sex" onChange={handleManChecked}/>
                <label htmlFor="M">Mężczyzna</label>
            </label>
            <br/>
            <label>Waga:
            <input type="number" value={mass} onChange={handleMassChange}/>
            kg
            </label>
            <br/>
            <label>Wzrost:
                <input type="number" value={height} onChange={handleHeightChange}/>
                cm
            </label>
            <br/>
            <button onClick={handleCount}>Oblicz</button>
            <br/>
            <h2>{result}</h2>
            {isBMICorrectOrNot(result)}
            <br/>
            <InformationBMIRange/>
        </div>
    )
}

export default CalculatorPage;