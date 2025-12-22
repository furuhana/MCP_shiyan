import styles from './OptionCard.module.css';

export default function OptionCard({ text, bg }) {
    return (
        <div className={styles.card}>
            <img src={bg} className={styles.cardBg} alt="" />
            <span className={styles.text}>{text}</span>
        </div>
    );
}
