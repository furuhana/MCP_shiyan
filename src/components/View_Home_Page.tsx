import React from 'react';
import Section_Footer_Scene from './Section_Footer_Scene';
import Container_Question_Whole from './Container_Question_Whole';
import Grid_Container_Options from './Grid_Container_Options';
import { FIGMA_TOKENS } from '../config/FigmaDesignTokens';

// Node ID: 2001-2, View_Home_Page
const View_Home_Page: React.FC = () => {
    return (
        <div
            className="w-full h-screen relative overflow-hidden flex flex-col justify-between"
            style={{ background: FIGMA_TOKENS.Page.background }}
        >
            {/* 1. Top Question */}
            <div className="flex-1 flex items-center justify-center">
                <Container_Question_Whole />
            </div>

            {/* 2. Middle Options */}
            <Grid_Container_Options />

            {/* 3. Footer Scene */}
            <Section_Footer_Scene />
        </div>
    );
};

export default View_Home_Page;
