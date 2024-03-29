import React from 'react';

type ProjectCardProps = {
  index: number;
  cardDetails: CardProps;
};
type CardProps = {
  client: string;
  city: string;
  img: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { city, client, img } = props.cardDetails;

  return (
    <div className="rounded-md bg-black-75" key={props.index}>
      <img className="aspect-square w-full rounded-t-md object-cover" data-testid={'img'} src={img} alt=""></img>
      <div className="p-2 py-3 xl:p-4">
        <div className="text-base text-hm-yellow md:text-lg xl:text-xl" data-testid={'client'}>
          {client}
        </div>
        <div className="pt-2 text-sm text-white xl:text-base " data-testid={'city'}>
          {city}
        </div>
      </div>
    </div>
  );
};
