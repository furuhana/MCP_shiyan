import React from 'react';

// Figma Node: Container_Question_Whole
// Includes Shape_Bubble_Tail (Absolute)
const Container_Question_Whole: React.FC = () => {
    return (
        <div className="relative w-full px-6 py-8 flex items-center justify-center">
            {/* Bubble Body */}
            <div className="relative bg-white rounded-3xl p-6 shadow-xl w-full flex items-center justify-center min-h-[120px] z-10">
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    What is the sound?
                </h2>

                {/* Shape_Bubble_Tail - Absolute positioning as requested */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 transform" />
            </div>
        </div>
    );
};

export default Container_Question_Whole;
