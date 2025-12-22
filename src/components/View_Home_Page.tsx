import React from 'react';
import Section_Footer_Scene from './Section_Footer_Scene';
import Container_Question_Whole from './Container_Question_Whole';
import Grid_Container_Options from './Grid_Container_Options';

// Node ID: 2001-2, View_Home_Page
const View_Home_Page: React.FC = () => {
    return (
        <div className="w-full h-screen relative bg-gradient-to-b from-sky-300 to-sky-100 overflow-hidden flex flex-col justify-between">
            {/* 1. Top Question */}
            <Container_Question_Whole />

            {/* 2. Middle Options */}
            <Grid_Container_Options />

            {/* 3. Footer Scene */}
            <Section_Footer_Scene />
        </div>
    );
};

export default View_Home_Page;
