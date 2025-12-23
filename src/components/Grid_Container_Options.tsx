import React from 'react';
import Btn_Option_Item from './Btn_Option_Item';
import { FIGMA_TOKENS } from '../config/FigmaDesignTokens';

const Grid_Container_Options: React.FC = () => {
    const t = FIGMA_TOKENS.Options;

    return (
        <div className="w-full flex items-center justify-center" style={{ padding: t.padding }}>
            <div
                className="grid grid-cols-2 w-full"
                style={{ gap: t.gridGap }}
            >
                {['Option A', 'Option B', 'Option C', 'Option D'].map((label, idx) => (
                    <Btn_Option_Item key={idx} label={label} />
                ))}
            </div>
        </div>
    );
};

export default Grid_Container_Options;
