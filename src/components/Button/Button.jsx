import React from 'react';
import styles from './styles.module.scss'

const Button = ({text='name', style}) => {
    return (
        <button style={style} className={styles.button}>
            {text}
            <img src="https://makedon.com.ua/img/icons/arrow_sl.svg" alt="" className={styles.button_arrow}/>
        </button>
    );
};

export default Button;