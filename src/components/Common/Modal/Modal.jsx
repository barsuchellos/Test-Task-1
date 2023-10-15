import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './stle.module.scss'
import icon from '../../../images/modal/chat.png'
import girl from '../../../images/modal/girl.png'
import telegram from '../../../images/modal/telegram (1).svg'
import viber from '../../../images/modal/voice-call.svg'
const modal = document.getElementById("modal-root");

const Modal = () => {
    const [visible, setVisible] = useState(false);
    const [opacity, setOpacity] = useState(true);
    const realTime = new Date();
    const minutes = realTime.getMinutes() < 10 ? `0${realTime.getMinutes()}` : realTime.getMinutes();

    const handleClick = () => {
        setVisible((prev) => !prev);
    }

    useEffect(() => {
        const handleScroll = () => {
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

            if (isAtBottom) {
                setOpacity(false);
                setVisible(false)
            } else {
                setOpacity(true);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return createPortal(
        (
            <>
                {visible &&
                    <div className={styles.modal_box}>
                        <div className={styles.modal_account}>
                            <div
                                src={girl}
                                alt="girl"
                                className={styles.modal_accountIcon}
                            />

                            <div className={styles.modal_accountDescription}>
                                <h5 className={styles.modal_accountDescription_name}>Anastasia</h5>
                                <p className={styles.modal_accountDescription_text}>Зазвичай відповідає протягом 5 хвилин</p>
                            </div>
                        </div>

                        <p className={styles.modal_time}>{`${realTime.getHours()}:${minutes}`}</p>

                        <div className={styles.modal_account} style={{ gridTemplateColumns: "40px 230px" }}>
                            <div src={girl} alt="" className={styles.modal_accountIcon} style={{ width: 30, height: 30 }} />

                            <div className={styles.modal_chat} style={{ backgroundColor: "#f0f0f0", padding: 10, borderRadius: "0px 10px 6px 6px", color: '#333' }}>
                                <p>
                                    Вітаю!👋 <br />
                                    Чим я можу допомогти?
                                </p>
                            </div>

                        </div>

                        <div className={styles.modal_linksContainer}>
                            <p className={styles.modal_linksContainerTitle}>Розпочати чат в</p>
                            <div className={styles.modal_linksContainer_box}>
                                <div style={{ backgroundColor: '#0088cc' }} className={`${styles.modal_linksContainer_box_1} ${telegram}`}>
                                    <img src={telegram} alt="" style={{ height: 50, width: 50 }} />
                                    <p>Telegram</p>
                                </div>

                                <div style={{ backgroundColor: "#685ab1" }} className={styles.modal_linksContainer_box_1} >
                                    <img src={viber} alt="" style={{ height: 35, width: 44 }} />
                                    <p>Viber</p>
                                </div>
                            </div>

                        </div>
                    </div>
                }
                {
                    opacity &&
                        <div className={styles.modal} onClick={handleClick}>
                            <img src={icon} alt="iconChat" />
                        </div>
                }

            </>
        ), modal
    )

};

export default Modal;