import React from 'react';

interface StatsRowProps {
    label: string;
    value: string;
}

const StatsRow: React.FC<StatsRowProps> = ({ label, value }) => {
    return (
        <div className="bg-white flex items-center justify-between p-[14px] rounded-[12px] w-full shrink-0 mt-auto">
            <div className="flex items-center bg-[#fcd34d] px-4 py-1 rounded-md">
                <span className="text-[#6b5826] text-[24px]">
                    {label}
                </span>
            </div>
            <span className="text-[#646a74] text-[24px]">
                {value}
            </span>
        </div>
    );
};

export default StatsRow;
