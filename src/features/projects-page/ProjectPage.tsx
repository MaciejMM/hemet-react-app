import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Breadcrumb } from '../../components/Breadcrumb';
import { PageTitle } from '../../components/PageTitle';

export const ProjectPage = () => {
  const projects = [
    {
      client: 'CLIP ',
      city: 'Swarzędz',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775800/projects/y9xxgxmvhxc8gx2dvrmw.webp',
    },
    {
      client: 'FM Logistic',
      city: 'Będzin',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775804/projects/aokwvgrdbxrdf9ycprav.webp',
    },
    {
      client: 'MLP',
      city: 'Pruszków',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775808/projects/azb31ypssbxzwou4vdcb.webp',
    },
    {
      client: 'Panattoni',
      city: 'Bielsko Biała',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775813/projects/qtzyaq54cdzl1tcnbdo8.webp',
    },
    {
      client: 'Panattoni',
      city: 'Stryków',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775818/projects/vvwqbztyhocofntlwpuz.webp',
    },
    {
      client: 'Phoenix',
      city: 'Nowy Tomyśl',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775825/projects/dazi5m7eafq1c9duteoq.webp',
    },
    {
      client: 'Prologis',
      city: 'Łódź',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775830/projects/uqqz7gfjyhpynyh21rty.webp',
    },
    {
      client: 'Prologis',
      city: 'Wrocław',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775834/projects/jcxl2swas98g2rrciwfh.webp',
    },
    {
      client: 'Coccodrillo',
      city: 'Pianowo',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775842/projects/emvcctnyhhmirqwgcchh.webp',
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
