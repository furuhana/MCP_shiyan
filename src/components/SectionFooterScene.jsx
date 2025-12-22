import React from 'react';
import {
    BgShapeHill,
    IconSilhouetteMan,
    IconLogoGroup,
    IconLogoLine,
    IconCheck
} from './Icons';

export default function SectionFooterScene() {
    return (
        <div
            className="absolute bottom-0 left-0 w-full h-[291px] pointer-events-none bg-[#475163]"
            data-name="Section_Footer_Scene"
        >
            {/* Background Hill - Fill Container */}
            <div className="absolute bottom-0 left-0 w-full h-full">
                {/* Adjust SVG scaling to fill width, maintain aspect ratio or cover? 
             Figma says "Bg_Shape_Hill must full fill container bottom".
             Given w-full, height might vary if aspect preserved.
             But container is fixed h-[291px] in my code above?
             Wait, if I use h-[291px] and w-full, aspect ratio might break.
             But user instruction: "Background Hill must fill container bottom".
             Let's set h-full w-full object-cover logic effectively on SVG?
             SVG naturally scales. I will use preserveAspectRatio="none" in Icons.jsx?
             Icons.jsx already has preserveAspectRatio="none" for BgShapeHill.
             So w-full h-full will stretch it to fill the 291px height.
         */}
                <BgShapeHill />
            </div>

            {/* Silhouette Man - Centered */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[13.66px] h-[28.83px]">
                <IconSilhouetteMan />
            </div>

            {/* Logo Group - These are absolutely positioned in design. 
          If design is responsive, keeping fixed top/left might be slightly off on wider screens?
          But instruction only specified relative positioning for Man and Button.
          I will keep these as per Figma original absolute relative to the footer container 
          (which is width of screen).
          Actually, if width stretches, left-[49px] stays left. That's fine.
      */}
            <div className="absolute top-[93px] left-[49px] w-[20px] h-[20px]">
                <IconLogoGroup />
            </div>
            <div className="absolute top-[95px] left-[88px] w-[1px] h-[16.6px]">
                <IconLogoLine />
            </div>

            {/* Disclaimer Text */}
            <div className="absolute top-[96px] left-[107px] w-[233px] text-[#667484] text-[7.2px] font-['Inter'] leading-[8.7px]">
                <p>声明：本游戏由无糖信息制作研发，仅供反诈骗知识普及宣传教育使用，</p>
                <p>未经授权禁止盗用或抄袭。</p>
            </div>

            {/* 3D Button - Btn_Confirm_Primary 
          Rule: "Must be inside hill, provide itself pb-[calc(20px+env...)] margin"
          I will position it absolute bottom with full width to center it, 
          and apply the padding to lift it up.
      */}
            <div className="absolute bottom-0 w-full pb-[calc(20px+env(safe-area-inset-bottom))] flex justify-center pointer-events-auto">
                {/* Button Dimensions fixed or responsive?
             Figma width 333px. 
             If I leave it w-[333px] it might overflow on very small screens?
             Max-width constraint on root is 430. 333 fits.
             On iPhone 5/SE (320px) it might be too big.
             "Dimensions adaptation: ... w-[88%]" applied to top elements.
             Should I apply w-[88%] to button too?
             User didn't explicitly say. But "Green confirm button must be located inside...".
             I'll use w-[85%] max-w-[333px] to be safe and responsive.
         */}
                <div className="relative w-[85%] max-w-[333px] h-[100px] cursor-pointer active:scale-95 transition-transform" data-name="Btn_Confirm_Primary">
                    {/* Shadow Layer */}
                    <div className="absolute top-[10px] left-0 w-full h-[90px] bg-[#427c60] rounded-[16px]"></div>

                    {/* Front Layer */}
                    <div className="absolute top-0 left-0 w-full h-[90px] bg-[#427c60] rounded-[16px] flex items-center justify-center">
                        <div className="flex items-center gap-[14px]">
                            <div className="w-[35px] h-[35px]">
                                <IconCheck />
                            </div>
                            <span className="text-[#5e9e7b] text-[36px] font-bold">确认</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
