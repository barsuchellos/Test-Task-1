import React from 'react';
import styles from './styles.module.scss'


const Navbar = ({ name }) => {
    const elements = name.map(({ title }) => {
        return (
            <a href="" className={styles.navigation_link}>
                <h1>{title}</h1>
            </a>
        )
    })


    return (
        <div className={styles.navigation}>
            {elements}
        </div>
    );
};

export default Navbar;