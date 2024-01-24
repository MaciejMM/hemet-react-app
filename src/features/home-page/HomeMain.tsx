import React from "react";

export const HomeMain = () => {
  return (
    <div className="home-main">
      <img src={"images/DJI_0430.jpg"} alt=""></img>
      <div className="container">
        <h3>Konstrukcje stalowe</h3>
        <h1>HEMET</h1>
        <div className="description">
          20 lat doświadczenia w budowaniu <span>konstrukcji stalowych</span>
        </div>
        <div className="btns">
          <a className="btn btn-xl" href="/projects">
            Nasze projekty
          </a>
          <a className="btn btn-xl" href="/contacts">
            kontakt
          </a>
        </div>
      </div>
    </div>
  );
};
