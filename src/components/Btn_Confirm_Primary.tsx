import React from 'react';
import { FIGMA_TOKENS } from '../config/FigmaDesignTokens';

interface Props {
    onClick?: () => void;
    className?: string;
}

const Btn_Confirm_Primary: React.FC<Props> = ({ onClick, className = '' }) => {
    const t = FIGMA_TOKENS.Footer.Btn_Confirm_Primary;

    return (
        <div
            className={`relative group cursor-pointer ${className}`}
            onClick={onClick}
            style={{ width: t.width, height: t.height }}
        >
            {/* Layer_3D_Shadow (The definition of thickness) */}
            <div
                className="absolute inset-0 transition-transform"
                style={{
                    backgroundColor: t.Layer_3D_Shadow.color,
                    borderRadius: t.Layer_3D_Shadow.borderRadius,
                    top: t.Layer_3D_Shadow.offsetY, // This pushes the shadow down to create depth
                    height: t.Layer_3D_Shadow.height,
                }}
            />

            {/* Layer_Surface_Front (The clickable face) */}
            <div
                className="absolute inset-0 flex items-center justify-center active:translate-y-1 transition-transform"
                style={{
                    backgroundColor: t.Surface_Front.color,
                    borderRadius: t.Surface_Front.borderRadius,
                    height: t.Surface_Front.height,
                    color: t.Text.color,
                    fontSize: t.Text.fontSize,
                    fontWeight: t.Text.fontWeight,
                    fontFamily: t.Text.fontFamily,
                }}
            >
                CONFIRM
            </div>
        </div>
    );
};

export default Btn_Confirm_Primary;
