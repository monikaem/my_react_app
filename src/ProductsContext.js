import {createContext, useState, } from 'react';

const productsInStock = [
    {
        id: 0,
        name: 'Dieta bezglutenowa - 30 dni',
        price: 230.99,
        inBasket: false,
    },
    {
        id: 1,
        name: 'Dieta ketogeniczna - 30 dni',
        price: 269.99,
        inBasket: false,
    },
    {
        id: 2,
        name: 'Dieta 1600 kcal - 30 dni',
        price: 210.00,
        inBasket: false,
    },
    {
        id: 3,
        name: 'Dieta 2400 kcal - 30 dni',
        price: 299.99,
        inBasket: false,
    },
    {
        id: 4,
        name: 'Dieta 1600 kcal - 7 dni',
        price: 59.99,
        inBasket: false,
    },
];

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(productsInStock);
    const [permission, setPermission] = useState(false);

    const addToBasket = (id) => {
        const productsList = [...products];
        productsList[id].inBasket = true;
        setProducts(productsList);
    }
    const removeFromBasket = (id) => {
        const productsList = [...products];
        productsList[id].inBasket = false;
        setProducts(productsList)
    }
    const changePermission = () => setPermission(prev => !prev);

    return (
        <ProductsContext.Provider value={{ products, addToBasket, removeFromBasket, permission, changePermission }}>
            {children}
        </ProductsContext.Provider>
    )
};

export default ProductsProvider;