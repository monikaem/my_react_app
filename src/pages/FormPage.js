import React, {useState} from 'react';
import '../styles/FormPage.css';
import {submitForm} from "../FormReducer";
import {useDispatch} from "react-redux";
import {Prompt} from "react-router-dom";


const FormPage = ({name = '', last='', age = 16, mail = '', phone = '', isSubmitted = false}) => {
    const [nameInput, setNameInput] = useState(name);
    const [lastInput, setLastInput] = useState(last);
    const [ageInput, setAgeInput] = useState(age);
    const [mailInput, setMailInput] = useState(mail);
    const [phoneInput, setPhoneInput] = useState(phone);
    const [isFormSubmitted, setIsFormSubmitted] = useState(isSubmitted);



    const handleNameChange = (e) => setNameInput(e.target.value);
    const handleLastChange = (e) => setLastInput(e.target.value);
    const handleAgeChange = (e) => setAgeInput(e.target.value);
    const handleMailChange = (e) => setMailInput(e.target.value);
    const handlePhoneChange = (e) => setPhoneInput(e.target.value);



    const checkIsFormCorrect = () => {
        let name_correct = false;
        let last_correct = false;
        let mail_correct = false;
        let phone_correct = false;
        let correct_all = false;
        if (nameInput.length >= 3 && nameInput.indexOf(' ') === -1) {
            name_correct = true;
        }
        if (lastInput.length >= 3) {
            last_correct = true;
        }
        if (mailInput.indexOf('@') !== -1) {
            mail_correct = true;
        }
        if (phoneInput.length === 9) {
            phone_correct = true;
        }
        if (name_correct && last_correct && mail_correct && phone_correct) {
            correct_all = true;
        }
        return ({
            correct_all,
            name_correct,
            last_correct,
            mail_correct,
            phone_correct,
        })
    }
    let message = 'Dziękujęmy za zgłoszenie! Skontaktujemy się z Tobą wkrótce!';
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const validation = checkIsFormCorrect();
        if (validation.correct_all) {
           setIsFormSubmitted(true);
            const FormData = {
                name: nameInput,
                last: lastInput,
                age: ageInput,
                phone: phoneInput,
                mail: mailInput,
                isSubmitted: isFormSubmitted,
            }
            dispatch(submitForm(FormData));
            setIsFormSubmitted(true);
            setNameInput('');
            setLastInput('');
            setAgeInput(16);
            setMailInput('');
            setPhoneInput('');
            turnOffIsFormSubmitted();
        } else {
            alert('Nieprawidłowo wypełniony formularz!');
        }
    }

    const turnOffIsFormSubmitted = () => {
        setTimeout(() => setIsFormSubmitted(false), 3000);
    }

    const isFormFilled = () => {
       if (nameInput || lastInput || phoneInput || mailInput) {
           return true
       } else return false;
    }


    return (
        <form className="mainForm" onSubmit={handleSubmit} noValidate>
        <h3>Jesteś zainteresowany naszą ofertą? Zapisz się na kurs zdrowego żywienia!</h3>
            <h4>Jedyne co musisz zrobić, to uzupełnić formularz poniżej, a my skontaktujemy się z Tobą!</h4>
            <input className="nameInput" placeholder="Imię" type="text" value={nameInput} onChange={handleNameChange}/>
            <input placeholder="Nazwisko" type="text" value={lastInput} onChange={handleLastChange}/>
            <br/>
            <label>Ile masz lat?
            <input className="ageInput" placeholder="Ile masz lat?" type="number" value={ageInput} onChange={handleAgeChange} min="16" max="100"/>
            </label>
            <br/>
            <input className="mailInput" placeholder="Adres e-mail" type="email" value={mailInput} onChange={handleMailChange}/>
            <input placeholder="Nr telefonu" type="tel" value={phoneInput} onChange={handlePhoneChange}/>
            <br/>
            <button type="submit">Wyślij</button>
            {isFormSubmitted ? <h5>{message}</h5> : null}
            <Prompt when={isFormFilled()} message='Czy na pewno chcesz zakończyć uzupełnianie formularza?'/>
        </form>
    )
}

export default FormPage;