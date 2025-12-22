import React from 'react';
import ContainerQuestionWhole from './ContainerQuestionWhole';
import GridContainerOptions from './GridContainerOptions';
import SectionFooterScene from './SectionFooterScene';

export default function ViewHomePage() {
    return (
        <div className="relative w-full h-screen min-h-[844px] bg-[#d6cdc1] overflow-hidden flex flex-col items-center select-none" data-name="View_Home_Page">
            {/* 
        Layout Strategy:
        Question Area: top-[130px] approx (from Figma: 129.65)
        Options Area: top-[216px] approx (from Figma: 216.26)
        Footer: bottom-0
      */}

            {/* Question Area */}
            <div className="absolute top-[130px]" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                <ContainerQuestionWhole />
            </div>

            {/* Options Area */}
            <div className="absolute top-[216px]" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                <GridContainerOptions />
            </div>

            {/* Footer Area */}
            <SectionFooterScene />
        </div>
    );
}
