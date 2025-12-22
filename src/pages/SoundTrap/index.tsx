import React from 'react';
import styles from './styles.module.css';

// Import Assets
import imgBg from '../../assets/images/sound-trap/img.svg';
import imgBottom from '../../assets/images/sound-trap/img1.svg';
import imgCharacter from '../../assets/images/sound-trap/imgVector.svg';
import imgOpt1 from '../../assets/images/sound-trap/img2.svg';
import imgOpt2 from '../../assets/images/sound-trap/img3.svg';
import imgOpt3 from '../../assets/images/sound-trap/img4.svg';
import imgOpt4 from '../../assets/images/sound-trap/img5.svg';
import imgTitle from '../../assets/images/sound-trap/img6.svg';
import imgConfirmBg from '../../assets/images/sound-trap/img7.svg';
// imgFrame8 seems to be the footer text/logo area or disclaimer
import imgFooter from '../../assets/images/sound-trap/imgFrame8.svg'; 
import imgCheck from '../../assets/images/sound-trap/img8.svg';

const SoundTrap: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Backgrounds */}
      <img src={imgBg} alt="Background" className={styles.bg} />
      <img src={imgBottom} alt="Bottom Curve" className={styles.bottomCurve} />
      <img src={imgCharacter} alt="Character" className={styles.character} />

      {/* Title */}
      <div className={styles.titleBox}>
         <img src={imgTitle} alt="Title Background" className={styles.titleBg} />
         <span className={styles.titleText}>我是谁？</span>
      </div>

      {/* Options */}
      <div className={styles.option1}>
        <img src={imgOpt1} alt="Option 1" className={styles.titleBg} />
        <span className={styles.optionText}>小朋友</span>
      </div>
      <div className={styles.option2}>
        <img src={imgOpt2} alt="Option 2" className={styles.titleBg} />
        <span className={styles.optionText}>爷爷奶奶</span>
      </div>
      <div className={styles.option3}>
        <img src={imgOpt3} alt="Option 3" className={styles.titleBg} />
        <span className={styles.optionText}>男神女神</span>
      </div>
      <div className={styles.option4}>
        <img src={imgOpt4} alt="Option 4" className={styles.titleBg} />
        <span className={styles.optionText}>二刺猿</span>
      </div>

      {/* Footer Area / Disclaimer */}
      <div className={styles.footerArea}>
          <img src={imgFooter} alt="Footer" className={styles.footerBg} />
      </div>

      {/* Confirm Button */}
      <div className={styles.confirmBtn}>
          <img src={imgConfirmBg} alt="Confirm Background" className={styles.confirmBg} />
          <img src={imgCheck} alt="Check" className={styles.checkIcon} />
          <span className={styles.confirmText}>确认</span>
      </div>
    </div>
  );
};

export default SoundTrap;
