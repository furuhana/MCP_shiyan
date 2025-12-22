import React from 'react';
import Btn_Option_Item from './Btn_Option_Item';

// Figma Node: Grid_Container_Options
// CSS Grid cols-2
const Grid_Container_Options: React.FC = () => {
    return (
        <div className="w-full px-6 flex-1 flex items-center">
            <div className="grid grid-cols-2 gap-4 w-full">
                {['Option A', 'Option B', 'Option C', 'Option D'].map((label, idx) => (
                    <Btn_Option_Item key={idx} label={label} />
                ))}
            </div>
        </div>
    );
};

export default Grid_Container_Options;
