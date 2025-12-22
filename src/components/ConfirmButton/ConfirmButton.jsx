import styles from './ConfirmButton.module.css';
import btnBg from '../../assets/button_bg_1.svg';
import btnIcon from '../../assets/button_icon.svg';

export default function ConfirmButton() {
    return (
        <div className={styles.container}>
            {/* Background often complex, using the svg extracted */}
            <div className={styles.buttonWrapper}>
                <img src={btnBg} className={styles.bg} alt="" />
                <div className={styles.content}>
                    <img src={btnIcon} className={styles.icon} alt="" />
                    <span className={styles.text}>确认</span>
                </div>
            </div>
        </div>
    );
}
