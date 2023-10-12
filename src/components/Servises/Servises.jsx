import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { pages } from '../../data/pages'
import styles from './style.module.scss'

import IndividualConsultationPage from '../../Pages/IndividualConsultationPage/IndividualConsultationPage';
import InternetShopPage from '../../Pages/InternetShopPage/InternetShopPage';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import MultiSitePage from '../../Pages/MultiSitePage/MultiSitePage';
import SiteAuditPage from '../../Pages/SiteAuditPage/SiteAuditPage';


const Servises = () => {

    const elements = pages.map(({ title, path }) => {
        console.log(path);
        return (
            <NavLink to={path} className={styles.link}>{title}</NavLink>
        )
    })

    return (
        <BrowserRouter>
            <h2 className={styles.title}>Послуги</h2>
            <div className={styles.box}>
                <div className={styles.container}>
                    {elements}
                </div>
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    <Route path='/MultiSitePage' element={<MultiSitePage />} />
                    <Route path='/InternetShopPage' element={<InternetShopPage />} />
                    <Route path='/SiteAuditPage' element={<SiteAuditPage />} />
                    <Route path='/IndividualConsultationPage' element={<IndividualConsultationPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Servises;