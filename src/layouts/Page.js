import React from "react";

import '../styles/Page.css'
import {Route, Switch} from "react-router";
import BlogPage from "../pages/BlogPage";
import ProductsPage from "../pages/ProductsPage";
import FormPage from "../pages/FormPage";
import CalculatorPage from "../pages/CalculatorPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import PaymentPage from "../pages/PaymentPage";

const Page = () => {
    return (
        <main className="mainPage">
            <Switch>
                <Route path='/' exact="true" component={BlogPage}/>
                <Route path='/products' exact="true" component={ProductsPage}/>
                <Route path='/products/payment' component={PaymentPage}/>
                <Route path='/form' component={FormPage}/>
                <Route path='/calculator' component={CalculatorPage}/>
                <Route path='/contact' component={ContactPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </main>
    )
}


export default Page;