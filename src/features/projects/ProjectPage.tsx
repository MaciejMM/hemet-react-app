import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Breadcrumb } from '../../components/Breadcrumb';
import { PageTitle } from '../../components/PageTitle';

export const ProjectPage = () => {
  const projects = [
    {
      name: 'Centrum logistyczne',
      id: 1,
      client: 'CLIP ',
      city: 'Swarzędz',
      img: 'imgs/projects/clip_swarzedz.jpg',
    },
    {
      name: 'Centrum logistyczne',
      id: 1,
      client: 'FM Logistic',
      city: 'Będzin',
      img: 'imgs/projects/fm_logistic_bedzin.jpg',
    },
    {
      name: 'Centrum logistyczne',
      id: 1,
      client: 'MLP',
      city: 'Pruszków',
      img: 'imgs/projects/mlp_pruszkow.jpg',
    },
    {
      name: 'Hala przemysłowa',
      id: 1,
      param: 'cl',
      client: 'Panattoni',
      city: 'Bielsko Biała',
      img: 'imgs/projects/panattoni_bielsko_biala.jpg',
    },
    {
      name: 'Centrum logistyczne',
      id: 1,
      client: 'Panattoni',
      city: 'Stryków',
      img: 'imgs/projects/panattoni_strykow.jpg',
    },
    {
      name: 'Centrum logistyczne',
      id: 2,
      client: 'Phoenix',
      city: 'Nowy Tomyśl',
      img: 'imgs/projects/phoenix_contact_nowy_tomysl.jpg',
    },
    {
      name: 'Centrum logistyczne',
      id: 2,
      client: 'Prologis',
      city: 'Łódź',
      img: 'imgs/projects/prologis_lodz.jpg',
    },
    {
      name: 'Centrum logistyczne',
      id: 1,
      client: 'Prologis',
      city: 'Wrocław',
      img: 'imgs/projects/prologis_wroclaw.jpg',
    },
  ];
  const PROJECT_PAGE_TITLE = 'Projekty';

  return (
    <div>
      <Breadcrumb title={PROJECT_PAGE_TITLE}></Breadcrumb>
      <div className="container ">
        <PageTitle title={PROJECT_PAGE_TITLE}></PageTitle>
        <div className="projects-page">
          {projects.map((project, i) => (
            <ProjectCard key={i} index={i} cardDetails={project}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};
