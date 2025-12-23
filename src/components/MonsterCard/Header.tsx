import React from 'react';
import { X } from 'lucide-react';

interface HeaderProps {
    title: string;
    onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onClose }) => {
    return (
        <div className="bg-[#5CB85C] flex justify-between items-center p-4 text-white font-bold text-lg">
            <h1 className="leading-none">
                {title}
            </h1>
            <button
                onClick={onClose}
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Close"
            >
                <X size={24} color="white" />
            </button>
        </div>
    );
};

export default Header;
