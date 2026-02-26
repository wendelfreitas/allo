interface SectionLabelProps {
  children: string;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`text-xs font-bold uppercase tracking-[0.2em] text-primary ${className}`}
    >
      {children}
    </span>
  );
}
