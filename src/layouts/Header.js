import React from "react";
import '../styles/Header.css';
import headerImg1 from '../images/salad-bar-header-1400x260.jpg';
import headerImg2 from '../images/140130_orig.jpg';
import headerImg3 from '../images/5278195_orig.jpg';
import headerImg4 from '../images/9507739_orig.jpg';
import {Route, Switch} from "react-router";


const Header = () => {
    return (
        <header>
            <Switch>
              <Route path="/" exact="true" render={() => <img src={headerImg1} alt="food"/> } />
              <Route path="/products"  render={() => <img src={headerImg2} alt="food"/> } />
              <Route path="/form"  render={() => <img src={headerImg1} alt="food"/> } />
              <Route path="/calculator"  render={() => <img src={headerImg3} alt="food"/> } />
              <Route path="/contact"  render={() => <img src={headerImg4} alt="food"/> } />
            </Switch>

        </header>
    )
}


export default Header;