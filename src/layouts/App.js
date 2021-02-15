import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';

import '../App.css';

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <Navigation/>
          <Page/>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
