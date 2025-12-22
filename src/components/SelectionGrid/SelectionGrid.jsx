import styles from './SelectionGrid.module.css';
import OptionCard from '../OptionCard/OptionCard';
import bgChildren from '../../assets/card_bg_1.svg';
import bgGrandparents from '../../assets/card_bg_2.svg';
import bgGod from '../../assets/card_bg_3.svg';
import bgAnime from '../../assets/card_bg_4.svg';

export default function SelectionGrid() {
    const options = [
        { id: 1, text: "小朋友", bg: bgChildren, alt: "Children" },
        { id: 2, text: "爷爷奶奶", bg: bgGrandparents, alt: "Grandparents" },
        { id: 3, text: "男神女神", bg: bgGod, alt: "God/Goddess" },
        { id: 4, text: "二刺猿", bg: bgAnime, alt: "Anime" }
    ];

    return (
        <div className={styles.grid}>
            {options.map(opt => (
                <OptionCard key={opt.id} text={opt.text} bg={opt.bg} />
            ))}
        </div>
    );
}
