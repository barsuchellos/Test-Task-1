import React from 'react';
import styles from './styles.module.scss'
import Question from '../../Common/Question/Question';
const Faq = () => {

    return (
        <div className={styles.container}>
            <h3 className={styles.container_title}>FAQ</h3>
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
        </div>
    );
};

export default Faq;