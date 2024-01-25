import React from 'react';
import { Link } from 'react-router-dom';
import { Call, Email, LocationOn } from '@mui/icons-material';

export const HomeContact = () => {
  return (
    <div className="container main-contact md:grid md:grid-cols-2 py-16 lg:py-20 md:grid-rows-1 md:gap-x-8">
      <div className="aspect-video w-full md:h-full  md:col-start-1 md:col-end-2">
        <img src={'images/pexels-hassan-ouajbir-804065.jpg'} className="w-full md:h-full object-fill" alt=""></img>
      </div>

      <main className="flex flex-col md:col-start-2 md:col-end-3">
        <div className="title">Kontakt</div>
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
        <div className="contact location">
          <LocationOn></LocationOn>
          <span>Plac Wolności 21, 64-000 Kościan</span>
        </div>
      </main>
    </div>
  );
};
