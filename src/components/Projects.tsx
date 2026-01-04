"use client";

export default function Projects() {
  const projects = [
    {
      title: "SamrAI - AI Investment Platform",
      description: "Intelligent investment dashboard with real-time financial data, AI-driven insights, quantitative analysis (Sharpe, Beta, Alpha, VaR), and behavioral analytics using Google Gemini",
      tech: ["Next.js 15", "TypeScript", "Zustand", "Gemini (Genkit)", "Clerk", "Recharts", "Yahoo Finance API"],
      achievements: [
        "Built production-grade dashboard with real-time financial insights and interactive UI",
        "AI Investment Advisor with natural-language recommendations and confidence scores",
        "Deployed on Vercel with CI/CD, achieving 2-3 sec load times",
        "Implemented panic-selling detection and market intelligence feeds"
      ],
      link: "samr-ai.vercel.app",
      github: "github.com/Sergio799/SamrAI",
      isHackathon: true
    },
    {
      title: "Property Pulse - Real Estate Platform",
      description: "Full-featured rental property web application with Google authentication, property listing CRUD, image uploads, internal messaging with unread notifications, and Mapbox integration",
      tech: ["Next.js", "React", "MongoDB", "Mongoose", "NextAuth.js", "Cloudinary", "Mapbox", "Tailwind CSS"],
      achievements: [
        "Built with Next.js Server Actions for optimized data handling",
        "Implemented property search, bookmarking, and social sharing features",
        "Integrated Cloudinary for image uploads and Photoswipe galleries",
        "Responsive design with internal messaging system and notifications"
      ],
      github: "github.com/Sergio799/PropertyPulse"
    },
    {
      title: "Web Cloner",
      description: "Full-stack SPA with automated website cloning, AI-powered content summarization using Claude AI, and asynchronous ETL pipelines for data extraction and processing",
      tech: ["Next.js", "TypeScript", "Fast API", "Claude AI", "Selenium", "PostgreSQL", "Supabase"],
      achievements: [
        "AI-driven content extraction with RAG techniques, 40% efficiency boost",
        "Asynchronous web scraping with Selenium and aiohttp, 60% faster extraction",
        "Built ETL pipelines for data transformation and storage",
        "Strengthened security with CORS, Pydantic validation, input sanitization"
      ],
      github: "github.com/Sergio799/web-Cloner",
      isHackathon: true
    }
  ];

  return (
    <section id="projects" className="min-h-screen relative overflow-y-auto bg-[#1a1a1a] py-16 md:py-20 px-4 md:px-8">
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
            FEATURED WORK
          </h2>
          <div className="w-24 h-1 bg-[#c4a574] mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#e8dcc0] p-5 md:p-6 border-4 border-[#3d2817] shadow-lg">
              {/* Project Number */}
              <div className="mb-3">
                <span className="cinematic-font text-xl md:text-2xl text-[#3d2817]">
                  CASE #{String(index + 1).padStart(3, '0')}
                </span>
              </div>

              {/* Title */}
              <div className="flex items-center gap-2 mb-3">
                <h3 className="cinematic-font text-xl md:text-2xl text-[#3d2817] leading-tight">
                  {project.title}
                </h3>
                {project.isHackathon && (
                  <div className="flex items-center gap-1">
                    <span className="text-[#c4a574] text-sm md:text-base">★</span>
                    <span className="text-[#c4a574] text-sm md:text-base">★</span>
                    <span className="text-[#c4a574] text-sm md:text-base">★</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="font-serif text-xs md:text-sm text-[#3d2817] mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <p className="font-serif text-[10px] md:text-xs text-[#3d2817] uppercase tracking-wide mb-2 font-bold">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-[9px] md:text-[10px] text-[#3d2817] border border-[#3d2817] px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-4">
                <p className="font-serif text-[10px] md:text-xs text-[#3d2817] uppercase tracking-wide mb-2 font-bold">
                  Key Achievements:
                </p>
                <ul className="space-y-1.5">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3d2817] mt-0.5 flex-shrink-0 text-xs">▸</span>
                      <p className="font-serif text-[10px] md:text-xs text-[#3d2817] leading-relaxed">
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              {(project.link || project.github) && (
                <div className="border-t-2 border-dashed border-[#3d2817] pt-3 space-y-1">
                  {project.link && (
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-[10px] text-[#3d2817] font-bold">LIVE:</span>
                      <a 
                        href={`https://${project.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] text-[#3d2817] underline hover:font-bold"
                      >
                        {project.link}
                      </a>
                    </div>
                  )}
                  {project.github && (
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-[10px] text-[#3d2817] font-bold">CODE:</span>
                      <a 
                        href={`https://${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] text-[#3d2817] underline hover:font-bold"
                      >
                        {project.github}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
