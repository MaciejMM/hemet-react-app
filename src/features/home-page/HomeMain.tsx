import React from 'react';
import styled from '@emotion/styled';
import { LinkButton } from '../../components/Button';

const HemetH1 = styled.h1`
  color: white;
  margin-bottom: 3rem;
  position: relative;
  padding-top: 4rem;

  &::after {
    position: absolute;
    content: '';
    bottom: -6px;
    border-radius: 1px;
    left: 0;
    width: 300px;
    background-color: #fed50a;
    height: 5px;
  }
`;

export const HomeMain = () => {
  return (
    <div className="home-main">
      <img src={'images/DJI_0430.jpg'} alt=""></img>
      <div className="m-auto flex h-full max-w-c-xl flex-col justify-center px-4">
        <p className="text-3xl font-medium uppercase text-hm-black10">Konstrukcje stalowe</p>
        <HemetH1 className="text-9xl">HEMET</HemetH1>
        <div className="description mb-20 text-xl font-medium uppercase text-hm-black10 lg:text-3xl">
          20 lat doświadczenia w budowaniu <span className="text-hm-yellow">konstrukcji stalowych</span>
        </div>
        <div className=" flex w-full flex-col gap-8 md:flex-row">
          <LinkButton title={'Nasze projekty'} pageLink={'/projects'}></LinkButton>
          <LinkButton title={'Kontakt'} pageLink={'/contacts'}></LinkButton>
        </div>
      </div>
    </div>
  );
};
