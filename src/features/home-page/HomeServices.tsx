import React from 'react';

type Service = {
  name: string;
};

export const HomeServices = () => {
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
      name: 'Silosy różnego typu',
    },
    {
      name: 'Przenośniki różnego typu',
    },
    {
      name: 'Pomosty stalowe',
    },
    {
      name: 'Wyroby ze stali kwasoodpornej i węglowej',
    },
  ];

  return (
    <div className="container main-services pb-16 lg:py-20 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <img
        className="hidden lg:block lg:col-start-1 lg:col-end-2 lg:h-full lg:object-cover"
        src={'images/IMG_20190704_121515.jpg'}
        alt=""
      ></img>
      <main className="lg:col-start-2 lg:col-end-3 lg:flex lg:flex-col lg:justify-center">
        <div className="title">Nasze usługi</div>
        {services.map((service, index) => {
          return (
            <div className="card px-4" key={index}>
              <div className="card-title">
                <img src={'images/red-crane-services.svg'} alt=""></img>
                {service.name}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};
