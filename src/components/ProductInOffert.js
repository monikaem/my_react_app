import React, {useContext} from "react";
import {ProductsContext} from "../ProductsContext";



const ProductInOffert = () => {

    const { products, addToBasket } = useContext(ProductsContext)


    const productsListOffert = products.map(product => {
        return <li style={{fontWeight: "bold"}} key={product.id}>{product.name}, <span>cena: {product.price} PLN</span>
            <button onClick={() => addToBasket(product.id)}>Kupuję!</button>
        </li>
    })

    return (
        <>
        {productsListOffert}
        </>
    )
};


export default ProductInOffert;