import React from 'react';
import { Star } from 'lucide-react';

interface RiskIndicatorProps {
    title: string;
    level: number;
}

const RiskIndicator: React.FC<RiskIndicatorProps> = ({ title, level }) => {
    return (
        <div className="flex justify-between items-center bg-white p-2 rounded-lg">
            <span className="text-gray-700 font-medium">
                {title}
            </span>
            <div className="flex gap-1">
                {[...Array(level)].map((_, i) => (
                    <Star
                        key={i}
                        size={20}
                        className="fill-[#fcd34d] text-[#fcd34d]"
                    />
                ))}
            </div>
        </div>
    );
};

export default RiskIndicator;
