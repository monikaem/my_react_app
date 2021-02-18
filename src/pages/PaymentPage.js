import React, {useContext} from 'react';
import {Redirect, Route} from "react-router";
import {ProductsContext} from "../ProductsContext";
import blikIMG from '../blik.png';
import '../styles/PaymentPage.css';


const PaymentPage = () => {

    const { products } = useContext(ProductsContext);

    const orderSummary = () => {
        const productsInBasket = products.filter(product => product.inBasket);
        return productsInBasket.reduce((accumulator, product) => accumulator + (product.price * product.orderedAmount), 0);
    }

    const { permission, changePermission } = useContext(ProductsContext);
    const handleClick = () => {
        setTimeout(changePermission, 1000);
    }

    return (
        <div className="payment">
            <h4>Podaj kod BLIK</h4>
            <input type="text"/>
            <br/>
            <h5>Wartość zamówienia: {orderSummary()} PLN</h5>
            <img src={blikIMG}/>
            <br/>
            <button>Potwierdź płatność</button>
            <br/>
            <button onClick={handleClick}>Wróć do strony z podsumowaniem zamówienia</button>
            <Route render={() => permission ? null : <Redirect to="/products"/>}/>
        </div>
    )
}

export default PaymentPage;