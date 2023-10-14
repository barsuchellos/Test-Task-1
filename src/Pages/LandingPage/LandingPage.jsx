import React from 'react';
import landing from '../../images/landing-page.png'
import Button from '../../components/Common/Button/Button';

import styles from './styles.module.scss'

import complete from '../../images/icons/completed-task (1).png'
import basket from '../../images/icons/wicker-basket.png'
import bag from '../../images/icons/shop.png'

const LandingPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h3 className={styles.title}>
                    Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація
                </h3>

                <p className={styles.titleDescription}>
                    Завдяки зручності такого формату, можна легко подати користувачу всю
                    важливу інформацію та швидко підвести його до покупки
                </p>

                <div className={styles.chooseBox}>
                    <h4 className={styles.chooseBox_description}>Обирайте цей тип сайту, якщо:</h4>
                    <div className={styles.chooseBox_info}>
                        <img src={complete} alt="complete-Image" />
                        <p>Ви хочете презентувати власний інфо-продукт, послугу, книгу і т.д.</p>
                    </div>
                    <div className={styles.chooseBox_info}>
                        <img src={basket} alt="baske" />
                        <p>У вас невелика кількість продуктів (до 8)</p>
                    </div>
                    <div className={styles.chooseBox_info}>
                        <img src={bag} alt="bag" />
                        <p>Вам потрібне коротке портфоліо спеціаліста або сайт-візитка</p>
                    </div>
                </div>
                <Button text='Хочу' />
            </div>
            <img
                src={landing}
                alt="landingPhoto"
                className={styles.image}
            />
        </div>
    );
};

export default LandingPage;