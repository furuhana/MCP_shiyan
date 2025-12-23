import React from 'react';
import { Header } from './Header';
import { MainContent } from './MainContent';
import { Footer } from './Footer';
import { useMonsterCard } from '../../hooks/useMonsterCard';
import { MonsterCardProps } from '../../types/monsterCard';

export const MonsterCard: React.FC<MonsterCardProps> = (props) => {
    const { isVisible, handleClose, handleShare } = useMonsterCard();

    if (!isVisible) return null;

    return (
        <div className="w-[800px] flex flex-col relative shadow-2xl rounded-[28px] font-sans overflow-hidden mx-auto my-10 bg-transparent">
            <Header
                title={props.title}
                onClose={props.onClose || handleClose}
            />
            <MainContent
                riskLevel={props.riskLevel}
                riskRating={props.riskRating}
                description={props.description}
                timerSeconds={props.timerSeconds}
                imageUrl={props.imageUrl}
                onShare={props.onShare || handleShare}
            />
            <Footer
                footerTitle={props.footerTitle}
                brandLogoUrl={props.brandLogoUrl}
            />
        </div>
    );
};

export default MonsterCard;
