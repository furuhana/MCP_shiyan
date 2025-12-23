import React from 'react';
import { IconCheck } from './Icons';

export default function ConfirmButton({ className = '' }) {
    // User Requirement:
    // - 3D effect via Effects -> Inner Shadow on Layer_Surface_Front
    // - specific shadow: shadow-[inset_0px_-10px_0px_#2F6652]
    // - bg-[#468361]
    // - rounded-[20px]
    // - w-[88%] h-[80px]

    return (
        <button
            className={`
        relative 
        w-[88%] h-[80px] 
        bg-[#468361] 
        rounded-[20px] 
        shadow-[inset_0px_-10px_0px_#2F6652]
        flex items-center justify-center gap-3
        active:scale-95 transition-transform
        ${className}
      `}
        >
            {/* Icon Check - Color #5E9E7C matching text */}
            <div className="w-[34px] h-[34px] flex items-center justify-center">
                <IconCheck className="w-full h-full text-[#5E9E7C]" />
            </div>

            {/* Text "确认" - Color #5E9E7C (based on figma snippet) or Light Green? 
          Wait, usually button text is contrasting. 
          If BG is #468361 (medium green), and Text is #5E9E7B (light green).
          Let's stick to the extracted code's color for now.
      */}
            <span className="text-[#5E9E7B] text-[36px] font-normal leading-normal font-sans">
                确认
            </span>
        </button>
    );
}
