import React from 'react';
import Button from '../../components/Button/Button';
import styles from '../LandingPage/styles.module.scss'

import warning from '../../images/icons/alert.png'
import opportunities from '../../images/icons/opportunities.png'
import trend from '../../images/icons/trend.png'
import idea from '../../images/icons/idea.png'
import sale from '../../images/sale-report.png'

const SiteAuditPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h3 className={styles.title}>
                    Детальний аудит вашого сайту по всім можливим параметрам
                </h3>

                <p className={styles.titleDescription}>
                    В аудиті розглядаються: дизайн, текст, конверсія, технічні данні, індексація пошуковими системами та багато інших характеристик
                </p>

                <div className={styles.chooseBox}>
                    <h4 className={styles.chooseBox_description}>Аудит допоможе вам:</h4>
                    <div className={styles.chooseBox_info}>
                        <img src={warning} alt="warning-Image" />
                        <p>Побачити зроблені помилки</p>
                    </div>
                    <div className={styles.chooseBox_info}>
                        <img src={opportunities} alt="opportunities-Image" />
                        <p>Знайти правильний підхід до своїх клієнтів</p>
                    </div>
                    <div className={styles.chooseBox_info}>
                        <img src={trend} alt="trend-Image" />
                        <p>В рази збільшити показник конверсії</p>
                    </div>
                    <div className={styles.chooseBox_info}>
                        <img src={idea} alt="idea-Image" />
                        <p>
                            Отримати десятки нових ідей для сайту та багато чого іншого.
                        </p>
                    </div>
                </div>
                <Button text='Хочу' />
            </div>
            <img
                src={sale}
                alt="salePhoto"
                className={styles.image}
            />
        </div>
    );
};

export default SiteAuditPage;