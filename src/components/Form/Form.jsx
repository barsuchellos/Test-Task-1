import React from 'react';

import styles from './styles.module.scss'
import Button from '../Button/Button';
import Input from '../Input/Input';

const Form = () => {
    return (
        <div className={styles.form}>
            <div>
                <p className={styles.form_title}>
                    Є <span className={styles.form_titleBold}>ідея?</span>
                </p>


                <br />
                <p href="#" className={styles.form_link}>Зв'яжись з нами</p>
            </div>
            <div className={styles.form_block}>
                <Input placeholder='Name' type='text' />
                <Input placeholder='Email' type='email' />
                <Input placeholder='Message' type='text' style={{ padding: '14px 7px 100px' }} />
                <Button text='Send' />
            </div>
        </div>
    );
};

export default Form;