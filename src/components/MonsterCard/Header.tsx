import React from 'react';
import { X } from 'lucide-react';

interface HeaderProps {
    title: string;
    onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onClose }) => {
    return (
        <div className="bg-[#57b271] flex h-[139px] items-center justify-between px-[40px] py-[37px] rounded-tl-[28px] rounded-tr-[28px] w-full shrink-0">
            <h1 className="font-normal text-[44px] text-white leading-none">
                {title}
            </h1>
            <button
                onClick={onClose}
                className="size-[65px] flex items-center justify-center bg-black/10 rounded-full hover:bg-black/20 transition-colors"
                aria-label="Close"
            >
                <X size={40} color="white" strokeWidth={3} />
            </button>
        </div>
    );
};

export default Header;
