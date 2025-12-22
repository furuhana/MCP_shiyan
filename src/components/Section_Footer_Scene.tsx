import React from 'react';
import Btn_Confirm_Primary from './Btn_Confirm_Primary';

// Figma Node: Section_Footer_Scene
// Relative container, Bg_Shape_Hill fills bottom
const Section_Footer_Scene: React.FC = () => {
    return (
        <div className="relative w-full h-[30vh] flex items-end justify-center pb-10">
            {/* Bg_Shape_Hill */}
            {/* Filling the footer area, acting as a hill/ground */}
            <div className="absolute inset-0 bg-emerald-600 rounded-t-[40px] z-0" />

            {/* Btn_Confirm_Primary - 3D Button */}
            <div className="relative z-10 mb-4">
                <Btn_Confirm_Primary />
            </div>
        </div>
    );
};

export default Section_Footer_Scene;
