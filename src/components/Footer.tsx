import React from 'react';
import { Link } from 'react-router-dom';
import { getAllRoutes, LinkParam } from '../services/route-service';
import { Call, Email, LocationOn, Person } from '@mui/icons-material';

export const Footer = () => {
  return (
    <footer className="bg-hm-black75">
      <div className="container py-16 lg:py-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ul className="list-none text-hm-black10">
          <li className="text-hm-yellow text-footer-title font-medium pb-3">Adres</li>
          <li className="pb-2">Przedsiębiorstwo Wielobranżowe „HEMET”</li>
          <li className="pb-2">ul. Traugutta 40</li>
          <li className="">64-000 Kościan</li>
        </ul>
        <ul className="list-none text-hm-black10">
          <li className="text-hm-yellow text-footer-title font-medium pb-3">Biuro</li>
          <li className="pb-2">Stare Bojanowo</li>
          <li className="pb-2">ul. Przemysłowa 1</li>
          <li className="">64-030 Śmigiel</li>
        </ul>
        <ul className="list-none text-hm-black10">
          <li className="text-hm-yellow text-footer-title font-medium pb-3">Zakład produkcyjny</li>
          <li className="pb-2">Stare Bojanowo</li>
          <li className="pb-2">ul. Przemysłowa 1</li>
          <li className="">64-030 Śmigiel</li>
        </ul>

        <ul className="list-none text-hm-black10">
          <li className="text-hm-yellow text-footer-title font-medium pb-3">Linki</li>
          {getAllRoutes().map((route: LinkParam, index: number) => (
            <li key={index} className="text-white font-normal pb-2">
              <Link className="text-white " to={route.path}>
                {route.text}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="list-none text-hm-black10 col-span-2 ">
          <li className="text-hm-yellow text-footer-title font-medium pb-3">Kontakt</li>
          <li className="contact call pb-2 text-white">
            <Call className="mr-4 text-hm-yellow"></Call>
            <Link className="text-white" to="tel:+48655120722">
              +48 655 120 722
            </Link>
          </li>
          <li className="contact email pb-2 text-white">
            <Email className="mr-4 text-hm-yellow"></Email>
            <Link className="text-white" to="mailto:hemet@hemet.hg.pl">
              hemet@hemet.hg.pl
            </Link>
          </li>
          <li className="contact location pb-2 text-white">
            <LocationOn className="mr-4 text-hm-yellow"></LocationOn>
            <span>Stare Bojanowo ul. Przemysłowa 1, 64-030 Śmigiel</span>
          </li>
        </ul>

        <ul className="list-none text-hm-black10 col-span-2 lg:row-start-3">
          <li className="text-hm-yellow text-footer-title font-medium pb-3">Dział handlowy</li>
          <li className="contact location pb-2 text-white">
            <Person className="mr-4 text-hm-yellow"></Person>
            <span>Aleksandra Daros</span>
          </li>

          <li className="contact email pb-2 text-white">
            <Email className="mr-4 text-hm-yellow"></Email>
            <Link className="text-white" to="mailto:aleksandra.daros@hemet.hg.pl">
              aleksandra.daros@hemet.hg.pl
            </Link>
          </li>
          <li className="contact call pb-2 text-white">
            <Call className="mr-4 text-hm-yellow"></Call>
            <Link className="text-white" to="tel:+48600432556">
              +48 600 432 556
            </Link>
          </li>
        </ul>

        <ul className="list-none text-hm-black10 col-span-2 lg:row-start-3">
          <li className="text-hm-yellow text-footer-title font-medium pb-3">Dział techniczno-handlowy</li>
          <li className="contact location pb-2 text-white">
            <Person className="mr-4 text-hm-yellow"></Person>
            <span>Tomasz Zapłata</span>
          </li>

          <li className="contact email pb-2 text-white">
            <Email className="mr-4 text-hm-yellow"></Email>
            <Link className="text-white" to="mailto:tomasz.zaplata@hemet.hg.pl">
              tomasz.zaplata@hemet.hg.p
            </Link>
          </li>
          <li className="contact call  text-white ">
            <Call className="mr-4 text-hm-yellow"></Call>
            <Link className="text-white" to="tel:+48600432556">
              +48 600 432 556
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
