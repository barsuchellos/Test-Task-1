import React from 'react';

import styles from './styles.module.scss'
import Button from '../Button/Button';
import Input from '../Input/Input';

const Form = () => {
    return (
        <div className={styles.form}>
            <div>
                <p className={styles.form_title}>
                    Have an idea?
                </p>
                <br />
                <p href="#" className={styles.form_link}>Tell us about it</p>
            </div>
            <div className={styles.form_block}>
                <Input placeholder='Name' type='text' />
                <Input placeholder='Email' type='email' />
                <Input placeholder='Message' type='text' style={{ padding: '8px 8px 100px 8px' }} />
                <Button text='Send'/>
            </div>
        </div>
    );
};

export default Form;