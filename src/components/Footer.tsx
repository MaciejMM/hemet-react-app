import React from "react";
import { Link } from "react-router-dom";
import { getAllRoutes } from "../services/route-service";
import { Call, Email, LocationOn } from "@mui/icons-material";

export const Footer = () => {
  return (
    <footer className="mt-40">
      <div className="container py-16 lg:py-20">
        <ul>
          <li>Adres</li>
          <li>Przedsiębiorstwo Wielobranżowe „HEMET”</li>
          <li>ul. Traugutta 40</li>
          <li>64-000 Kościan</li>
        </ul>
        <ul>
          <li>Biuro</li>
          <li>ul. Plac Wolności 21</li>
          <li>64-000 Kościan</li>
        </ul>
        <ul>
          <li>Zakład produkcyjny</li>
          <li>Stare Bojanowo</li>
          <li>ul. Przemysłowa 1</li>
          <li>64-030 Śmigiel</li>
        </ul>

        <ul>
          <li>Linki</li>
          {getAllRoutes().map((route, index) => (
            <li key={index}>
              <Link to={route.path}>{route.text}</Link>
            </li>
          ))}
        </ul>

        <ul>
          <li>Kontakt</li>
          <div className="contact call">
            <Call></Call>
            <Link to="tel:+48655120722">+48 655 120 722</Link>
          </div>
          <div className="contact email">
            <Email></Email>
            <Link to="mailto:hemet@hemet.hg.pl">hemet@hemet.hg.pl</Link>
          </div>
          <div className="contact location">
            <LocationOn></LocationOn>
            <span>Plac Wolności 21, 64-000 Kościan</span>
          </div>
        </ul>
      </div>
    </footer>
  );
};
