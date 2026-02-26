interface PriceDisplayProps {
  cents: number;
  className?: string;
}

export function PriceDisplay({ cents, className = '' }: PriceDisplayProps) {
  const dollars = (cents / 100).toFixed(2);
  return <span className={className}>${dollars}</span>;
}
