import React from 'react';
import { Carousel, Button } from 'react-bootstrap'
import styles from './styles.module.scss'
import video from '../../../video/XiaoYing_Video_1697038318577_HD.mp4'

const Slider = () => {
    return (
        <Carousel >
            <Carousel.Item style={{ height: "720px" }}>
                <div className={styles.landing_1}>
                    <video src={video} autoPlay loop muted className={styles.video}></video>
                </div>

                <Carousel.Caption>
                    <Button size="lg" variant="secondary" className={styles.button}>Перглянути</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "clamp(700px, 25vw, 720px)" }}>
                <div className={styles.landing_1}>
                    <video src={video} autoPlay loop muted className={styles.video}></video>
                </div>
                <Carousel.Caption>
                    <Button size="lg" variant="secondary" className={styles.button}>Перглянути</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "720px" }}>
                <div className={styles.landing_1}>
                    <video src={video} autoPlay loop muted className={styles.video}></video>
                </div>
                <Carousel.Caption>
                    <Button size="lg" variant="secondary" className={styles.button}>Перглянути</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;