export interface MonsterCardProps {
  title?: string; // e.g., "冒充法院"
  riskLevel?: string; // e.g., "高危风险"
  riskRating?: number; // 1-5 (stars)
  description?: string;
  timerSeconds?: number;
  footerTitle?: string; // "沼泽低语者"
  imageUrl?: string;
  brandLogoUrl?: string;
  onClose?: () => void;
  onShare?: () => void;
}
