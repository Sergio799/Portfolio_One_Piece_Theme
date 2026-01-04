"use client";

export default function ClientWork() {
  const clientProjects = [
    {
      title: "Sai Manjari Portfolio",
      description: "A modern, responsive portfolio website with clean aesthetics and smooth user experience.",
      category: "FREELANCE",
      link: "https://saimanjariguntur.vercel.app/"
    },
    {
      title: "Personal Portfolio",
      description: "Professional portfolio showcasing work and skills with a clean, minimal design.",
      category: "FREELANCE",
      link: "https://amruthaportfolio-mu.vercel.app/"
    }
  ];

  return (
    <section id="client-work" className="min-h-screen relative overflow-y-auto bg-[#1a1a1a] py-16 md:py-20 px-4 md:px-8">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-2">
            <span className="text-xl md:text-3xl text-[#c4a574]">★</span>
            <span className="text-xl md:text-3xl text-[#c4a574]">★</span>
            <span className="text-xl md:text-3xl text-[#c4a574]">★</span>
          </div>
          <h2 className="cinematic-font text-3xl md:text-5xl text-white tracking-wider mb-2">
            FREELANCE
          </h2>
          <div className="w-24 h-1 bg-[#c4a574] mx-auto"></div>
          <p className="font-serif text-xs md:text-sm text-zinc-400 mt-3 italic">
            Websites and applications built for clients as a freelance developer
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {clientProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group bg-[#e8dcc0] p-4 md:p-5 border-4 border-[#3d2817] shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-3">
                <span className="font-mono text-[9px] md:text-[10px] text-[#3d2817] uppercase tracking-wide border border-[#3d2817] px-2 py-1">
                  {project.category}
                </span>
              </div>

              <h3 className="cinematic-font text-base md:text-lg text-[#3d2817] leading-tight mb-3">
                {project.title}
              </h3>

              <p className="font-serif text-xs md:text-sm text-[#3d2817] leading-relaxed mb-3">
                {project.description}
              </p>

              <div className="border-t-2 border-dashed border-[#3d2817] pt-3">
                <span className="font-mono text-[10px] md:text-xs text-[#3d2817] hover:font-bold transition-all">
                  VIEW →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="font-serif text-base md:text-lg text-zinc-400 mb-6">
            Need a website?
          </p>
          <a
            href="mailto:saiprakash8080@gmail.com"
            className="inline-block cinematic-font text-sm md:text-base bg-[#3d2817] text-[#e8dcc0] px-8 py-3 border-2 border-[#c4a574] hover:bg-[#2d1f0f] transition-colors"
          >
            LET'S WORK TOGETHER
          </a>
        </div>
      </div>
    </section>
  );
}
