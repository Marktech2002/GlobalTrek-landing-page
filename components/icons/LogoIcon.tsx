// export default function LogoIcon({ width = 30, height = 30, color = "#1c77c3" }: { width?: number; height?: number; color?: string }) {
//   return (
//     <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M5 5L5 25" stroke={color} strokeWidth="2" strokeLinecap="round"/>
//       <path d="M9 8L9 22" stroke={color} strokeWidth="2" strokeLinecap="round"/>
//       <path d="M13 11L13 19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
//       <path d="M17 7L17 23" stroke={color} strokeWidth="2" strokeLinecap="round"/>
//       <path d="M21 10L21 20" stroke={color} strokeWidth="2" strokeLinecap="round"/>
//       <path d="M25 5L25 25" stroke={color} strokeWidth="2" strokeLinecap="round"/>
//     </svg>
//   );
// }

export default function LogoIcon({ width = 30, height = 30 }: { width?: number; height?: number }) {
  return (
    <img
      src="/images/Logo.png"
      alt="GlobTrek Logo"
      width={width}
      height={height}
      className="object-contain"
    />
  );
}

