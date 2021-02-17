import React, {useContext} from "react";
import {ProductsContext} from "../ProductsContext";



const ProductInOffert = (props) => {
    const { name, price, id } = props.product;
    const { addToBasket } = useContext(ProductsContext)


    return (
    <li>{name}, <span>cena kursu: {price} PLN</span>
        <button onClick={() => addToBasket(id)}>Kupuję!</button>
    </li>

    )
};


export default ProductInOffert;