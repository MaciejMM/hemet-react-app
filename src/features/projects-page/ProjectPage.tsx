import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Breadcrumb } from '../../components/Breadcrumb';
import { PageTitle } from '../../components/PageTitle';

export const ProjectPage = () => {
  const projects = [
    {
      client: 'CLIP ',
      city: 'Swarzędz',
      img: 'images/projects/clip_swarzedz.webp',
    },
    {
      client: 'FM Logistic',
      city: 'Będzin',
      img: 'images/projects/fm_logistic_bedzin.webp',
    },
    {
      client: 'MLP',
      city: 'Pruszków',
      img: 'images/projects/mlp_pruszkow.webp',
    },
    {
      client: 'Panattoni',
      city: 'Bielsko Biała',
      img: 'images/projects/panattoni_bielsko_biala.webp',
    },
    {
      client: 'Panattoni',
      city: 'Stryków',
      img: 'images/projects/panattoni_strykow.webp',
    },
    {
      client: 'Phoenix',
      city: 'Nowy Tomyśl',
      img: 'images/projects/phoenix_contact_nowy_tomysl.webp',
    },
    {
      client: 'Prologis',
      city: 'Łódź',
      img: 'images/projects/prologis_lodz.webp',
    },
    {
      client: 'Prologis',
      city: 'Wrocław',
      img: 'images/projects/prologis_wroclaw.webp',
    },
  ];
  const PROJECT_PAGE_TITLE = 'Projekty';

  return (
    <div className="mt-32 lg:mt-10">
      <Breadcrumb title={PROJECT_PAGE_TITLE}></Breadcrumb>
      <div className="m-auto max-w-c-xl px-4 py-16 lg:py-20">
        <PageTitle disablePaddingTop={true} title={PROJECT_PAGE_TITLE}></PageTitle>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:gap-8 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} cardDetails={project}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};
