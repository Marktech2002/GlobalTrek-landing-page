export default function MenuIcon({ width = 18, height = 12, color = "#000000" }: { width?: number; height?: number; color?: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H18" stroke={color} strokeWidth="2"/>
      <path d="M0 6H18" stroke={color} strokeWidth="2"/>
      <path d="M0 11H18" stroke={color} strokeWidth="2"/>
    </svg>
  );
}