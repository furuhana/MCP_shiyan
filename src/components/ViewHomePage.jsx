import React from 'react';
import ContainerQuestionWhole from './ContainerQuestionWhole';
import GridContainerOptions from './GridContainerOptions';
import SectionFooterScene from './SectionFooterScene';

export default function ViewHomePage() {
    return (
        <div
            className="relative w-full max-w-[430px] mx-auto h-[100dvh] bg-[#d6cdc1] overflow-hidden flex flex-col items-center select-none"
            data-name="View_Home_Page"
        >
            {/* 
        Rule 1: Global Container h-[100dvh], relative, overflow-hidden, centering
        Rule 2: Question Area mt-[130px], w-[88%]
        Rule 3: Options Area mt-[30px], w-[88%]
        Rule 4: Footer absolute bottom-0 w-full
      */}

            {/* Question Area */}
            <div className="mt-[130px] w-[88%] z-10">
                <ContainerQuestionWhole />
            </div>

            {/* Options Area */}
            <div className="mt-[30px] w-[88%] z-10">
                <GridContainerOptions />
            </div>

            {/* Footer Area */}
            <SectionFooterScene />
        </div>
    );
}
