import React from 'react';
import styled from '@emotion/styled';
import { PageTitle } from '../../components/PageTitle';
import { motion } from 'framer-motion';
import { useScrollDirection } from 'react-use-scroll-direction';

type Service = {
  name: string;
};

const ServiceCard = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.4s;
  background-color: $white-100;

  &:hover {
    box-shadow: 0 4px 20px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const HomeServices = () => {
  const { isScrollingDown } = useScrollDirection();

  const services: Service[] = [
    {
      name: 'Prefabrykacja i montaż konstrukcji stalowych',
    },
    {
      name: 'Konstrukcje ze stali kwasoodpornej',
    },
    {
      name: 'Zbiorniki ze stali zwykłej i kwasoodpornej',
    },
    {
      name: 'Rurociągi ze stali zwykłej i kwasoodpornej',
    },
    {
      name: 'Pomosty stalowe',
    },
    {
      name: 'Wyroby ze stali kwasoodpornej i węglowej',
    },
  ];
  const HOME_SERVICES_TEXT = 'Nasze usługi';

  return (
    <div className="main-services m-auto max-w-c-xl px-4 pb-16 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-20">
      <motion.img
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden rounded-md lg:col-start-1 lg:col-end-2 lg:block lg:h-full lg:object-cover"
        src={'https://res.cloudinary.com/dtofeffbi/image/upload/v1707381232/hemet-images/cvwp38k0h78bdqsxeemj.webp'}
        alt=""
      ></motion.img>
      <motion.main
        initial={{ opacity: 0, y: isScrollingDown ? -200 : 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-start-2 lg:col-end-3 lg:flex lg:flex-col lg:justify-center"
      >
        <PageTitle title={HOME_SERVICES_TEXT}></PageTitle>
        {services.map((service, index) => {
          return (
            <ServiceCard className="card mb-2  rounded-md px-4 last:mb-0" key={index}>
              <div className="card-title flex items-center rounded-md py-6 text-base font-semibold text-hm-black75 ">
                <img className="mr-3 h-6 w-6" src={'images/red-crane-services.svg'} alt=""></img>
                {service.name}
              </div>
            </ServiceCard>
          );
        })}
      </motion.main>
    </div>
  );
};
