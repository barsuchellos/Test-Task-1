import React from 'react';
import styles from '../LandingPage/styles.module.scss'
import image from '../../images/icons/landing-page (1).png'
import Button from '../../components/Common/Button/Button';


import userAvatar from '../../images/icons/user-avatar (1).png'
import program from '../../images/icons/program.png'
import responsive from '../../images/icons/responsive.png'

const MultiSitePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h3 className={styles.title}>Величезне поле для креативу</h3>
                <p className={styles.titleDescription}>
                    Ви можете використати будь-яку кількість сторінок для того, щоб розповісти про свій бізнес, показати свій продукт, презентувати компанію або просто поділитись корисною інформацією
                </p>
                <div className={styles.chooseBox}>
                    <h4 className={styles.chooseBox_description}>
                        Обирайте цей тип сайту, якщо:
                    </h4>
                    <div className={styles.chooseBox_info}>
                        <img src={responsive} alt="responsive" />
                        <p>
                            Вам потрібно більше однієї сторінки на сайті
                        </p>
                    </div>
                    <div className={styles.chooseBox_info}>
                        <img src={userAvatar} alt="User Avatar" />
                        <p>
                            Ви плануєте зробити блог та/або особистий кабінет
                        </p>
                    </div>
                    <div className={styles.chooseBox_info}>
                        <img src={program} alt="program Avatar" />
                        <p>
                            На сайті передбачається будь-який інший додатковий функціонал
                        </p>
                    </div>
                </div>
                <Button text='Хочу' />
            </div>
            <img
                src={image}
                alt=""
                className={styles.image}
            />
        </div>
    );
};

export default MultiSitePage;