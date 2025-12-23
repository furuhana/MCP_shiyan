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
        <div className="flex flex-col rounded-[32px] overflow-hidden shadow-2xl max-w-md mx-auto w-full font-sans bg-[#F3F5F9]">
            <Header title={data.title} onClose={handleClose} />

            {/* Main Content (Body) */}
            <div className="bg-[#F3F5F9] p-5 flex flex-col h-full">
                <RiskIndicator title={data.riskTitle} level={data.riskLevel} />

                {/* White Inner Card */}
                <div className="bg-white rounded-[20px] p-6 relative shadow-sm w-full mb-4">
                    {/* Monster Image */}
                    <img
                        src="https://placehold.co/400x400/png?text=Monster"
                        alt="Monster"
                        className="w-full h-auto object-contain"
                    />

                    {/* Fixed Share Button (Absolute) */}
                    <button
                        onClick={handleShare}
                        className="absolute bottom-4 right-4 w-12 h-12 bg-[#5CB85C] rounded-xl flex items-center justify-center text-white shadow-lg z-10 hover:bg-green-600 transition-colors"
                        aria-label="Share"
                    >
                        <Share size={24} color="white" />
                    </button>
                </div>

                {/* Description (Preserved from previous step but adapting to flow) */}
                <div className="bg-white rounded-lg p-3 mb-4 shadow-sm">
                    <p className="text-sm text-gray-500 leading-relaxed">
                        {data.description}
                    </p>
                </div>

                <StatsRow label={data.stats.label} value={data.stats.value} />
            </div>

            {/* Footer */}
            <div className="bg-[#4B5563] h-14 flex items-center justify-center shrink-0">
                <span className="text-white font-medium">
                    {data.footerTitle}
                </span>
            </div>
        </div>
    );
};

export default MonsterCard;
