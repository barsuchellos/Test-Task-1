import React from 'react';
import Container from '../Container/Container';
import styles from './styles.module.scss'

const WhyUs = () => {
    return (
        <div style={{marginTop:100}}>
            <h2 className={styles.title}>Чому ми:</h2>
            <div className={styles.containerBox}>
                <Container/>
            </div>
        </div>
    );
};

export default WhyUs;