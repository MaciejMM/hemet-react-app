import React from 'react';
import styled from '@emotion/styled';

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
      <div className="max-w-c-xl m-auto px-4 h-full flex flex-col justify-center">
        <h3 className="text-xl uppercase text-hm-black10 font-medium">Konstrukcje stalowe</h3>
        <HemetH1 className="md:text-2xl">HEMET</HemetH1>
        <div className="description uppercase text-hm-black10 font-medium mb-4">
          20 lat doświadczenia w budowaniu <span className="text-hm-yellow">konstrukcji stalowych</span>
        </div>
        <div className="btns w-full flex flex-col gap-8 md:flex-row md:w-1/2">
          <a className="btn btn-xl grid content-center" href="/projects">
            Nasze projekty
          </a>
          <a className="btn btn-xl grid content-center" href="/contacts">
            kontakt
          </a>
        </div>
      </div>
    </div>
  );
};
