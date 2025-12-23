import { Share2, Star } from 'lucide-react';

interface MainContentProps {
    riskLevel?: string;
    riskRating?: number;
    description?: string;
    timerSeconds?: number;
    imageUrl?: string;
    onShare?: () => void;
}

export const MainContent = ({
    riskLevel = "高危风险",
    riskRating = 4,
    description = "犯罪分子实施诈骗的手段既有传统的手段，又有借助网络、电信等工具的新型手段，特征就是非接触性。",
    timerSeconds = 10,
    imageUrl,
    onShare
}: MainContentProps) => {
    return (
        <div className="bg-[#efeff4] p-10 flex flex-col gap-[38px] w-full box-border">
            {/* Risk Header */}
            <div className="bg-white rounded-[12px] p-[14px] flex items-center justify-between w-full box-border h-[68px]">
                <span className="text-[#646a74] text-[29px] font-sans leading-none">
                    {riskLevel}
                </span>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`size-6 ${i < riskRating ? 'text-[#facc15] fill-[#facc15]' : 'text-gray-300 fill-gray-300'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Image Container */}
            <div className="relative w-full aspect-square bg-white rounded-[20px] p-8 flex items-center justify-center overflow-hidden">
                {imageUrl ? (
                    <img src={imageUrl} alt="Monster" className="max-w-full max-h-full object-contain" />
                ) : (
                    <div className="w-48 h-48 bg-slate-200 rounded-full animate-pulse" />
                )}

                {/* Share Button - Absolute Positioned */}
                <button
                    onClick={onShare}
                    className="absolute bottom-4 right-4 bg-[#57b271] p-4 rounded-[12px] shadow-lg hover:bg-[#4a9c5b] transition-colors border-none cursor-pointer flex items-center justify-center size-[60px]"
                >
                    <Share2 className="text-white size-8" />
                </button>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-[12px] text-[#646a74] text-[24px] leading-relaxed">
                {description}
            </div>

            {/* Timer */}
            <div className="bg-white rounded-[12px] overflow-hidden flex h-[60px] w-full">
                <div className="bg-[#facc15] px-6 py-2 h-full flex items-center min-w-[120px]">
                    <span className="text-black text-[24px] font-bold">识破耗时</span>
                </div>
                <div className="flex-1 flex items-center justify-end px-6">
                    <span className="text-[#646a74] text-[24px]">{timerSeconds}秒</span>
                </div>
            </div>
        </div>
    );
};
