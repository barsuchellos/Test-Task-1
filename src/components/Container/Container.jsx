import React from 'react';
import styles from './styles.module.scss'
import posts from '../.././Json/posts.json'
import lock from "../../images/icons8-lock.svg"

const Container = () => {
    const elements = posts.map(({ id, title, description, link }) => {
        return (
            <li key={id} className={styles.container}>
                <img src={link} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
            </li>
        )
    })

    return (
        elements
    );
};

export default Container;