import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Breadcrumb } from '../../components/Breadcrumb';
import { PageTitle } from '../../components/PageTitle';

export const ProjectPage = () => {
  const projects = [
    {
      client: 'CLIP ',
      city: 'Swarzędz',
      img: 'imgs/projects/clip_swarzedz.jpg',
    },
    {
      client: 'FM Logistic',
      city: 'Będzin',
      img: 'imgs/projects/fm_logistic_bedzin.jpg',
    },
    {
      client: 'MLP',
      city: 'Pruszków',
      img: 'imgs/projects/mlp_pruszkow.jpg',
    },
    {
      param: 'cl',
      client: 'Panattoni',
      city: 'Bielsko Biała',
      img: 'imgs/projects/panattoni_bielsko_biala.jpg',
    },
    {
      client: 'Panattoni',
      city: 'Stryków',
      img: 'imgs/projects/panattoni_strykow.jpg',
    },
    {
      client: 'Phoenix',
      city: 'Nowy Tomyśl',
      img: 'imgs/projects/phoenix_contact_nowy_tomysl.jpg',
    },
    {
      client: 'Prologis',
      city: 'Łódź',
      img: 'imgs/projects/prologis_lodz.jpg',
    },
    {
      client: 'Prologis',
      city: 'Wrocław',
      img: 'imgs/projects/prologis_wroclaw.jpg',
    },
  ];
  const PROJECT_PAGE_TITLE = 'Projekty';

  return (
    <div className="">
      <Breadcrumb title={PROJECT_PAGE_TITLE}></Breadcrumb>
      <div className="max-w-c-xl m-auto px-4 py-16 lg:py-20">
        <PageTitle title={PROJECT_PAGE_TITLE}></PageTitle>

        <div className="grid grid-cols-2 gap-4 xl:gap-8 md:grid-cols-3 ">
          {projects.map((project, i) => (
            <ProjectCard key={i} index={i} cardDetails={project}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};
