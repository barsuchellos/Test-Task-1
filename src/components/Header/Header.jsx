import React from 'react';
import logo from '../../images/logo.png'
import styles from './styles.module.scss'
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import { navbar } from '../../data/navbar'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.button_container}>
                <img src={logo} alt="logo" className={styles.logoImage} />
            </div>

            <h1 className={styles.header_title}>Easy, quality, IT -
                <span className={styles.header_titleBold}>w</span>inning <span className={styles.header_titleBold}>solutions</span> for your business
            </h1>
            <div className={styles.button_container}>
                <Button text='Замовити' />
            </div>
        </header>
    );
};

export default Header;