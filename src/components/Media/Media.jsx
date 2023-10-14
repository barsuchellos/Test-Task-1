import styles from './styles.module.scss'
import instagram from '../../images/social_media/Instagram (1).svg'
import facebook from '../../images/social_media/Facebook (1).svg'
import gitHub from '../../images/social_media/GitHub.svg'
import twitter from '../../images/social_media/Twitter (1).svg'


const Media = () => {


    return (
        <div className={styles.container}>
            <h3 className={styles.container_title}>Our Social Media:</h3>
            <div className={styles.socialMediaBox}>
                <a href='https://www.instagram.com/' className={styles.socialMediaBox_link_box}>
                    <img
                        src={instagram}
                        alt="instagram"
                        className={styles.socialMediaBox_icon}
                    />
                    <p className={styles.socialMediaBox_link}>
                        instagram.com
                    </p>
                </a>
                <a href='https://www.facebook.com/' className={styles.socialMediaBox_link_box}>
                    <img
                        src={facebook}
                        alt="facebook"
                        className={styles.socialMediaBox_icon}
                    />
                    <p className={styles.socialMediaBox_link}>
                        facebook.com
                    </p>
                </a>
                <a href='https://github.com/' className={styles.socialMediaBox_link_box}>
                    <img
                        src={gitHub}
                        alt="gitHub"
                        className={styles.socialMediaBox_icon}
                    />
                    <p className={styles.socialMediaBox_link}>
                        github.com
                    </p>
                </a>
                <a href='https://twitter.com/' className={styles.socialMediaBox_link_box}>
                    <img
                        src={twitter}
                        alt="twitter"
                        className={styles.socialMediaBox_icon}
                    />
                    <p className={styles.socialMediaBox_link}>
                        twitter.com
                    </p>
                </a>
            </div>
        </div>

    );
};

export default Media;