import React from 'react';
import { Share } from 'lucide-react';
import Header from './Header';
import RiskIndicator from './RiskIndicator';
import StatsRow from './StatsRow';
import { useMonsterCard } from '../../hooks/useMonsterCard';

const MonsterCard: React.FC = () => {
    const { isVisible, data, handleClose, handleShare } = useMonsterCard();

    if (!isVisible) return null;

    return (
        <div className="flex flex-col w-full shadow-2xl rounded-[28px] overflow-hidden font-sans">
            <Header title={data.title} onClose={handleClose} />

            {/* Main Content Area */}
            <div className="bg-[#efeff4] flex flex-col gap-[38px] p-[40px] w-full">
                <RiskIndicator title={data.riskTitle} level={data.riskLevel} />

                {/* Image Container */}
                <div className="bg-white p-[20px] rounded-[12px] relative w-full aspect-square flex items-center justify-center">
                    {/* Placeholder for Monster Image */}
                    <img
                        src="https://placehold.co/400x400/png?text=Monster"
                        alt="Monster"
                        className="w-full h-full object-contain"
                    />

                    {/* Share Button (Absolute) */}
                    <button
                        onClick={handleShare}
                        className="absolute bottom-4 right-4 bg-[#57b271] size-[60px] rounded-[12px] flex items-center justify-center shadow-lg hover:bg-[#469e60] transition-colors"
                        aria-label="Share"
                    >
                        <Share size={32} color="white" />
                    </button>
                </div>

                {/* Description */}
                <div className="bg-white p-[24px] rounded-[12px]">
                    <p className="text-[#646a74] text-[22px] leading-relaxed">
                        {data.description}
                    </p>
                </div>

                <StatsRow label={data.stats.label} value={data.stats.value} />
            </div>

            {/* Footer */}
            <div className="bg-[#475163] h-[112px] flex items-center justify-center relative">
                {/* Logo position would be absolute left if we had it, purely decorative */}
                <div className="absolute left-0 top-0 h-full w-[117px] bg-[#3a4252]/50" /> {/* Mock logo area */}

                <span className="text-white text-[52px]">
                    {data.footerTitle}
                </span>
            </div>
        </div>
    );
};

export default MonsterCard;
