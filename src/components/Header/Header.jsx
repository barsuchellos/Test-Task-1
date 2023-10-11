import React from 'react';
import logo from '../../images/logo.png'
import styles from './styles.module.scss'
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
//import navbar from '../../json/navbar.json'

const Header = () => {
    const navbar = [
        {
            "title": "SERVICES"
        },
        {
            "title": "PROJECTS"
        },
        {
            "title": "TEAM"
        },
        {
            "title": "UA"
        }
    ]

    return (
        <header className={styles.header}>
            <div className={styles.button_container}>
                <img src={logo} alt="logo" className={styles.logoImage} />
            </div>

            <Navbar name={navbar} />
            <div className={styles.button_container}>
                <Button text='Замовити' />
            </div>
        </header>
    );
};

export default Header;