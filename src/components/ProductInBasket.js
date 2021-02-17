import React, {useContext} from "react";
import {ProductsContext} from "../ProductsContext";



const ProductInBasket = () => {

    const { products, removeFromBasket } = useContext(ProductsContext);

    const productsListInBasket = products.map(product => {
        if (product.inBasket) {
            return <li style={{fontWeight: "bold"}} key={product.id}>{product.name}, <span>cena: {product.price} PLN</span>
                <button onClick={() => removeFromBasket(product.id)}>Usuń</button></li>
        }
    })

    return (
        <>
            {productsListInBasket}
        </>
    )
}


export default ProductInBasket;