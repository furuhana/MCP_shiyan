import React from 'react';

const options = [
    "小朋友",
    "爷爷奶奶",
    "男神女神",
    "二刺猿"
];

export default function GridContainerOptions() {
    return (
        <div className="flex flex-wrap gap-x-[20px] gap-y-[19px] w-[332px] justify-center content-start" data-name="Grid_Container_Options">
            {options.map((text, index) => (
                <div
                    key={index}
                    className="w-[155.6px] h-[89.7px] bg-[#9e8a80] rounded-[10px] flex justify-center items-center cursor-pointer active:scale-95 transition-transform shadow-sm"
                    data-name={`Btn_Option_Item_${index + 1}`}
                >
                    <p className="text-white text-[26.4px] font-['Inter'] text-center">{text}</p>
                </div>
            ))}
        </div>
    );
}
