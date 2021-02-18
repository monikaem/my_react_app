import {createContext, useState, } from 'react';

const productsInStock = [
    {
        id: 0,
        name: 'Dieta bezglutenowa - 30 dni',
        price: 230.99,
        orderedAmount: 0,
        inBasket: false,
    },
    {
        id: 1,
        name: 'Dieta ketogeniczna - 30 dni',
        price: 269.99,
        orderedAmount: 0,
        inBasket: false,
    },
    {
        id: 2,
        name: 'Dieta 1600 kcal - 30 dni',
        price: 210.00,
        orderedAmount: 0,
        inBasket: false,
    },
    {
        id: 3,
        name: 'Dieta 2400 kcal - 30 dni',
        price: 299.99,
        orderedAmount: 0,
        inBasket: false,
    },
    {
        id: 4,
        name: 'Dieta 1600 kcal - 7 dni',
        price: 59.99,
        orderedAmount: 0,
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
        productsList[id].orderedAmount += 1;
        setProducts(productsList);
    }
    const removeFromBasket = (id) => {
        const productsList = [...products];
        productsList[id].orderedAmount -= 1;
        setProducts(productsList)
        if (!productsList[id].orderedAmount) {
            productsList[id].inBasket = false;
            setProducts(productsList)
        }

    }
    const changePermission = () => setPermission(prev => !prev);

    return (
        <ProductsContext.Provider value={{ products, addToBasket, removeFromBasket, permission, changePermission }}>
            {children}
        </ProductsContext.Provider>
    )
};

export default ProductsProvider;