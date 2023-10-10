import React from 'react';
import Button from '../../components/Button/Button';


import styles from '../LandingPage/styles.module.scss'

import services from '../../images/negotiation.png'
import time from '../../images/icons/time.png'
import idea from '../../images/icons/idea.png'



const IndividualConsultationPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h3 className={styles.title}>
                    Ідеальний початок для просування вашого бізнесу в інтернеті
                </h3>

                <p className={styles.titleDescription}>
                    Окрім готового фундаменту для власного сайту, ви отримаєте рекомендації, які допоможуть вам швидко досягнути успіху в просуванні свого бізнесу
                </p>

                <div className={styles.chooseBox}>
                    <div className={styles.chooseBox_info}>
                        <img src={time} alt="complete-Image" />
                        <p>Консультація триває 1.5 години в онлайн форматі</p>
                    </div>
                    <div className={styles.chooseBox_info}>
                        <img src={idea} alt="baske" />
                        <p>Ви можете вказати додаткові запитання щодо вашого бізнесу та, за попереднім узгодженням, я включу їх в нашу консультацію</p>
                    </div>
                </div>
                <Button text='Детальніше' />
            </div>
            <img
                src={services}
                alt="servicesPhoto"
                className={styles.image}
            />
        </div>
    );
};

export default IndividualConsultationPage;