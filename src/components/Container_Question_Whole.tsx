import React from 'react';
import { FIGMA_TOKENS } from '../config/FigmaDesignTokens';

const Container_Question_Whole: React.FC = () => {
    const t = FIGMA_TOKENS.Question;

    return (
        <div className="relative flex items-center justify-center" style={{ width: t.width }}>
            {/* Bubble Body */}
            <div
                className="relative flex items-center justify-center w-full z-10"
                style={{
                    backgroundColor: t.Bubble_Body.color,
                    borderRadius: t.Bubble_Body.borderRadius,
                    padding: t.Bubble_Body.padding,
                    boxShadow: t.Bubble_Body.shadow,
                }}
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    What is the sound?
                </h2>

                {/* Shape_Bubble_Tail - Absolute positioning from Tokens */}
                <div
                    className="absolute transform rotate-45"
                    style={{
                        backgroundColor: t.Shape_Bubble_Tail.color,
                        width: t.Shape_Bubble_Tail.width,
                        height: t.Shape_Bubble_Tail.height,
                        bottom: t.Shape_Bubble_Tail.bottomOffset,
                        left: t.Shape_Bubble_Tail.leftOffset,
                        marginLeft: `calc(-1 * ${t.Shape_Bubble_Tail.width} / 2)`, // Center alignment fix
                        zIndex: -1, // Behind the bubble logic if needed, or matched color
                    }}
                />
            </div>
        </div>
    );
};

export default Container_Question_Whole;
