import React from 'react';
import Btn_Confirm_Primary from './Btn_Confirm_Primary';
import { FIGMA_TOKENS } from '../config/FigmaDesignTokens';

const Section_Footer_Scene: React.FC = () => {
    const t = FIGMA_TOKENS.Footer;

    return (
        <div
            className="relative w-full flex items-end justify-center"
            style={{ height: t.height, backgroundColor: t.bgColor }}
        >
            {/* Bg_Shape_Hill */}
            <div
                className="absolute inset-0 w-full z-0"
                style={{
                    backgroundColor: t.Bg_Shape_Hill.color,
                    height: t.Bg_Shape_Hill.height,
                    borderTopLeftRadius: t.Bg_Shape_Hill.borderRadiusTop,
                    borderTopRightRadius: t.Bg_Shape_Hill.borderRadiusTop,
                    bottom: 0,
                }}
            />

            {/* Btn_Confirm_Primary */}
            <div className="relative z-10 mb-12"> {/* MB-12 is a safe area default, user might want to tokenize this padding too */}
                <Btn_Confirm_Primary />
            </div>
        </div>
    );
};

export default Section_Footer_Scene;
