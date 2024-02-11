import React from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../components/PageTitle';
import { motion } from 'framer-motion';
import { useScrollDirection } from 'react-use-scroll-direction';

type HomeWhyContent = {
  title: string;
  textContent: any;
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
  const { isScrollingDown } = useScrollDirection();

  const whyUsList: HomeWhyContent[] = [
    {
      title: 'Zakład produkcyjny',
      textContent: `Dzięki własnemu zakładowi jesteśmy samowystarczalni. Posiadamy m.in. wypalarkę plazmową, prasę do wybijania otworów, tokarkę, frezarkę, gilotynę, piły taśmowe oraz szereg innych maszyn.`,
      tooltip: false,
    },
    {
      title: 'Certyfikowani spawacze',
      textContent: (
        <div style={{ whiteSpace: 'pre-wrap' }}>
          Zatrudniamy spawaczy, którzy posiadają certyfikaty nadane przez TUV SUD Polska{' '}
          <span style={{ whiteSpace: 'nowrap' }}>Sp. z o.o.</span> Warszawa oraz Instytut Spawalinictwa w Gliwicach.
        </div>
      ),
      tooltip: true,
    },
    {
      title: 'Park maszynowy',
      textContent: `Posiadamy własny park maszynowy. Znajdują się tam m.in. dźwigi oraz podnośniki. Zapewnia nam to pełną niezależność.`,
      tooltip: false,
    },
  ];

  return (
    <div className="bg-hm-lightgrey py-16 lg:py-20">
      <div className="m-auto max-w-c-xl px-4 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-8">
        <div className="aspect-video  lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:aspect-auto">
          <motion.img
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full rounded-md object-fill"
            src={'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381196/hemet-images/lnks495kecevqf8m3eft.webp'}
            alt=""
          ></motion.img>
        </div>
        <motion.main
          initial={{ opacity: 0, y: isScrollingDown ? -200 : 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" lg:col-start-1 lg:col-end-2 "
        >
          <PageTitle title={'Dlaczego my'}></PageTitle>
          {whyUsList.map((value, index) => {
            return (
              <CardDiv className="card shadow-mb8 mb-4 rounded-md p-4 last:mb-0" key={index}>
                <div className="card__title pb-2 font-bold">{value.title}</div>
                <div className="card__text leading-7  text-hm-black50">{value.textContent}</div>
              </CardDiv>
            );
          })}
        </motion.main>
      </div>
    </div>
  );
};
