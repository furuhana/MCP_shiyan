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
            className="relative w-full h-[291px] pb-[calc(20px+env(safe-area-inset-bottom))] box-content flex-none"
            data-name="Section_Footer_Scene"
        >
            {/* Background Hill - Anchored to bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[390px] h-[263px]">
                <BgShapeHill />
            </div>

            {/* Silhouette Man - Centered horizontally, top positioned */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[13.66px] h-[28.83px]">
                <IconSilhouetteMan />
            </div>

            {/* Logo Group */}
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

            {/* 3D Button - Btn_Confirm_Primary */}
            <div className="absolute top-[139px] left-1/2 -translate-x-1/2 w-[333px] h-[100px] pointer-events-auto cursor-pointer active:scale-95 transition-transform" data-name="Btn_Confirm_Primary">
                {/* Shadow Layer (Bottom) */}
                <div className="absolute top-[10px] left-0 w-full h-[90px] bg-[#427c60] rounded-[16px]"></div>

                {/* Front Layer (Top) */}
                <div className="absolute top-0 left-0 w-full h-[90px] bg-[#427c60] rounded-[16px] flex items-center justify-center">
                    {/* Content Group */}
                    <div className="flex items-center gap-[14px]">
                        {/* Check Icon */}
                        <div className="w-[35px] h-[35px]">
                            <IconCheck />
                        </div>
                        {/* Text */}
                        <span className="text-[#5e9e7b] text-[36px] font-bold">确认</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
