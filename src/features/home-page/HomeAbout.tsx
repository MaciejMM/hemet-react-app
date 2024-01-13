import React from "react";
import {Link} from "react-router-dom";
export const HomeAbout = ()=>{

    return(
        <div className="container main-about">
            <img src={"images/IMG_20210318_115012.jpg"} alt="" className="img-1 lightbox"></img>
                    <main>
                        <div className="title">O nas</div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                            leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis</div>
                        <Link to={"/about"} className='btn btn-xl mt-40'>Zobacz więcej</Link>
                    </main>
        </div>
    )
}
