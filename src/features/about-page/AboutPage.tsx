import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { PageTitle } from '../../components/PageTitle';
import { AboutCertificates } from './AboutCertificates';
import { AboutCooperation } from './AboutCooperation';
import styled from '@emotion/styled';
import { AboutPictures } from './AboutPictures';

const Dot = styled.span`
  height: 5px;
  width: 5px;
  display: inline-block;
  background-color: #fed50a;
  border-radius: 100px;
`;

export const AboutPage = () => {
  const ABOUT_TITLE = 'O nas';

  return (
    <div className="mt-32 lg:mt-10">
      <Breadcrumb title={ABOUT_TITLE}></Breadcrumb>
      <div className="py-16 lg:py-20">
        <div className="m-auto grid max-w-c-xl grid-cols-1 grid-rows-custom gap-x-8 px-4  lg:grid-cols-2">
          <div className="row-start-2 row-end-3 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
            <PageTitle title={ABOUT_TITLE}></PageTitle>
            <p className="mb-4 font-semibold leading-7">
              Firma <span>"Hemet"</span> Henryk Gałecki istnieje na rynku od 2003 roku. Naszą firmę tworzą ludzie z
              pasją i dobrą energią.
            </p>
            <p className="mb-4 leading-7 text-hm-black90">
              Zajmujemy się produkcją i montażem wielofunkcyjnych hal stalowych dla szerokiego zakresu branż, m.in.:
            </p>
            <ul className="">
              <li className="mb-4 flex flex-row items-center text-hm-black75">
                <Dot className="mr-4"></Dot>hale i obiekty stalowe
              </li>
              <li className="mb-4 flex flex-row items-center text-hm-black75">
                <Dot className="mr-4"></Dot>obiekty magazynowe
              </li>
              <li className="mb-4 flex flex-row items-center text-hm-black75">
                <Dot className="mr-4"></Dot>hale produkcyjne, hale obsługowe
              </li>
              <li className="mb-4 flex flex-row items-center text-hm-black75">
                <Dot className="mr-4"></Dot>obiekty użyteczności publicznej
              </li>
            </ul>
            <p className="leading-7">
              Możemy pochwalić się dużymi osiągnięciami w wykonawstwie najbardziej skomplikowanych konstrukcji stalowych
              i montażu na terenie całego kraju i za granicą.
            </p>
          </div>
          <div className="row-start-1 row-end-2 h-full w-full object-fill lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 ">
            <img className="h-full w-full rounded-md " src={'images/IMG_20180625_151921.jpg'} alt="" />
          </div>
        </div>
      </div>
      <AboutPictures></AboutPictures>
      <AboutCooperation></AboutCooperation>
      <AboutCertificates></AboutCertificates>
    </div>
  );
};
