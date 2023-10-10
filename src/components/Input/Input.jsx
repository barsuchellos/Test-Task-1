import React from 'react';
import styles from './styles.module.scss'

const Input = ({placeholder="text", type='text', style}) => {

    return (
        <input style={style} type={type} className={styles.input} placeholder={placeholder}/>
    );
};

export default Input;