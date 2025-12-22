import React from 'react';
import { ShapeBubbleTail } from './Icons';

export default function ContainerQuestionWhole() {
    return (
        <div className="relative w-full" data-name="Container_Question_Whole">
            {/* Bubble Card - Width 100% of parent (which is 88%) */}
            <div className="relative w-full h-[56.5px] bg-white rounded-[10.4px] flex justify-center items-center shadow-sm">
                <p className="text-[#96908c] text-[23.3px] text-center font-['Inter']">我是谁？</p>
            </div>

            {/* Tail positioned absolutely and centered */}
            <div className="absolute top-[56.5px] left-1/2 -translate-x-1/2 w-[27.8px] h-[10.5px]">
                <div className="w-full h-full rotate-180">
                    <ShapeBubbleTail />
                </div>
            </div>
        </div>
    );
}
