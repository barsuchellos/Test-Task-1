import { useState } from 'react';
import icon from '../../images/icons/add.png'
import styles from './styles.module.scss'

const Question = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [iconRotation, setIconRotation] = useState(0);
    
    const toggleExpand = () => {
        setIsOpen(!isOpen)
        setIconRotation(iconRotation + 180)
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.container_question} ${isOpen ? styles.clicked : ''}`} onClick={toggleExpand}>
                <p className={styles.container_title}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <img src={icon} alt="" className={`${styles.containerIcon} ${styles.rotate}`} style={{ transform: `rotate(${iconRotation}deg)` }} />
            </div>
            {isOpen &&
                <p className={styles.container_answer}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            }

        </div>
    );
};

export default Question;