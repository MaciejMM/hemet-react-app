import React from 'react';
import './style/main.scss';
import { Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {HomePage} from "./features/home-page/HomePage";
import {ContactPage} from "./features/contact-page/ContactPage";
import {Projects} from "./pages/Projects";
import {Services} from "./pages/Services";
import {AboutPage} from "./features/about-page/AboutPage";



const App = () => {


    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/contacts" element={<ContactPage/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
            <Footer/>
        </div>

    )

}

export default App;
