import React, {useContext, useRef} from 'react';
import {ProductsContext} from "../ProductsContext";
import '../styles/ProductsPage.css';
import ProductInOffert from '../components/ProductInOffert';
import ProductInBasket from "../components/ProductInBasket";
import {Redirect, Route} from "react-router";


const ProductsPage = () => {
    const { products, permission, changePermission } = useContext(ProductsContext)


        const orderSummary = () => {
        const productsInBasket = products.filter(product => product.inBasket);
        return productsInBasket.reduce((accumulator, product) => accumulator + product.price, 0);
    }



    const h4Element = useRef();
    const handleClick = () => {
       if (orderSummary()) {
           h4Element.current.textContent = 'Za chwilę zostaniesz przekierowany na stronę z możliwością płatności...';
           setTimeout(changePermission, 2000);
       } else {
           alert('Twój koszyk jest pusty!')
       }
    }



    return (
        <div className="productsContainer">
            <div className="offert">
                <h2>Nasza oferta:</h2>
                <ul>
                    <ProductInOffert/>
                </ul>
            </div>
            <div className="inBasket">
                <ul className="basketList">
                    <h2>Koszyk:</h2>
                    <ProductInBasket/>
                </ul>
                <div className="paymentContainer">
                    <h3>Do zapłaty: <span className="amount">{orderSummary()} PLN</span></h3>
                    <button onClick={handleClick}>Opłać zamówienie</button>
                    <h4 ref={h4Element}></h4>
                    <Route render={() => permission && <Redirect to="/products/payment"/>}/>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage;