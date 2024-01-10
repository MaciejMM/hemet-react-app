import React from "react";
import {Link} from "react-router-dom";
import {Mail, Call, LocationOn} from '@mui/icons-material';

export const ContactPage = () => {

    return (
        <div>
            <div className="container">
                <ul className="breadcrumb">
                    <li><a href="/">Strona główna</a></li>
                    <li>Kontakt</li>
                </ul>
                <div className="title">Kontakt</div>
            </div>

            <div className="container concact-page">
                <img src={"images/saad-salim-PqRvLsjD_TU-unsplash.jpg"} alt=""/>
                <main>
                    <h3 className="question">Masz pytanie?</h3>
                    <p className="question-text">Napisz do nas, a nasz zespół odezwie się do Ciebie w ciągu 24
                        godzin.</p>
                    <div className="contact">
                        <Link className="contact-link" to={"tel:+48655120722"}><Call/>+48 655 120 722</Link>
                        <Link className="contact-link"
                              to={"mailto:hemet@hemet.hg.pl"}><Mail></Mail>hemet@hemet.hg.pl</Link>
                        <LocationOn className="contact-link">Plac Wolności 21, 64-000 Kościan</LocationOn>
                    </div>

                </main>
            </div>
        </div>
    )
}
