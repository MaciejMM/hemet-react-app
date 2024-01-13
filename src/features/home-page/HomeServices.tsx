import React from "react";

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
                src={'images/IMG_20190704_121515.jpg'}
                alt=""></img>
            <main>
                {
                    services.map((service, index) => {

                        return (
                            <div className="card" key={index}>
                                <div className="card-title">
                                    <img src={"images/red-crane-services.svg"} alt=""></img>
                                    {service.name}
                                </div>
                            </div>
                        )
                    })
                }

            </main>

        </div>
    )
}
