import React from "react";
import { Link } from "react-router-dom";
import { Call, Email, LocationOn } from "@mui/icons-material";
import { Breadcrumb } from "../../components/Breadcrumb";

export const ContactPage = () => {
  const CONTACT_TITLE = "Kontakt";

  return (
    <div>
      <Breadcrumb title={CONTACT_TITLE}></Breadcrumb>
      <div className="container main-contact">
        <img
          src={"images/pexels-hassan-ouajbir-804065.jpg"}
          className="lightbox"
          alt=""
        ></img>
        <main>
          <div className="title">Kontakt</div>
          <h3 className="question">Masz pytanie?</h3>
          <p className="question-text">
            Napisz do nas, a nasz zespół odezwie się do Ciebie w ciągu 24
            godzin.
          </p>
          <div className="contact call">
            <Call></Call>
            <Link to="tel:+48655120722">+48 655 120 722</Link>
          </div>
          <div className="contact email">
            <Email></Email>
            <Link to="mailto:hemet@hemet.hg.pl">hemet@hemet.hg.pl</Link>
          </div>
          <div className="contact    location">
            <LocationOn></LocationOn>
            <span>Plac Wolności 21, 64-000 Kościan</span>
          </div>
        </main>
      </div>
    </div>
  );
};
