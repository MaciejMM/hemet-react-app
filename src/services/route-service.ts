import {ContactPage} from "../features/contact-page/ContactPage";
import {Projects} from "../pages/Projects";
import {Services} from "../pages/Services";
import {AboutPage} from "../features/about-page/AboutPage";

type LinkParam = {
    path: string;
    text: string;
    valid: boolean;
    component: () => React.JSX.Element
}


export const getAllRoutes = (): LinkParam[] => {
    return [
        {path: "/about", text: "O nas", valid: true, component: AboutPage},
        {path: "/services", text: "Usługi", valid: true, component: Services},
        {path: "/projects", text: "Projekty", valid: true, component: Projects},
        {path: "/contacts", text: "Kontakt", valid: true, component: ContactPage},
    ];
}

