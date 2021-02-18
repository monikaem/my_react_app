import React, {useContext, useRef} from 'react';
import {Redirect, Route} from "react-router";
import {AppContext} from "../AppContext";
import blikIMG from '../blik.png';
import '../styles/PaymentPage.css';


const PaymentPage = () => {

    const { products, paymentInput, handleChangePaymentInput, setPaymentInput } = useContext(AppContext);

    const orderSummary = () => {
        const productsInBasket = products.filter(product => product.inBasket);
        return productsInBasket.reduce((accumulator, product) => accumulator + (product.price * product.orderedAmount), 0);
    }

    const { permission, changePermission } = useContext(AppContext);
    const handleClick = () => {
        setTimeout(changePermission, 1000);
    }
    const h5Element = useRef();
    const handlePaymentConfirmation = () => {
        if (paymentInput.length === 5) {
            h5Element.current.style.color = 'black';
            h5Element.current.textContent = 'Płatność została przyjęta. Dziękujemy!'
        } else {
            h5Element.current.style.color = 'red';
            h5Element.current.textContent = 'Kod BLIK powinien mieć 5 cyfr. Spróbuj ponownie!!'
        }
        setPaymentInput('');
    }


    return (
        <div className="payment">
            <h4>Podaj kod BLIK</h4>
            <input value={paymentInput} onChange={handleChangePaymentInput} type="text"/>
            <br/>
            <h5>Wartość zamówienia: {orderSummary()} PLN</h5>
            <img src={blikIMG}/>
            <br/>
            <button onClick={handlePaymentConfirmation}>Potwierdź płatność</button><h5 ref={h5Element}></h5>
            <br/>
            <button onClick={handleClick}>Wróć do strony z podsumowaniem zamówienia</button>
            <Route render={() => permission ? null : <Redirect to="/products"/>}/>
        </div>
    )
}

export default PaymentPage;