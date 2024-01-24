import React from "react";

type ProjectCardProps = {
  index: number;
  cardDetails: CardProps;
};
type CardProps = {
  id: number;
  name: string;
  client: string;
  city: string;
  img: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { name, city, client, img } = props.cardDetails;

  return (
    <div className="p-card" key={props.index}>
      <img className="lightbox" src={img} alt=""></img>
      <div className="project">
        <div className="project__company">
          {name} <span>{city}</span>
        </div>
        <div className="project__name pb8">{client}</div>
      </div>
    </div>
  );
};
