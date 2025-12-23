import React from 'react';
import { Star } from 'lucide-react';

interface RiskIndicatorProps {
    title: string;
    level: number;
}

const RiskIndicator: React.FC<RiskIndicatorProps> = ({ title, level }) => {
    return (
        <div className="bg-white rounded-lg p-3 mb-4 flex justify-between items-center shadow-sm w-full">
            <span className="text-gray-700 font-bold">
                {title}
            </span>
            <div className="text-yellow-400 text-lg flex gap-1">
                {[...Array(level)].map((_, i) => (
                    <Star
                        key={i}
                        size={18}
                        className="fill-current text-inherit"
                    />
                ))}
            </div>
        </div>
    );
};

export default RiskIndicator;
