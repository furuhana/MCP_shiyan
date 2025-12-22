import React from 'react';
import ContainerQuestionWhole from './ContainerQuestionWhole';
import GridContainerOptions from './GridContainerOptions';
import SectionFooterScene from './SectionFooterScene';

export default function ViewHomePage() {
    return (
        <div
            className="relative w-full max-w-[430px] mx-auto h-[100dvh] bg-[#d6cdc1] overflow-hidden flex flex-col select-none"
            data-name="View_Home_Page"
        >
            {/* Question Area - Top with margin */}
            <div className="mt-12 w-full flex justify-center flex-none">
                <ContainerQuestionWhole />
            </div>

            {/* Options Area - Middle, Flex-1 to occupy space and center content */}
            <div className="flex-1 w-full flex flex-col justify-center items-center">
                <GridContainerOptions />
            </div>

            {/* Footer Area - Bottom, natural flow */}
            <SectionFooterScene />
        </div>
    );
}
