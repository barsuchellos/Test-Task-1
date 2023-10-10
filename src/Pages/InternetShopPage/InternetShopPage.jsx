import React from 'react';
import styles from '../LandingPage/styles.module.scss'
import Button from '../../components/Button/Button';


import webShop from '../../images/online-payment.png'
import packages from '../../images/icons/packages.png'
import catalog from '../../images/icons/catalog.png'
import search from '../../images/icons/search.png'

const InternetShopPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h3 className={styles.title}>Зручний сайт для бізнесу, який дозволить користувачам:</h3>
                <div className={styles.chooseBox}>
                    <div className={styles.chooseBox_info}>
                        <img src={search} alt="packages Avatar" />
                        <p>
                            Швидко знайти потрібний товар
                        </p>
                    </div>
                    <div className={styles.chooseBox_info}>
                        <img src={catalog} alt="catalog Avatar" />
                        <p>
                            Зробити замовлення у будь-який час
                        </p>
                    </div>
                </div>
                <p className={styles.titleDescription}>
                    Каталог, зручна фільтрація, особистий кабінет і продуманий до деталей інтерфейс точно збільшать кількість ваших клієнтів завдяки комфортному користуванню та легкому оформленню покупки
                </p>
                <div className={styles.chooseBox}>
                    <h4 className={styles.chooseBox_description}>
                        Обирайте цей тип сайту, якщо:
                    </h4>
                    <div className={styles.chooseBox_info}>
                        <img src={packages} alt="packages Avatar" />
                        <p>
                            У вас більше 8 товарів
                        </p>
                    </div>
                    <div className={styles.chooseBox_info}>
                        <img src={catalog} alt="catalog Avatar" />
                        <p>
                            Вам потрібен каталог, корзина, особистий кабінет або інші сторінки такого типу
                        </p>
                    </div>
                </div>
                <Button text='Детальніше' />
            </div>
            <img
                src={webShop}
                alt="web Shop icon"
                className={styles.image}
            />
        </div>
    );
};

export default InternetShopPage;