import React from 'react';
import {Link} from "react-router-dom";
import {getAllRoutes} from "../services/route-service";

export const Footer = () => {

    return (
        <footer>
            <div className="container">
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
                    {getAllRoutes().map((route, index) => <li key={index}><Link to={route.path}>{route.text}</Link>
                    </li>)}


                </ul>

                <ul>
                    <li>Kontakt</li>
                    <li><span className="material-icons">call<Link to={'tel:+48655120722'}>+48 655 120 722</Link></span>
                    </li>
                    <li><span className="material-icons">email<Link
                        to="mailto:hemet@hemet.hg.pl">hemet@hemet.hg.pl</Link></span>
                    </li>
                    <li><span className="material-icons">location_on<span>Plac Wolności 21, 64-000 Kościan</span></span>
                    </li>
                </ul>

            </div>
        </footer>

    )
}
