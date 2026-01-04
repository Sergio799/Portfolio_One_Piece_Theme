"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1a1a1a] border-t-4 border-[#c4a574] py-8 md:py-12 px-4 md:px-8">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture pointer-events-none opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="cinematic-font text-xl md:text-2xl text-[#c4a574] mb-3">
              SAI PRAKASH REDDY
            </h3>
            <p className="font-serif text-xs md:text-sm text-zinc-400 leading-relaxed mb-3">
              Full Stack Developer specializing in building scalable, production-grade web applications with modern technologies.
            </p>
            <p className="font-mono text-xs text-[#c4a574] italic">
              Available for immediate hire
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="cinematic-font text-base md:text-lg text-[#c4a574] mb-3 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Awards", href: "#awards" },
                { name: "Freelance", href: "#client-work" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-serif text-xs md:text-sm text-zinc-400 hover:text-[#c4a574] transition-colors"
                  >
                    → {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="cinematic-font text-base md:text-lg text-[#c4a574] mb-3 uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-2 mb-4">
              <a
                href="mailto:saiprakash8080@gmail.com"
                className="font-mono text-xs md:text-sm text-zinc-400 hover:text-[#c4a574] transition-colors block"
              >
                saiprakash8080@gmail.com
              </a>
              <a
                href="tel:+17049654820"
                className="font-mono text-xs md:text-sm text-zinc-400 hover:text-[#c4a574] transition-colors block"
              >
                +1 (704) 965-4820
              </a>
              <p className="font-serif text-xs text-zinc-400">
                Charlotte, NC
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/saiprakash07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#e8dcc0] border-2 border-[#c4a574] flex items-center justify-center hover:bg-[#c4a574] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-[#3d2817]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a
                href="https://github.com/Sergio799"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#e8dcc0] border-2 border-[#c4a574] flex items-center justify-center hover:bg-[#c4a574] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 text-[#3d2817]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-[#c4a574] mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[#c4a574] text-sm">★</span>
            <p className="font-serif text-xs md:text-sm text-zinc-400">
              © 2025 Sai Prakash Reddy. All rights reserved.
            </p>
            <span className="text-[#c4a574] text-sm">★</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="font-mono text-xs md:text-sm text-[#3d2817] bg-[#e8dcc0] border-2 border-[#c4a574] px-4 py-2 hover:bg-[#c4a574] transition-colors"
          >
            ↑ BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
}
