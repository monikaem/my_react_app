import React, {useContext} from 'react';
import {ProductsContext} from "../ProductsContext";
import '../styles/ProductsPage.css';
import ProductInOffert from '../components/ProductInOffert';
import ProductInBasket from "../components/ProductInBasket";


const ProductsPage = () => {
    const { products } = useContext(ProductsContext)

    const productsListOffert = products.map(product => {
        return <ProductInOffert key={product.id} product={product}/>
    })

    const productsListinBasket = products.map(product => {
        if (product.inBasket) {
            return <ProductInBasket key={product.id} product={product}/>
        }
    })



    return (
        <div className="productsContainer">
            <div className="offert">
                <h2>Nasza oferta:</h2>
            <ul>
                {productsListOffert}
            </ul>
            </div>
            <div className="inBasket">
                <ul>
                    <h2>Koszyk:</h2>
                    {productsListinBasket}
                </ul>
            </div>
        </div>
    )
}

export default ProductsPage;