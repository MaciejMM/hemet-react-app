import React from "react";

export const ProjectPage = () => {

    const projects = [
        {
            name: 'Centrum logistyczne',
            id: 1,
            client: 'CLIP ',
            city: "Swarzędz",
            img: 'imgs/projects/clip_swarzedz.jpg',
        },
        {
            name: 'Centrum logistyczne',
            id: 1,
            client: 'FM Logistic',
            city: "Będzin",
            img: 'imgs/projects/fm_logistic_bedzin.jpg',
        },
        {
            name: 'Centrum logistyczne',
            id: 1,
            client: 'MLP',
            city: "Pruszków",
            img: 'imgs/projects/mlp_pruszkow.jpg',
        },
        {
            name: 'Hala przemysłowa',
            id: 1,
            param: "cl",
            client: 'Panattoni',
            city: "Bielsko Biała",
            img: 'imgs/projects/panattoni_bielsko_biala.jpg',
        },
        {
            name: 'Centrum logistyczne',
            id: 1,
            client: 'Panattoni',
            city: "Stryków",
            img: 'imgs/projects/panattoni_strykow.jpg',
        },
        {
            name: 'Centrum logistyczne',
            id: 2,
            client: 'Phoenix',
            city: "Nowy Tomyśl",
            img: 'imgs/projects/phoenix_contact_nowy_tomysl.jpg',
        },
        {
            name: 'Centrum logistyczne',
            id: 2,
            client: 'Prologis',
            city: "Łódź",
            img: 'imgs/projects/prologis_lodz.jpg',
        },
        {
            name: 'Centrum logistyczne',
            id: 1,
            client: 'Prologis',
            city: "Wrocław",
            img: 'imgs/projects/prologis_wroclaw.jpg',
        },
    ]


    return (
        <div className="container ">
            <ul className="breadcrumb">
                <li><a href="/">Strona glowna</a></li>
                <li>Projekty</li>
            </ul>
            <div className="title">Projekty</div>

            <div className="projects-page">
                {
                    projects.map((project,index) => {
                        return (
                            <div className="p-card" key={index}>
                                <img className="lightbox" src={project.img} alt=""></img>
                                <div className='project'>
                                    <div className="project__company">{project.name} <span>{project.city}</span></div>
                                    <div className="project__name pb8">{project.client}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>)


};
