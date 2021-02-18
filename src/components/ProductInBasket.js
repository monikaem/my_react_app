import React, {useContext} from "react";
import {AppContext} from "../AppContext";



const ProductInBasket = () => {

    const { products, removeFromBasket } = useContext(AppContext);

    const productsListInBasket = products.map(product => {
        if (product.inBasket) {
            return <li style={{fontWeight: "bold"}} key={product.id}>{product.name}, <span>cena: {product.price} PLN </span>
                <span style={{color: "#FF6F00", marginLeft: "10px"}}>{product.orderedAmount} szt.</span>
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