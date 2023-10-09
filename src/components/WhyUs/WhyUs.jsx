import React from 'react';
import Container from '../Container/Container';
import styles from './styles.module.scss'

const WhyUs = () => {
    return (
        <div>
            <h2 className={styles.title}>Why Us</h2>
            <div className={styles.containerBox}>
                <Container/>
            </div>
        </div>
    );
};

export default WhyUs;