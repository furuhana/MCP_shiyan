import styles from './Frame35.module.css';
import bgMain from '../../assets/bg_main.svg';
import bgBottom from '../../assets/bg_bottom.svg';
import deco1 from '../../assets/deco_1.svg';
import logoIcon from '../../assets/logo_icon.svg';
import logoDivider from '../../assets/logo_divider.svg';
import Header from '../Header/Header';
import SelectionGrid from '../SelectionGrid/SelectionGrid';
import ConfirmButton from '../ConfirmButton/ConfirmButton';

export default function Frame35() {
    return (
        <div className={styles.container}>
            {/* Background Layers */}
            <img src={bgMain} className={styles.bgMain} alt="" />
            <img src={bgBottom} className={styles.bgBottom} alt="" />

            {/* Content */}
            <div className={styles.content}>
                <Header />

                <SelectionGrid />

                {/* Footer Info */}
                <div className={styles.footerInfo}>
                    <img src={logoIcon} className={styles.logo} alt="Logo" />
                    <img src={logoDivider} className={styles.divider} alt="|" />
                    <p className={styles.disclaimer}>
                        声明：本游戏由无糖信息制作研发，仅供反诈骗知识普及宣传教育使用， 未经授权禁止盗用或抄袭。
                    </p>
                </div>

                <ConfirmButton />
            </div>

            {/* Small vector decor if needed (2015:2) */}
            <img src={deco1} className={styles.deco1} alt="" />
        </div>
    );
}
