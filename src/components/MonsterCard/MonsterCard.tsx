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
        <div className="flex flex-col w-full max-w-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-[#F3F4F6] font-sans">
            <Header title={data.title} onClose={handleClose} />

            {/* Main Content Area */}
            <div className="p-4 space-y-4">
                <RiskIndicator title={data.riskTitle} level={data.riskLevel} />

                {/* Image Container with Floating Share Button */}
                <div className="relative w-full aspect-square bg-white rounded-xl flex items-center justify-center border border-gray-100">
                    {/* Placeholder for Monster Image */}
                    <img
                        src="https://placehold.co/400x400/png?text=Monster"
                        alt="Monster"
                        className="w-3/4 h-3/4 object-contain"
                    />

                    {/* Share Button (Absolute) */}
                    <button
                        onClick={handleShare}
                        className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg text-white shadow-md bg-[#5CB85C] hover:bg-green-600 transition-colors"
                        aria-label="Share"
                    >
                        <Share size={20} color="white" />
                    </button>
                </div>

                {/* Description */}
                <div className="text-sm text-gray-500 leading-relaxed bg-white p-3 rounded-lg mt-4">
                    <p>
                        {data.description}
                    </p>
                </div>

                <StatsRow label={data.stats.label} value={data.stats.value} />
            </div>

            {/* Footer */}
            <div className="bg-[#4B5563] p-4 flex justify-center items-center text-white font-medium">
                <span>
                    {data.footerTitle}
                </span>
            </div>
        </div>
    );
};

export default MonsterCard;
