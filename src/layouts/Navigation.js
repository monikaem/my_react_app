import React from "react";
import '../styles/Navigation.css'
import {NavLink} from "react-router-dom";


const list = [
    {name: 'blog', path: '/', exact: true},
    {name: 'nasze produkty', path: '/products'},
    {name: 'zapisz się na kurs!', path: '/form'},
    {name: 'kalkulator bmi', path: '/calculator'},
    {name: 'kontakt', path: '/contact'},


]

const navigationList = list.map(item => {
    return <li className="liFromMenu" key={item.name}><NavLink to={item.path} exact={item.exact}>{item.name}</NavLink></li>
})

const Navigation = () => {
    return (
        <nav>
            <ul>
                {navigationList}
            </ul>
        </nav>
    )
}


export default Navigation;