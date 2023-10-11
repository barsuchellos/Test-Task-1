import React from 'react';
import styles from './styles.module.scss'
import Button from '../Button/Button';

const OurProjects = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.container_title}>Our Projects:</h3>
            <div className={styles.container_projectBox}>
                <div className={styles.container_project}>
                    <Button className={styles.Button} />
                </div>
                <div className={styles.container_project}>
                    <div></div>
                    <Button />
                </div>
                <div className={styles.container_project}>
                    <div></div>
                    <Button />
                </div>
                <div className={styles.container_project}>
                    <Button />
                </div>
            </div>
        </div>

    );
};

export default OurProjects;