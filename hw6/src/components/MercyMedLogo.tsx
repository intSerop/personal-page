export function MercyMedLogo({ className = 'h-10' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Stylized geometric square icon with faceted M and warm gradient */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto aspect-square shrink-0 rounded-lg shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mercyGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="45%" stopColor="#EA580C" />
            <stop offset="80%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          <radialGradient id="sunGlow" cx="80" cy="80" r="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base Gradient Canvas */}
        <rect width="100" height="100" rx="14" fill="url(#mercyGrad)" />
        
        {/* Subtle Warm Sun Element in bottom right */}
        <circle cx="78" cy="74" r="16" fill="url(#sunGlow)" />
        <circle cx="78" cy="74" r="12" fill="#FEF08A" fillOpacity="0.75" />

        {/* Faceted M Silhouette */}
        <path
          d="M20 78V30L50 58L80 30V78H68V48L50 64L32 48V78H20Z"
          fill="#FFFFFF"
          fillOpacity="0.94"
        />
        
        {/* Subtle Medical Cross inside bottom left */}
        <rect x="23" y="66" width="3" height="7" rx="0.5" fill="#DC2626" fillOpacity="0.8" />
        <rect x="21" y="68" width="7" height="3" rx="0.5" fill="#DC2626" fillOpacity="0.8" />
      </svg>

      {/* Typography: MERCY (dark grey) + MED (red-orange) */}
      <div className="flex flex-col justify-center select-none">
        <div className="flex items-center text-xl sm:text-2xl font-black tracking-tight leading-none">
          <span className="text-slate-800">MERCY</span>
          <span className="text-[#E86014] ml-0.5">MED</span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5">
          Medical Center · Bishkek
        </span>
      </div>
    </div>
  );
}
