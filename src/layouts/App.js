import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import '../App.css';
import store from "../store";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import {ProductsContext} from "../ProductsContext";
import ProductsProvider from "../ProductsContext";

function App() {
  return (
      <Provider store={store}>
          <ProductsProvider>
      <Router>
        <div className="App">
          <Header/>
          <Navigation/>
          <Page/>
          <Footer/>
        </div>
      </Router>
          </ProductsProvider>
      </Provider>
  );
}

export default App;
