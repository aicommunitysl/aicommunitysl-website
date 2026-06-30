import Image from "next/image";

export function HomeHeroVisual() {
  return (
    <div className="relative h-104 md:h-full hidden md:flex items-center justify-center animate-fade-in [animation-delay:0.2s]">
      {/* Abstract Background Glow - Enhanced */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] animate-pulse delay-75"></div>

      {/* Main Visual Container */}
      <div className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
        {/* Outer Rotating Ring (Slow) */}
        <div className="absolute inset-0 border border-dashed border-primary/20 rounded-full animate-[spin_60s_linear_infinite]"></div>

        {/* Middle Rotating Ring (Medium, Reverse) */}
        <div className="absolute inset-12 border border-primary/10 rounded-full animate-[spin_40s_linear_infinite_reverse]">
          {/* Decorative nodes on ring */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/50 rounded-full"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/50 rounded-full"></div>
        </div>

        {/* Inner Rotating Ring (Fast) */}
        <div className="absolute inset-24 border border-accent/20 rounded-full animate-[spin_20s_linear_infinite]"></div>

        {/* Polygonal/Geometric Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[450px] h-[450px] border border-primary/5 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute w-[550px] h-[550px] border border-dashed border-primary/5 rounded-full opacity-20 animate-[spin_80s_linear_infinite]"></div>
        </div>

        {/* Orbiting Nodes - Enhanced */}
        <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <div className="absolute bottom-10 left-1/4 w-4 h-4 bg-accent/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.4)]">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full shadow-[0_0_8px_rgba(13,148,136,0.5)]"></div>
        </div>

        {/* Central AI Core - Much Bigger */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative group">
            {/* Core Container */}
            <div className="relative w-64 h-64 bg-background/40 backdrop-blur-2xl rounded-4xl border border-primary/30 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.3)] rotate-45 transition-transform duration-1000 group-hover:rotate-90">
              {/* Inner Circuit Pattern */}
              <div className="absolute inset-3 border border-primary/20 rounded-2xl"></div>
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/5 rounded-4xl"></div>

              {/* Scanning Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-4xl">
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-primary/10 to-transparent -translate-y-full animate-[scan_4s_ease-in-out_infinite]"></div>
              </div>

              {/* Icon */}
              <div className="-rotate-45 group-hover:-rotate-90 transition-transform duration-1000">
                <Image
                  src="/logo-2.svg"
                  alt="AI Community Sri Lanka Mark"
                  width={160}
                  height={160}
                  className="w-40 h-40 object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                  priority
                />
              </div>
            </div>

            {/* Connecting Lines to Core - Extended */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-40">
              <div className="absolute top-0 left-1/2 w-px h-12 bg-linear-to-b from-transparent to-primary"></div>
              <div className="absolute bottom-0 left-1/2 w-px h-12 bg-linear-to-t from-transparent to-primary"></div>
              <div className="absolute left-0 top-1/2 h-px w-12 bg-linear-to-r from-transparent to-primary"></div>
              <div className="absolute right-0 top-1/2 h-px w-12 bg-linear-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </div>

        {/* Floating Badge - Adjusted Position */}
        <div className="absolute -right-12 top-1/3 transform translate-x-0 animate-fade-in [animation-delay:0.35s] z-10">
          <div className="flex items-center gap-4 rotate-6 hover:rotate-0 transition-transform duration-500">
            <div className="w-20 h-20 bg-background/60 backdrop-blur-xl border border-primary/20 rounded-2xl flex items-center justify-center shadow-lg">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-95"
              >
                <path
                  d="M3 12h3"
                  stroke="#006FEE"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 12h3"
                  stroke="#16A34A"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3v3"
                  stroke="#006FEE"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18v3"
                  stroke="#7C3AED"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="2.6" fill="#006FEE" />
              </svg>
            </div>

            <div className="flex flex-col leading-tight -rotate-6 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-3xl font-extrabold bg-linear-to-r from-primary to-accent text-transparent bg-clip-text drop-shadow-sm">
                AI Community
              </span>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                Sri Lanka
              </span>
            </div>
          </div>
        </div>

        {/* Floating Data Particles - More of them */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-primary/60 rounded-full animate-ping [animation-duration:3s]"></div>
        <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-accent/60 rounded-full animate-ping [animation-duration:4s]"></div>
        <div className="absolute top-1/4 left-10 w-1 h-1 bg-secondary/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-duration:5s]"></div>
      </div>
    </div>
  );
}
