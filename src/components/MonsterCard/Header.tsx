import React from 'react';
import { X } from 'lucide-react';

interface HeaderProps {
    title: string;
    onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onClose }) => {
    return (
        <div className="bg-[#5CB85C] h-16 flex justify-between items-center px-6 shrink-0">
            <h1 className="text-white text-xl font-bold tracking-wide leading-none">
                {title}
            </h1>
            <button
                onClick={onClose}
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Close"
            >
                <X size={24} color="white" strokeWidth={3} />
            </button>
        </div>
    );
};

export default Header;
