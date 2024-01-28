import React from 'react';
import styled from '@emotion/styled';
import { LinkButton } from '../../components/Button';

const HemetH1 = styled.h1`
  color: white;
  font-size: 4rem;
  margin-bottom: 3rem;
  position: relative;
  padding-left: 1.2rem;
  padding-top: 4rem;

  &::after {
    position: absolute;
    content: '';
    bottom: -6px;
    //transform: translateY(-50%);
    left: 0;
    width: 10px;
    background-color: #fed50a;
    height: 0.75em;
  }
`;

export const HomeMain = () => {
  return (
    <div className="home-main">
      <img src={'images/DJI_0430.jpg'} alt=""></img>
      <div className="m-auto flex h-full max-w-c-xl flex-col justify-center px-4">
        <h3 className="text-xl font-medium uppercase text-hm-black10">Konstrukcje stalowe</h3>
        <HemetH1 className="md:text-2xl">HEMET</HemetH1>
        <div className="description mb-4 font-medium uppercase text-hm-black10">
          20 lat doświadczenia w budowaniu <span className="text-hm-yellow">konstrukcji stalowych</span>
        </div>
        <div className=" flex w-full flex-col gap-8 md:flex-row ">
          <LinkButton title={'Nasze projekty'} pageLink={'/projects'}></LinkButton>
          <LinkButton title={'Kontakt'} pageLink={'/contacts'}></LinkButton>
        </div>
      </div>
    </div>
  );
};
