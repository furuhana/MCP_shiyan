import { useState } from 'react';

export const useMonsterCard = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleShare = () => {
        console.log('Share clicked');
        alert('Shared!');
    };

    // Mock data matching the specific design content
    const data = {
        title: '冒充法院',
        riskTitle: '高危风险',
        riskLevel: 4,
        description: '犯罪分子实施诈骗的手段既有传统的手段，又有借助网络、电信等工具的新型手段，特征就是非接触性。',
        stats: {
            label: '识破耗时',
            value: '10秒',
        },
        footerTitle: '沼泽低语者',
    };

    return {
        isVisible,
        data,
        handleClose,
        handleShare,
    };
};
