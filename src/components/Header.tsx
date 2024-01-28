import React from 'react';
import { Link } from 'react-router-dom';
import { getAllRoutes } from '../services/route-service';
import { ArrowForward, Close, Menu } from '@mui/icons-material';
import { useAppStore } from '../state/AppState';

export const Header = () => {
  const { setShowMenu, showMenu } = useAppStore((state) => ({
    setShowMenu: state.setShowMenu,
    showMenu: state.showMenu,
  }));
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = (): any => {
    setShowMenu(false);
  };

  return (
    <header className="w-full fixed bg-white border-b-1 border-b-hm-black10 top-0 z-50">
      <nav className="max-w-c-xl m-auto px-4 flex flex-row h-[70px] justify-between items-center">
        <a className="head-title text-2xl text-hm-black50 font-medium" href="/">
          HEMET
        </a>
        <ul className="hidden md:flex flex-row">
          {getAllRoutes().map((route, index) => (
            <li className="min-w-[100px]" key={index}>
              <Link className="text-hm-black50 ml-10 hover:font-bold hover:text-hm-black75" to={route.path}>
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
        <span className="md:hidden">
          {showMenu ? (
            <Close className="close-icon text-hm-black50 cursor-pointer" onClick={handleClick}></Close>
          ) : (
            <Menu className="menu-icon text-hm-black50 cursor-pointer" onClick={handleClick}></Menu>
          )}
        </span>
      </nav>
      {showMenu ? (
        <div className="burger-menu absolute top-100 left-0 w-full h-menu bg-white">
          <ul className="px-4">
            {getAllRoutes().map((route, index) => (
              <li className="h-16 flex flex-row items-center border-b-1 border-b-menu" onClick={hideMenu} key={index}>
                <Link className="w-full text-hm-black90 font-bold" to={route.path}>
                  {route.text}
                </Link>
                <ArrowForward></ArrowForward>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};
