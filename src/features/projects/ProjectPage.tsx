import React from 'react';
import { ProjectCard } from './ProjectCard';
import { Breadcrumb } from '../../components/Breadcrumb';
import { PageTitle } from '../../components/PageTitle';

export const ProjectPage = () => {
  const projects = [
    {
      client: 'CLIP ',
      city: 'Swarzędz',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707853482/projects/xsev45egvakjkeos1vmq.webp',
    },
    {
      client: 'FM Logistic',
      city: 'Będzin',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707853488/projects/nmk5zmabrbifrj6whapm.webp',
    },
    {
      client: 'MLP',
      city: 'Pruszków',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707853494/projects/f36obunjxr5u2ahlmqen.webp',
    },
    {
      client: 'Panattoni',
      city: 'Bielsko Biała',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707853500/projects/dhlqsngsc1rhu3z7p5z7.webp',
    },
    {
      client: 'Panattoni',
      city: 'Stryków',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707853505/projects/uvpavnrcxjrznt7otbae.webp',
    },
    {
      client: 'Phoenix',
      city: 'Nowy Tomyśl',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707853511/projects/x9khkzrmgn8g227wev3p.webp',
    },
    {
      client: 'Prologis',
      city: 'Łódź',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707853517/projects/pwrbx9pnrdavfyvycqqn.webp',
    },
    {
      client: 'Prologis',
      city: 'Wrocław',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707853521/projects/ckgrvyinxnjul45nps82.webp',
    },
    {
      client: 'Coccodrillo',
      city: 'Pianowo',
      img: 'https://res.cloudinary.com/dtofeffbi/image/upload/v1707853529/projects/bokoz9d42zui0dbqf4rw.webp',
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
