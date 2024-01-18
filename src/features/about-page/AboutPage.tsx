import React from "react";
import {Breadcrumb} from "../../components/Breadcrumb";

export const AboutPage = () => {

    const BREADCRUMB_TITLE = "O nas";

    return (
        <div className="pb-32">
            <Breadcrumb title={BREADCRUMB_TITLE}></Breadcrumb>
            <div className="container">
                <div className="title">O nas</div>

                <div className="about-grid">
                    <div className="about-text text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                        feugiat
                        et consequat augue. Pellentesque id nec tellus, dictum fringilla. Egestas vel sed urna praesent
                        est.
                        Varius enim aenean dolor id magna venenatis, hendrerit. Pellentesque amet diam pellentesque sed.
                        Iaculis rhoncus tortor egestas nunc enim quam dictum rutrum. Pellentesque nisl aliquet volutpat
                        proin mi diam. Non rhoncus facilisi turpis id nibh nibh et sed.
                    </div>
                    <img src={'images/IMG_20180802_111201.jpg'} alt="" className="pic-1"></img>
                    <img src={'images/IMG_20180625_151921.jpg'} alt="" className="pic-2"></img>

                    <div className=" about-add text">
                        Pretium sem ornare facilisis nibh maecenas. Consequat semper scelerisque arcu id nulla. Interdum
                        magna scelerisque consequat turpis nisl ac. Ac sit amet, maecenas pellentesque leo. In at
                        vulputate
                        tincidunt turpis cras sed leo, malesuada. Urna, libero urna, dolor mauris. Laoreet eleifend eget
                        nec
                        vestibulum. Arcu eu suspendisse consectetur ut lacinia lorem sem.
                    </div>

                    <img src={'images/IMG_20191030_112518.jpg'} alt="" className="pic-3"></img>
                </div>
            </div>
        </div>

    )
};
