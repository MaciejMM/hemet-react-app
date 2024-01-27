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
    <div className="bg-hm-black75 rounded-md" key={props.index}>
      <img className="aspect-square w-full rounded-t-md object-cover" src={img} alt=""></img>
      <div className="p-2 py-3 xl:p-4">
        <div className="text-hm-yellow text-base md:text-lg xl:text-xl">{client}</div>
        <div className="text-white pt-2 text-sm xl:text-base ">{city}</div>
      </div>
    </div>
  );
};
