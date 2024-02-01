import React from 'react';
import { getAllRoutes, LinkParam } from '../services/route-service';
import { Call, Email, LocationOn, Person } from '@mui/icons-material';

export const Footer = () => {
  return (
    <footer className="bg-black-75">
      <div className="m-auto grid max-w-c-xl grid-cols-2 gap-8 px-4 py-16 md:grid-cols-3 lg:grid-cols-4 lg:py-20">
        <ul className="list-none text-hm-black10">
          <li className="pb-3 text-footer-title font-medium text-hm-yellow">Adres</li>
          <li className="pb-2">Przedsiębiorstwo Wielobranżowe „HEMET”</li>
          <li className="pb-2">ul. Traugutta 40</li>
          <li className="">64-000 Kościan</li>
        </ul>
        <ul className="list-none text-hm-black10">
          <li className="pb-3 text-footer-title font-medium text-hm-yellow">Biuro</li>
          <li className="pb-2">Stare Bojanowo</li>
          <li className="pb-2">ul. Przemysłowa 1</li>
          <li className="">64-030 Śmigiel</li>
        </ul>
        <ul className="list-none text-hm-black10">
          <li className="pb-3 text-footer-title font-medium text-hm-yellow">Zakład produkcyjny</li>
          <li className="pb-2">Stare Bojanowo</li>
          <li className="pb-2">ul. Przemysłowa 1</li>
          <li className="">64-030 Śmigiel</li>
        </ul>

        <ul className="list-none text-hm-black10">
          <li className="pb-3 text-footer-title font-medium text-hm-yellow">Linki</li>
          {getAllRoutes().map((route: LinkParam, index: number) => (
            <li key={index} className="pb-2 font-normal text-white">
              <a className="text-white " href={route.path}>
                {route.text}
              </a>
            </li>
          ))}
        </ul>

        <ul className="col-span-2 list-none text-hm-black10 ">
          <li className="pb-3 text-footer-title font-medium text-hm-yellow">Kontakt</li>
          <li className="contact call pb-2 text-white">
            <Call className="mr-4 text-hm-yellow"></Call>
            <a className="text-white" href="tel:+48655120722">
              +48 655 120 722
            </a>
          </li>
          <li className="contact email pb-2 text-white">
            <Email className="mr-4 text-hm-yellow"></Email>
            <a className="text-white" href="mailto:hemet@hemet.hg.pl">
              hemet@hemet.hg.pl
            </a>
          </li>
          <li className="contact location pb-2 text-white">
            <LocationOn className="mr-4 text-hm-yellow"></LocationOn>
            <span>Stare Bojanowo ul. Przemysłowa 1, 64-030 Śmigiel</span>
          </li>
        </ul>

        <ul className="col-span-2 list-none text-hm-black10 lg:row-start-3">
          <li className="pb-3 text-footer-title font-medium text-hm-yellow">Dział handlowy</li>
          <li className="contact location pb-2 text-white">
            <Person className="mr-4 text-hm-yellow"></Person>
            <span>Aleksandra Daros</span>
          </li>

          <li className="contact email pb-2 text-white">
            <Email className="mr-4 text-hm-yellow"></Email>
            <a className="text-white" href="mailto:aleksandra.daros@hemet.hg.pl">
              aleksandra.daros@hemet.hg.pl
            </a>
          </li>
          <li className="contact call pb-2 text-white">
            <Call className="mr-4 text-hm-yellow"></Call>
            <a className="text-white" href="tel:+48600432556">
              +48 600 432 556
            </a>
          </li>
        </ul>

        <ul className="col-span-2 list-none text-hm-black10 lg:row-start-3">
          <li className="pb-3 text-footer-title font-medium text-hm-yellow">Dział techniczno-handlowy</li>
          <li className="contact location pb-2 text-white">
            <Person className="mr-4 text-hm-yellow"></Person>
            <span>Tomasz Zapłata</span>
          </li>

          <li className="contact email pb-2 text-white">
            <Email className="mr-4 text-hm-yellow"></Email>
            <a className="text-white" href="mailto:tomasz.zaplata@hemet.hg.pl">
              tomasz.zaplata@hemet.hg.pl
            </a>
          </li>
          <li className="contact call  text-white ">
            <Call className="mr-4 text-hm-yellow"></Call>
            <a className="text-white" href="tel:+48600432556">
              +48 600 432 556
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
