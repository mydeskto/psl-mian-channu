export function CricketOrbit() {
  return <svg className="cricket-orbit" viewBox="0 0 520 520" aria-hidden="true">
    <defs>
      <linearGradient id="orbit-green" x1="0" x2="1">
        <stop offset="0" stopColor="#2E9E46" />
        <stop offset="1" stopColor="#7EC850" />
      </linearGradient>
      <linearGradient id="orbit-blue" x1="0" x2="1">
        <stop offset="0" stopColor="#1B7A9E" />
        <stop offset="1" stopColor="#D7F2FF" />
      </linearGradient>
      <radialGradient id="ball-red" cx=".3" cy=".25">
        <stop offset="0" stopColor="#FF6F61" />
        <stop offset=".6" stopColor="#D83B32" />
        <stop offset="1" stopColor="#8F1E28" />
      </radialGradient>
    </defs>
    <ellipse className="orbit-ring orbit-ring-green" cx="260" cy="260" rx="220" ry="106" />
    <ellipse className="orbit-ring orbit-ring-blue" cx="260" cy="260" rx="198" ry="145" transform="rotate(-22 260 260)" />
    <g className="orbit-spinner">
      <circle cx="260" cy="154" r="23" fill="url(#ball-red)" className="cricket-ball" />
      <path d="M249 136c13 9 20 22 21 37M243 143c13 9 20 22 21 37" fill="none" stroke="#F7E8D0" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 6" />
    </g>
    <g className="trophy-pulse" transform="translate(239 235)">
      <path d="M9 6h24v12c0 12-7 20-12 22-5-2-12-10-12-22V6Z" fill="#F0B429" />
      <path d="M9 12H1c0 12 5 17 14 17M33 12h8c0 12-5 17-14 17M21 40v10M13 51h16" fill="none" stroke="#F0B429" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 14h10" stroke="#FFF4C7" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>;
}
