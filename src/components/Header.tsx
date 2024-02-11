import React from 'react';
import { getAllRoutes } from '../services/route-service';
import { ArrowForward, Close, Menu } from '@mui/icons-material';
import { useAppStore } from '../state/AppState';
import { Link } from 'react-router-dom';

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
    <header className="fixed top-0 z-10 w-full border-b-1 border-b-hm-black10 bg-white">
      <nav className="m-auto flex h-[70px] max-w-c-xl flex-row items-center justify-between px-4">
        <Link className="head-title text-2xl font-medium text-hm-black50" to={'/'}>
          HEMET
        </Link>
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
            <label className="py-4 pl-6" htmlFor="i-close">
              <Close
                id="i-close"
                className="close-icon z-30 cursor-pointer text-hm-black50"
                onClick={handleClick}
              ></Close>
            </label>
          ) : (
            <label className="py-4 pl-6" htmlFor="i-menu">
              <Menu id="i-menu" className="menu-icon z-30 cursor-pointer text-hm-black50" onClick={handleClick}></Menu>
            </label>
          )}
        </span>
      </nav>
      {showMenu ? (
        <div className="burger-menu top-100 absolute left-0 h-menu w-full bg-white">
          <ul className="px-4">
            {getAllRoutes().map((route, index) => (
              <Link
                onClick={hideMenu}
                key={index}
                className="flex h-16 w-full flex-row items-center justify-between border-b-1 border-b-menu font-bold text-hm-black90"
                to={route.path}
              >
                <div>{route.text}</div>
                <ArrowForward></ArrowForward>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};
