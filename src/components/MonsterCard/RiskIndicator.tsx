import React from 'react';
import { Star } from 'lucide-react';

interface RiskIndicatorProps {
    title: string;
    level: number; // 0-5 theoretically, here 4
}

const RiskIndicator: React.FC<RiskIndicatorProps> = ({ title, level }) => {
    return (
        <div className="bg-white flex items-center justify-between p-[14px] rounded-[12px] w-full shrink-0">
            <span className="text-[#646a74] text-[29px] leading-none">
                {title}
            </span>
            <div className="flex gap-2">
                {[...Array(level)].map((_, i) => (
                    <Star
                        key={i}
                        size={32}
                        className="fill-[#fcd34d] text-[#fcd34d]" // Using yellow for stars
                    />
                ))}
            </div>
        </div>
    );
};

export default RiskIndicator;
