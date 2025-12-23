import { useState } from 'react';

export function useMonsterCard() {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        console.log('Close clicked');
        setIsVisible(false);
    };

    const handleShare = () => {
        console.log('Share clicked');
        // Implement share logic here
    };

    return {
        isVisible,
        handleClose,
        handleShare,
    };
}
