import React from 'react';

// Figma Node: Btn_Confirm_Primary
// Composed of Layer_3D_Shadow and Layer_Surface_Front for 3D effect
interface Props {
    onClick?: () => void;
    className?: string;
}

const Btn_Confirm_Primary: React.FC<Props> = ({ onClick, className = '' }) => {
    return (
        <div className={`relative h-14 w-full max-w-[200px] group cursor-pointer ${className}`} onClick={onClick}>
            {/* Layer_3D_Shadow */}
            <div className="absolute inset-0 bg-green-700 rounded-full translate-y-2 transition-transform" />

            {/* Layer_Surface_Front */}
            <div className="absolute inset-0 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg active:translate-y-2 transition-transform border-b-4 border-green-600 active:border-b-0">
                CONFIRM
            </div>
        </div>
    );
};

export default Btn_Confirm_Primary;
