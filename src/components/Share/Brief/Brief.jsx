import React from 'react';
import Button from '../../Common/Button/Button';
import styles from './styles.module.scss'

const Brief = () => {
    return (
        <div className={styles.container}>
            <p className={styles.container_text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Button style={{ "backgroundColor": 'black' }} text='Заповнити зараз' />
        </div>
    );
};

export default Brief;