export interface MonsterCardData {
    title: string;
    riskTitle: string;
    riskLevel: number; // 0-5
    description: string;
    stats: {
        label: string;
        value: string;
    };
    footerTitle: string;
}

export interface MonsterCardProps {
    data?: MonsterCardData;
}
