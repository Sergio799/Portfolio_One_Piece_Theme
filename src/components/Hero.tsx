"use client";

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#1a1a1a] pt-16 md:pt-0">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8">
        {/* Decorative stars */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <span className="text-2xl md:text-3xl lg:text-5xl text-[#c4a574]">★</span>
          <span className="text-2xl md:text-3xl lg:text-5xl text-[#c4a574]">★</span>
          <span className="text-2xl md:text-3xl lg:text-5xl text-[#c4a574]">★</span>
        </div>

        {/* Name subtitle */}
        <p className="cinematic-font text-[#c4a574] tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm lg:text-base mb-3 md:mb-4 uppercase">
          SAI PRAKASH REDDY
        </p>
        
        {/* Main title with vintage style */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="cinematic-font text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#e8dcc0] leading-none mb-2">
            FULL STACK
          </h1>
          <h1 className="cinematic-font text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#e8dcc0] leading-none">
            DEVELOPER
          </h1>
        </div>

        {/* Decorative line */}
        <div className="w-32 md:w-48 lg:w-64 h-1 bg-[#c4a574] mb-4 md:mb-6"></div>

        {/* Tagline */}
        <p className="font-serif text-xs md:text-sm lg:text-base text-[#c4a574] text-center max-w-2xl italic px-4">
          Building scalable, production-grade web applications
        </p>

        {/* Decorative bottom stars */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mt-8 md:mt-12">
          <span className="text-xl md:text-2xl lg:text-3xl text-[#c4a574]">★</span>
          <span className="text-xl md:text-2xl lg:text-3xl text-[#c4a574]">★</span>
          <span className="text-xl md:text-2xl lg:text-3xl text-[#c4a574]">★</span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] md:text-xs text-[#c4a574] tracking-wider">SCROLL</span>
            <svg className="w-5 h-5 md:w-6 md:h-6 text-[#c4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
