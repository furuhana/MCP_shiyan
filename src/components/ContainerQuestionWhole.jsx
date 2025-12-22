import React from 'react';
import { imgShapeBubbleTail } from '../assets/images';

export default function ContainerQuestionWhole() {
    return (
        <div className="relative w-[333px] h-[67px]" data-name="Container_Question_Whole">
            {/* Bubble Card relative container */}
            <div className="relative w-full h-[56.5px] bg-white rounded-[10.4px] flex justify-center items-center shadow-sm">
                <p className="text-[#96908c] text-[23.3px] text-center font-['Inter']">我是谁？</p>
            </div>

            {/* Tail positioned absolutely */}
            {/* Based on Figma: left 152.55, top 56.53. Container width 332.95. 
          152.55 is roughly center. 
          Center of 333 is 166.5. 152.5 is slightly left?
          Let's use the exact absolute coordinates from the parent's perspective or relative to this container.
          The snippet showed: left-[152.55px] top-[56.53px]
      */}
            <div className="absolute top-[56.5px] left-[153px] w-[27.8px] h-[10.5px]">
                <div className="w-full h-full rotate-180">
                    <img alt="" className="w-full h-full block" src={imgShapeBubbleTail} />
                </div>
            </div>
        </div>
    );
}
