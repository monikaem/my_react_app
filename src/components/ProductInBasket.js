import React, {useContext} from "react";
import {ProductsContext} from "../ProductsContext";



const ProductInBasket = (props) => {
    const { name, price, id } = props.product;
    // const { addToBasket } = useContext(ProductsContext)


    return (
        <li>{name}, <span>cena kursu: {price} PLN</span>
            <button>Usuń</button>
        </li>
    )
};


export default ProductInBasket;