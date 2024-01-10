import React from "react";
import {Link} from "react-router-dom";

export const HomeContact = ()=>{

    return(
        <div className="container main-contact">
            <img src={"images/pexels-hassan-ouajbir-804065.jpg"} className="lightbox" alt=""></img>
                <main>
                    <div className="title">Kontakt</div>
                    <h3 className="question">Masz pytanie?</h3>
                    <p className="question-text">Napisz do nas, a nasz zespół odezwie się do Ciebie w ciągu 24 godzin.</p>
                    <span className="material-icons">call<Link to="tel:+48655120722">+48 655 120 722</Link></span>
                    <span className="material-icons">email<Link to="mailto:hemet@hemet.hg.pl">hemet@hemet.hg.pl</Link></span>
                    <span className="material-icons">location_on<span>Plac Wolności 21, 64-000 Kościan</span></span>

                </main>
        </div>
    )
}
