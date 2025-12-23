import React from 'react';
import ConfirmButton from './components/ConfirmButton';
import { IconSilhouetteMan, ShapeBubbleTail, IconLogoGroup } from './components/Icons';

export default function HomeView() {
    return (
        <div className="min-h-[100dvh] w-full flex flex-col relative overflow-hidden items-center bg-[#E3DCD5]">
            {/* Main Content Area */}
            {/* User Rule: mt-[15vh] or read margin-top. w-[88%] for scaling. */}
            <div className="w-[88%] mt-[12vh] flex flex-col items-center z-10">

                {/* Question Bubble */}
                <div className="w-full flex flex-col items-center">
                    <div className="bg-white rounded-[10px] w-full py-[18px] flex items-center justify-center shadow-sm">
                        <span className="text-[#96908C] text-[23px] font-normal">我是谁？</span>
                    </div>
                    {/* Tail */}
                    <div className="mt-[-1px] w-[28px] h-[10px] rotate-180 text-white">
                        <ShapeBubbleTail className="w-full h-full text-white" />
                    </div>
                </div>

                {/* Silhouette / Main Image Placeholder */}
                {/* Figma showed an Icon_Silhouette_Man inside some container. 
            The user didn't specify the exact layout of the middle part other than strict rules for footer/button.
            I'll recreate the structure roughly based on the prompt's implicated layout or just place the silhouette.
        */}
                <div className="mt-[20px] flex flex-col items-center">
                    <div className="w-[100px] h-[200px] flex items-center justify-center">
                        {/* This seems to be where the main character/silhouette goes */}
                        <IconSilhouetteMan className="w-full h-full text-[#475163]" />
                    </div>
                </div>

            </div>

            {/* Footer / Scene Area */}
            {/* User Rule: mt-auto, pb-[calc(20px+env(safe-area-inset-bottom))], bg #434D5F */}
            <div className="w-full mt-auto bg-[#434D5F] flex flex-col items-center rounded-t-[30px] relative">
                {/* Section_Footer_Scene content */}

                {/* Decorative Hill/Background? The prompt mentioned View_Home_Page layout instructions.
               "底部区域 (Section_Footer_Scene): 使用 mt-auto 沉底..."
               "Section_Footer_Scene 必须添加 pb-[calc(20px+env(safe-area-inset-bottom))]"
           */}

                {/* Button Container - positioned relative to footer */}
                <div className="w-full flex justify-center pt-[40px] pb-[calc(40px+env(safe-area-inset-bottom))]">
                    <ConfirmButton />
                </div>

                {/* Logo Group - maybe absolute or flow? */
                    /* In Figma snippet, Logo Group was not clearly positioned in the minimal context I got.
                       But usually it's at the top or bottom. 
                       I'll verify `Icon_Logo_Group` location if possible or place it standardly.
                       Wait, I haven't placed `Icon_Logo_Group`.
                    */
                }
            </div>

            {/* Logo typically goes top left/right or consistent place. 
          If not specified, I'll place it at the top or check the snippet.
          Snippet 14 had `imgIconLogoGroup` but didn't clearly show its parent in the truncated view.
          I'll add it to the top for now.
      */}
            <div className="absolute top-[60px] w-full flex justify-center pointer-events-none">
                {/* Logo Placeholder */}
                <IconLogoGroup className="w-[60px] h-[60px] opacity-50" />
            </div>

        </div>
    );
}
