import React from "react";

type HomeWhyContent = {
    title: string;
    textContent: string;
    tooltip: boolean;
}
export const HomeWhyUs = () => {

    const whyUsList: HomeWhyContent[] = [{
        title: 'Zakład produkcyjny',
        textContent: `Dzięki własnemu zakładowi jesteśmy samowystarczalni. Posiadamy m.in. wypalarkę plazmową, prasę do wybijania otworów, tokarkę, frezarkę, gilotynę, piły taśmowe oraz szereg innych maszyn.`,
        tooltip: false,
    },
        {
            title: 'Certyfikowani spawacze',
            textContent: `Zatrudniamy spawaczy, którzy posiadają certyfikaty nadane przez TUV SUD Polska Sp. z o.o. Warszawa oraz Instytut Spawalinictwa w Gliwicach.`,
            tooltip: true,
        },
        {
            title: 'Park maszynowy',
            textContent: `Posiadamy własny park maszynowy. Znajdują sie tam m.in. dźwigi oraz podnośniki. Zapewnia nam to pełną niezależność.`,
            tooltip: false,
        },]

    const sectionStyle = {
        backgroundColor:"rgb(242,245,247)",
        paddingTop:"80px",
        paddingBottom:"80px"
    }

    return (
        <div style={sectionStyle}>
            <div className="container main-why_us">
                <img className="lightbox" src={'images/IMG_20180608_132959.jpg'}
                     alt=""></img>
                <main>
                    <div className="title text-5xl">Dlaczego my</div>
                    {
                        whyUsList.map((value, index) => {
                            return (
                                <div className="card shadow-mb8" key={index}>
                                    <div className="card__title">{value.title}</div>
                                    <div className="card__text text">{value.textContent}</div>
                                </div>
                            )
                        })
                    }
                </main>
            </div>
        </div>

    )
}
