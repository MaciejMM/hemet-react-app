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
    width: 100%;
    background-color: #fed50a;
    height: 8px;
  }
`;

const HomeDiv = styled.div`
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: -50;
  }

  img {
    z-index: -100;
    object-position: 50% 50%;
  }
`;

export const HomeMain = () => {
  return (
    <HomeDiv className="home-main relative h-[100vh] w-full">
      <img
        className="absolute left-0 top-0 h-full w-full object-cover"
        src={'https://res.cloudinary.com/dtofeffbi/image/upload/v1707775696/home-page-images/w8ozkyhdxruc0y7y4yqk.webp'}
        alt=""
      ></img>
      <div className="m-auto flex h-full w-full max-w-c-xl flex-col justify-center px-4">
        <p className="text-2xl  font-medium uppercase text-hm-black10 lg:text-3xl">Konstrukcje stalowe</p>
        <HemetH1 className="w-min text-7xl lg:text-9xl ">HEMET</HemetH1>
        <div className="description mb-20 text-xl font-medium uppercase text-hm-black10 lg:text-3xl">
          20 lat doświadczenia w budowaniu <span className="text-hm-yellow">konstrukcji stalowych</span>
        </div>
        <div className=" flex w-full flex-col gap-8 md:flex-row">
          <LinkButton title={'Nasze projekty'} pageLink={'/projects'}></LinkButton>
          <LinkButton title={'Kontakt'} pageLink={'/contacts'}></LinkButton>
        </div>
      </div>
    </HomeDiv>
  );
};
