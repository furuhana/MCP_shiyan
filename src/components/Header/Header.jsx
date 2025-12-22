import styles from './Header.module.css';
import arrowDown from '../../assets/arrow_down.svg';

export default function Header() {
    return (
        <div className={styles.header}>
            {/* Frame 10 -> Frame 9 -> Text */}
            <div className={styles.titleBox}>
                <div className={styles.title}>我是谁?</div>
            </div>
            <div className={styles.arrowBox}>
                <img src={arrowDown} className={styles.arrow} alt="v" />
            </div>
        </div>
    );
}
