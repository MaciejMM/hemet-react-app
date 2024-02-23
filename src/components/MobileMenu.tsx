import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowForward, Close } from '@mui/icons-material';
import { getAllRoutes } from '../services/route-service';
import { useAppStore } from '../state/AppState';

export const MobileMenu = () => {

  const { setShowMenu, showMenu } = useAppStore((state) => ({
    setShowMenu: state.setShowMenu,
    showMenu: state.showMenu,
  }));
  const hideMenu = (): any => {
    setShowMenu(false);
  };
  if (!showMenu) {
    return <></>;
  } else {
    return (
      <div className="w-full bg-white">
        <nav className="m-auto flex h-[70px] max-w-c-xl flex-row items-center justify-between px-4">
          <Link onClick={hideMenu} className="head-title text-2xl font-medium text-hm-black50" to={'/'}>
            HEMET
          </Link>

          <label className="py-4 pl-6" htmlFor="i-close">
            <Close onClick={hideMenu} id="i-close" className="close-icon cursor-pointer text-hm-black50"></Close>
          </label>
        </nav>
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

    );
  }

};
