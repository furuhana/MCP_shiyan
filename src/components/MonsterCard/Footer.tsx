import { Shield } from 'lucide-react';

interface FooterProps {
    footerTitle?: string;
    brandLogoUrl?: string;
}

export const Footer = ({ footerTitle = "沼泽低语者", brandLogoUrl }: FooterProps) => {
    return (
        <div className="bg-[#475163] h-[112px] rounded-b-[28px] relative flex items-center justify-center shrink-0 w-full overflow-hidden">
            {/* Brand Logo - Absolute Left */}
            <div className="absolute left-0 top-0 bottom-0 w-[112px] flex items-center justify-center bg-[#566275]">
                {brandLogoUrl ? (
                    <img src={brandLogoUrl} alt="Logo" className="w-16 h-16" />
                ) : (
                    <Shield className="text-white size-12" />
                )}
            </div>

            <span className="text-white text-[52px] font-sans tracking-wide">
                {footerTitle}
            </span>
        </div>
    );
};
