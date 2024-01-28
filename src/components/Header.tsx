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
    <header className="fixed top-0 z-50 w-full border-b-1 border-b-hm-black10 bg-white">
      <nav className="m-auto flex h-[70px] max-w-c-xl flex-row items-center justify-between px-4">
        <a className="head-title text-2xl font-medium text-hm-black50" href="/">
          HEMET
        </a>
        <ul className="hidden flex-row md:flex">
          {getAllRoutes().map((route, index) => (
            <li className="min-w-[100px]" key={index}>
              <Link className="ml-10 text-hm-black50 hover:font-bold hover:text-hm-black75" to={route.path}>
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
        <span className="md:hidden">
          {showMenu ? (
            <Close className="close-icon cursor-pointer text-hm-black50" onClick={handleClick}></Close>
          ) : (
            <Menu className="menu-icon cursor-pointer text-hm-black50" onClick={handleClick}></Menu>
          )}
        </span>
      </nav>
      {showMenu ? (
        <div className="burger-menu top-100 absolute left-0 h-menu w-full bg-white">
          <ul className="px-4">
            {getAllRoutes().map((route, index) => (
              <li className="flex h-16 flex-row items-center border-b-1 border-b-menu" onClick={hideMenu} key={index}>
                <Link className="w-full font-bold text-hm-black90" to={route.path}>
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
