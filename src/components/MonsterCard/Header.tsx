import { X } from 'lucide-react';

interface HeaderProps {
    title?: string;
    onClose?: () => void;
}

export const Header = ({ title = "冒充法院", onClose }: HeaderProps) => {
    return (
        <div className="bg-[#57b271] h-[139px] px-10 py-[37px] rounded-t-[28px] flex items-center justify-between shrink-0 box-border">
            <h1 className="font-sans font-normal text-[44px] leading-none text-white m-0">
                {title}
            </h1>
            <button
                onClick={onClose}
                className="size-[65px] flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer border-none bg-transparent p-0"
                aria-label="Close"
            >
                {/* Using a larger icon to match the 65px container visual weight */}
                <div className="w-full h-full bg-[#5CB85C] rounded-full flex items-center justify-center">
                    {/* The original design has a specific close button image. 
                Using X from lucide-react with appropriate styling to mimic it. 
                The provided close button image seems to be a green circle with a white X or similar.
                Let's try to match the filled look if needed, or just the icon.
                Looking at the screenshot, it's a dark circle with a green X inside? Or Green bg?
                Wait, inspection said: imgCloseButton. 
                Let's stick to a clean Lucide X icon for now, potentially wrapped in a circle if needed.
                Screenshot shows a dark semi-transparent circle with a white X or similar.
            */}
                    <X className="text-white bg-[#00000033] rounded-full p-3 size-full" />
                </div>
            </button>
        </div>
    );
};
