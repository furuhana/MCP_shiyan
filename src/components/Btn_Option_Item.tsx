import React from 'react';

// Figma Node: Btn_Option_Item
const Btn_Option_Item: React.FC<{ label: string }> = ({ label }) => {
    return (
        <button className="w-full h-24 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-xl flex items-center justify-center text-white text-xl font-semibold shadow-lg hover:bg-white/30 transition-all active:scale-95">
            {label}
        </button>
    );
};

export default Btn_Option_Item;
