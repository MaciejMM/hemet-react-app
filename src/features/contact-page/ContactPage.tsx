import React from 'react';
import { Link } from 'react-router-dom';
import { Call, Email, LocationOn } from '@mui/icons-material';
import { Breadcrumb } from '../../components/Breadcrumb';
import { PageTitle } from '../../components/PageTitle';

export const ContactPage = () => {
  const CONTACT_TITLE = 'Kontakt';

  return (
    <div>
      <Breadcrumb title={CONTACT_TITLE}></Breadcrumb>
      <div className="container main-contact py-16 md:py-20 md:grid md:grid-cols-2 md:gap-x-8">
        <div className="md:col-start-1 md:col-end-2 md:h-full aspect-video md:aspect-auto">
          <img src={'images/pexels-hassan-ouajbir-804065.jpg'} className="h-full rounded-md" alt=""></img>
        </div>
        <main className="md:col-start-2 md:col-end-3">
          <PageTitle title={CONTACT_TITLE}></PageTitle>
          <h3 className="question">Masz pytanie?</h3>
          <p className="question-text">Napisz do nas, a nasz zespół odezwie się do Ciebie w ciągu 24 godzin.</p>
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
