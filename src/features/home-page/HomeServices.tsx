import React from "react";
import {Link} from "react-router-dom";

type Service = {
    name: string;
    text: string;
}

export const HomeServices = () => {

    const services: Service[] = [
        {
            name: 'Service 1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim',
        },
        {
            name: 'Service 2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim',
        },
        {
            name: 'Service 3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim',
        },
        {
            name: 'Service 4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim',
        },
        {
            name: 'Service 5',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim',
        },
    ]

    return (
        <div className="container main-services">
            <div className="title">Nasze usługi</div>
            <img
                className='service-img lightbox'
                src={'images/saad-salim-PqRvLsjD_TU-unsplash.jpg'}
                alt=""></img>
            <main>
                {
                    services.map((service, index) => {

                        return (
                            <div className="card" key={index}>
                                <div className="card-title">
                                    <img src={"images/red-crane-services.svg"} alt=""></img>
                                    {service.name}
                                    <span className="material-icons">expand_more</span>
                                </div>
                                <div className="expand collapse">
                                    <div className="text">{service.text}</div>
                                    <span className='read-more'>Czytaj więcej <span
                                        className="material-icons">arrow_forward</span></span>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='see-more '>
                    <Link to={"/services"} className='btn btn-xl'>Zobacz więcej</Link>
                </div>
            </main>

        </div>
    )
}
