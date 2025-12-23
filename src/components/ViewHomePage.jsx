import React from 'react';
import { IconCheck, ShapeBubbleTail, BgShapeHill, IconSilhouetteMan, IconLogo, IconLogoLine } from './Icons';

const OptionButton = ({ label }) => (
    <button className="flex items-center justify-center w-full aspect-[153/102] bg-[#a08c82] rounded-[10px] shadow-[inset_0px_0px_20px_rgba(0,0,0,0.1)] active:scale-95 transition-transform duration-100">
        <span className="text-white text-xl font-normal leading-normal">{label}</span>
    </button>
);

export default function ViewHomePage() {
    return (
        <div id="View_Home_Page" className="relative flex flex-col items-center justify-between w-full min-h-[100dvh] bg-custom-bg overflow-hidden viewport-fit-cover">

            {/* Container_Main_Content */}
            <main className="flex flex-col items-center w-[88%] mt-[60px] gap-[40px] z-10">

                {/* Question Bubble Group */}
                <div className="flex flex-col items-center w-full">
                    <div className="bg-white rounded-[10.37px] px-8 py-4 w-full flex items-center justify-center shadow-sm">
                        <h1 className="text-[#96908c] text-[23px] font-normal font-sans">我是谁？</h1>
                    </div>
                    {/* Bubble Tail */}
                    <div className="w-[28px] h-[11px] text-white rotate-180 -mt-[1px]">
                        <ShapeBubbleTail className="w-full h-full" />
                    </div>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-2 gap-x-[15px] gap-y-[15px] w-full mt-4">
                    <OptionButton label="小朋友" />
                    <OptionButton label="爷爷奶奶" />
                    <OptionButton label="男神女神" />
                    <OptionButton label="二刺猿" />
                </div>

            </main>

            {/* Section_Footer_Scene */}
            {/* FIX 3: Added mt-auto to push footer to bottom */}
            {/* FIX 4: Added bg-[#434D5F] to fill safe area */}
            <footer className="w-full relative mt-auto flex flex-col items-center pb-[calc(20px+env(safe-area-inset-bottom))] bg-[#434D5F]">

                {/* Silhouette Man */}
                {/* FIX 1: Ensure inline SVG is used. The IconSilhouetteMan component returns an inline SVG. */}
                <div className="absolute bottom-[calc(100%-10px)] z-20 w-[14px] h-[29px] text-[#475163]">
                    <IconSilhouetteMan className="w-full h-full" />
                </div>

                {/* Hill Background */}
                <div className="absolute bottom-0 left-0 w-full h-[263px] text-[#475163] z-0">
                    <BgShapeHill className="w-full h-full" />
                </div>

                {/* Content Wrapper inside Hill */}
                <div className="relative z-10 flex flex-col items-center w-full pt-[60px] gap-6">

                    {/* Disclaimer Row */}
                    <div className="flex flex-row items-center justify-center gap-3 text-[#667584]">
                        <div className="w-[20px] h-[20px]">
                            <IconLogo className="w-full h-full" />
                        </div>
                        <div className="w-[1px] h-[16px]">
                            <IconLogoLine className="w-full h-full" />
                        </div>
                        <p className="text-[10px] leading-tight opacity-60 max-w-[200px]">
                            声明：本游戏由无糖信息制作研发，仅供反诈骗知识普及宣传教育使用，未经授权禁止盗用或抄袭。
                        </p>
                    </div>

                    {/* Confirm Button */}
                    {/* FIX 2: Fixed button layout and icon */}
                    <button className="relative w-[310px] h-[75px] bg-custom-green rounded-[20px] shadow-[inset_0px_-10px_0px_0px_#2f6652] flex items-center justify-center gap-x-2 group active:shadow-[inset_0px_-5px_0px_0px_#2f6652] active:translate-y-[5px] transition-all">
                        {/* Removed duplicate icon divs and circle background that was causing issues.
                             Used direct flex layout 'gap-x-2' for centering. 
                         */}
                        <div className="w-[35px] h-[35px]">
                            <IconCheck className="w-full h-full text-[#5e9e7b]" />
                        </div>
                        <span className="text-[#5e9e7b] text-[36px] font-normal tracking-wide">确认</span>
                    </button>

                </div>
            </footer>
        </div>
    );
}
