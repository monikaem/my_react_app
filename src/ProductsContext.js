import {createContext, useState, } from 'react';

const productsInStock = [
    {
        id: 0,
        name: 'Dieta bezglutenowa - 30 dni',
        price: 230.00,
        inBasket: false,
    },
    {
        id: 1,
        name: 'Dieta ketogeniczna - 30 dni',
        price: 260.00,
        inBasket: false,
    },
    {
        id: 2,
        name: 'Dieta 1600 kcal - 30 dni',
        price: 210.00,
        inBasket: false,
    },
];

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(productsInStock);

    const addToBasket = (id) => {
        const productsList = [...products]
        productsList[id].inBasket = true;
        setProducts(productsList)
    }

    return (
        <ProductsContext.Provider value={{ products, addToBasket }}>
            {children}
        </ProductsContext.Provider>
    )
};

export default ProductsProvider;