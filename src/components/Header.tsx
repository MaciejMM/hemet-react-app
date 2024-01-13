import React from 'react';
import {Link} from "react-router-dom";
import {getAllRoutes} from "../services/route-service";
import {ArrowForward, Close, Menu} from "@mui/icons-material";
import {useAppStore} from "../state/AppState";


export const Header = () => {

    const {setShowMenu, showMenu} = useAppStore((state) => ({
            setShowMenu: state.setShowMenu,
            showMenu: state.showMenu
        }
    ))
    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    const hideMenu = ():any =>{
        setShowMenu(false);
    }

    return (
        <header>
            <nav className='container'>
                <a className='head-title' href='/'>HEMET</a>
                <ul>
                    {getAllRoutes().map((route, index) => <li key={index}><Link to={route.path}>{route.text}</Link>
                    </li>)}
                </ul>
                {
                    showMenu ? <Close className="close-icon" onClick={handleClick}></Close> :
                        <Menu className="menu-icon" onClick={handleClick}></Menu>
                }
            </nav>
            {
                showMenu ?
                    <div className="burger-menu">
                            <ul>
                                {getAllRoutes().map((route, index) => <li onClick={hideMenu} key={index}>
                                    <Link to={route.path}>{route.text}</Link>
                                    <ArrowForward></ArrowForward>
                                </li>)}
                            </ul>
                    </div> : <></>

            }

        </header>
    )
}

