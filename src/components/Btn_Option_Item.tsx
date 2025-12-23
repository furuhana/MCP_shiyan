import React from 'react';
import { FIGMA_TOKENS } from '../config/FigmaDesignTokens';

const Btn_Option_Item: React.FC<{ label: string }> = ({ label }) => {
    const t = FIGMA_TOKENS.Options.Btn_Option_Item;

    return (
        <button
            className="w-full flex items-center justify-center backdrop-blur-sm transition-all active:scale-95"
            style={{
                height: t.height,
                backgroundColor: t.color,
                borderColor: t.borderColor,
                borderWidth: t.borderWidth,
                borderRadius: t.borderRadius,
                color: t.textColor,
                fontSize: t.fontSize,
            }}
        >
            {label}
        </button>
    );
};

export default Btn_Option_Item;
