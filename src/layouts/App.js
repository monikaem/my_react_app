import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import '../App.css';
import store from "../store";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import AppProvider from "../AppContext";

function App() {
  return (
      <Provider store={store}>
          <AppProvider>
      <Router>
        <div className="App">
          <Header/>
          <Navigation/>
          <Page/>
          <Footer/>
        </div>
      </Router>
          </AppProvider>
      </Provider>
  );
}

export default App;
