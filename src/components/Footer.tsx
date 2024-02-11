import React from 'react';
import { getAllRoutes, LinkParam } from '../services/route-service';
import { FooterDepartmentContact } from './FooterDepartmentContact';
import { Call, Email } from '@mui/icons-material';

export const Footer = () => {
  return (
    <footer className="bg-black-75 " data-testid="footer-id">
      <FooterDepartmentContact></FooterDepartmentContact>
      <div className="m-auto grid max-w-c-xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-3  lg:py-20">
        <ul className="list-none text-hm-black10">
          <li className="pb-4 text-xl text-hm-yellow">Adres</li>
          <li className="pb-3">Przedsiębiorstwo Wielobranżowe „HEMET”</li>
          <li className="pb-3">ul. Romualda Traugutta 40</li>
          <li className="">64-000 Kościan</li>
        </ul>
        <ul className="list-none text-hm-black10">
          <li className="pb-4 text-xl text-hm-yellow">Biuro / Zakład produkcyjny</li>
          <li className="pb-3">Stare Bojanowo</li>
          <li className="pb-3">ul. Przemysłowa 1</li>
          <li className="">64-030 Śmigiel</li>
        </ul>

        <ul className=" flex-1 list-none text-hm-black10">
          <li className="pb-4  text-xl text-hm-yellow">Kontakt</li>
          <li className=" grid grid-flow-row grid-cols-12 pb-3 ">
            <Email className=" col-span-1 text-hm-yellow"></Email>
            <a className="col-span-11 pl-4 text-white" href="mailto:hemet@hemet.hg.pl">
              hemet@hemet.hg.pl
            </a>
          </li>
          <li className=" grid grid-flow-row grid-cols-12 pb-3 text-white">
            <Call className=" col-span-1 text-hm-yellow"></Call>
            <a className="col-span-11 pl-4 text-white" href="tel:+48655120722">
              +48 655 120 722
            </a>
          </li>
        </ul>
        <ul className="list-none text-hm-black10">
          <li className="pb-4  text-xl font-medium text-hm-yellow">Linki</li>
          {getAllRoutes().map((route: LinkParam, index: number) => (
            <li key={index} className="pb-3 font-normal text-white">
              <a className="text-white " href={route.path}>
                {route.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
