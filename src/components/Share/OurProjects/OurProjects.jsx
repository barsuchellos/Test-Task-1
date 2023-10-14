import React from 'react';
import styles from './styles.module.scss'
import Button from '../Common/Button/Button';
import firstlanding from '../../images/landings/landing2.png'
import Slider from '../Common/Slider/Slider';

const OurProjects = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.container_title}>Наші проекти:</h3>
            <Slider />
        </div>);
};

export default OurProjects;