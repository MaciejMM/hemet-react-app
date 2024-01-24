import React from "react";

type Service = {
  name: string;
};

export const HomeServices = () => {
  const services: Service[] = [
    {
      name: "Prefabrykacja i montaż konstrukcji stalowych",
    },
    {
      name: "Konstrukcje ze stali kwasoodpornej",
    },
    {
      name: "Zbiorniki ze stali zwykłej i kwasoodpornej",
    },
    {
      name: "Rurociągi ze stali zwykłej i kwasoodpornej",
    },
    {
      name: "Silosy różnego typu",
    },
    {
      name: "Przenośniki różnego typu",
    },
    {
      name: "Pomosty stalowe",
    },
    {
      name: "Wyroby ze stali kwasoodpornej i węglowej",
    },
  ];

  return (
    <div className="container main-services">
      <div className="title">Nasze usługi</div>
      <img
        className="service-img lightbox h-full"
        src={"images/IMG_20190704_121515.jpg"}
        alt=""
      ></img>
      <main>
        {services.map((service, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-title">
                <img src={"images/red-crane-services.svg"} alt=""></img>
                {service.name}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};
