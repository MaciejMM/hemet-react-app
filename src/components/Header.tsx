import React from 'react';
import {Link} from "react-router-dom";
import {getAllRoutes} from "../services/route-service";


export const Header = () => {

    return (
        <header>
            <nav className='container'>
                <a className='head-title' href='/'>HEMET</a>
                <ul>
                    {getAllRoutes().map((route,index) => <li key={index}><Link to={route.path}>{route.text}</Link></li>)}
                </ul>
                <span className='material-icons burger'>menu</span>
                <span className="material-icons close-menu hide">close</span>
            </nav>

            <div className="burger-menu">
                <ul>
                    <ul>
                        {getAllRoutes().map((route, index) => <li key={index}><Link to={route.path}>{route.text}</Link></li>)}
                    </ul>

                </ul>
            </div>
        </header>
    )
}

