import React from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../components/PageTitle';

type HomeWhyContent = {
  title: string;
  textContent: string;
  tooltip: boolean;
};

const CardDiv = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s;
  background-color: white;

  &:hover {
    box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.1);
  }

  &__title {
    color: $black-75;
    font-size: 1.4rem;
    margin-bottom: 8px;
  }

  &__text {
    color: $black-50;
  }
`;

export const HomeWhyUs = () => {
  const whyUsList: HomeWhyContent[] = [
    {
      title: 'Zakład produkcyjny',
      textContent: `Dzięki własnemu zakładowi jesteśmy samowystarczalni. Posiadamy m.in. wypalarkę plazmową, prasę do wybijania otworów, tokarkę, frezarkę, gilotynę, piły taśmowe oraz szereg innych maszyn.`,
      tooltip: false,
    },
    {
      title: 'Certyfikowani spawacze',
      textContent: `Zatrudniamy spawaczy, którzy posiadają certyfikaty nadane przez TUV SUD Polska Sp. z o.o. Warszawa oraz Instytut Spawalinictwa w Gliwicach.`,
      tooltip: true,
    },
    {
      title: 'Park maszynowy',
      textContent: `Posiadamy własny park maszynowy. Znajdują sie tam m.in. dźwigi oraz podnośniki. Zapewnia nam to pełną niezależność.`,
      tooltip: false,
    },
  ];

  return (
    <div className="bg-hm-lightgrey py-16 lg:py-20">
      <div className="m-auto max-w-c-xl px-4 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-8">
        <div className="aspect-video  lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:aspect-auto">
          <img className="h-full w-full rounded-md object-fill" src={'images/IMG_20180608_132959.jpg'} alt=""></img>
        </div>
        <main className=" lg:col-start-1 lg:col-end-2 ">
          <PageTitle title={'Dlaczego my'}></PageTitle>
          {whyUsList.map((value, index) => {
            return (
              <CardDiv className="card shadow-mb8 mb-4 rounded-md p-4 last:mb-0" key={index}>
                <div className="card__title pb-2 font-bold">{value.title}</div>
                <div className="card__text leading-7  text-hm-black50">{value.textContent}</div>
              </CardDiv>
            );
          })}
        </main>
      </div>
    </div>
  );
};
