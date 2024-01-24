import React from "react";

export const HomeProjects = () => {
  return (
    <div className="container main-projects">
      <div className="title">Nasze projekty</div>
      <div className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <img src={"images/fake_img.png"} alt=""></img>
            </li>
            <li className="splide__slide">
              <img src={"images/fake_img.png"} alt=""></img>
            </li>
            <li className="splide__slide">
              <img src={"images/fake_img.png"} alt=""></img>
            </li>
          </ul>
        </div>
      </div>
      <div className="see-more">
        <a href="/projects" className="btn btn-xl">
          Zobacz więcej
        </a>
      </div>
    </div>
  );
};
