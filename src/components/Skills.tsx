"use client";

export default function Skills() {
  const skillCategories = [
    {
      category: "PROGRAMMING LANGUAGES",
      skills: ["JavaScript (ES6/ES7)", "TypeScript", "Python"]
    },
    {
      category: "WEB DEVELOPMENT",
      skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "Bootstrap", "Webpack", "Email.js", "Vue.js"]
    },
    {
      category: "AUTHENTICATION & SECURITY",
      skills: ["OAuth", "JWT", "RBAC", "PII/PHI compliance"]
    },
    {
      category: "MESSAGING",
      skills: ["Kafka", "Redis", "Elasticsearch", "Memcached"]
    },
    {
      category: "ACCESSIBILITY & PERFORMANCE",
      skills: ["WCAG 2.1 / Section 508", "Lighthouse", "SEO", "CDT"]
    },
    {
      category: "STATE MANAGEMENT",
      skills: ["Redux", "Zustand", "Context API", "React Query"]
    },
    {
      category: "WEB FUNDAMENTALS",
      skills: ["HTTP/HTTPS", "Browser Rendering", "DOM"]
    },
    {
      category: "UI LIBRARIES & TOOLS",
      skills: ["ShadCN UI", "Framer Motion", "Canva", "Radix UI", "Chakra UI"]
    },
    {
      category: "ARCHITECTURE & PATTERNS",
      skills: ["MVC design pattern", "Component-driven design", "Modular architecture"]
    },
    {
      category: "APIs & INTEGRATIONS",
      skills: ["REST API", "Fast API", "GraphQL", "Google Maps API", "Web Sockets", "WebHooks"]
    },
    {
      category: "DATABASES & ORMs",
      skills: ["MySQL", "MS SQL", "PostgreSQL", "MongoDB", "Supabase", "Firebase", "Prisma", "Mongoose", "Sequelize"]
    },
    {
      category: "CLOUD & DEVOPS",
      skills: ["AWS (EC2, Lambda, S3, CloudWatch)", "Docker", "Kubernetes", "Vercel", "Cloudflare", "Cloudinary", "CI/CD"]
    },
    {
      category: "TESTING & AUTOMATION",
      skills: ["Jest", "Pytest", "unit test", "Mocha", "Vitest", "Postman", "Cypress", "Sandbox Testing", "Functional Testing"]
    },
    {
      category: "AI & LLM TOOLS",
      skills: ["OpenAI", "Hugging Face Transformers", "LangChain", "Claude", "Firebase Studio", "GitHub Copilot", "Cursor", "Gemini", "Grok", "Sonnet"]
    },
    {
      category: "DISTRIBUTED SYSTEMS",
      skills: ["RPC handlers", "Asynchronous pipelines", "System Design", "Performance Tuning", "Reliability Optimization", "Lazy Loading", "Bundle Optimization", "Code Splitting"]
    },
    {
      category: "COLLABORATION & PRODUCTIVITY",
      skills: ["Git", "GitHub", "GitLab", "Taiga", "Scrum", "Agile", "VS Code", "Vite", "Jira", "Notion", "Clerk", "Prompt Engineering", "MS Word", "MS Excel", "WordPress"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen relative overflow-y-auto bg-[#1a1a1a] py-16 md:py-20 px-4 md:px-8">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-2">
            <span className="text-xl md:text-3xl text-[#c4a574]">★</span>
            <span className="text-xl md:text-3xl text-[#c4a574]">★</span>
            <span className="text-xl md:text-3xl text-[#c4a574]">★</span>
          </div>
          <h2 className="cinematic-font text-3xl md:text-5xl text-white tracking-wider mb-2">
            SKILL INVENTORY
          </h2>
          <div className="w-24 h-1 bg-[#c4a574] mx-auto"></div>
          <p className="font-serif text-xs md:text-sm text-zinc-400 mt-3 italic">
            Known proficiencies and technical capabilities
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 animate-pulse">
            <span className="text-[#c4a574] text-sm md:text-base">←</span>
            <span className="font-serif text-xs md:text-sm text-[#c4a574] italic">
              Scroll to explore skills
            </span>
            <span className="text-[#c4a574] text-sm md:text-base">→</span>
          </div>
        </div>

        {/* Skills Horizontal Scroll */}
        <div className="overflow-x-auto pb-4 scroll-smooth scrollbar-custom -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-4 md:gap-6 min-w-max animate-fade-in pb-2">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-[#e8dcc0] p-4 md:p-5 border-4 border-[#3d2817] shadow-lg w-[280px] md:w-[320px] flex-shrink-0 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Category Header */}
                <div className="mb-3 pb-2 border-b-2 border-[#3d2817]">
                  <h3 className="cinematic-font text-base md:text-lg text-[#3d2817] tracking-wider">
                    {category.category}
                  </h3>
                  <p className="font-mono text-[8px] md:text-[9px] text-[#3d2817] opacity-70 mt-1">
                    PROFICIENCY: HIGH
                  </p>
                </div>

                {/* Skills List */}
                <div className="space-y-1.5">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#3d2817] text-xs">▸</span>
                      <span className="font-serif text-xs md:text-sm text-[#3d2817] font-bold">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-8 md:mt-12">
          <div className="bg-[#e8dcc0] p-4 md:p-6 border-4 border-[#3d2817] shadow-lg">
            <h3 className="cinematic-font text-base md:text-lg text-[#3d2817] mb-3 text-center">
              CORE COMPETENCIES
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                "Full-Stack Development",
                "Microservices Architecture",
                "Performance Optimization",
                "Security Best Practices",
                "Agile/Scrum Methodology",
                "CI/CD Pipelines",
                "Cloud Infrastructure",
                "API Design & Integration"
              ].map((skill, i) => (
                <span
                  key={i}
                  className="font-mono text-[10px] md:text-xs text-[#3d2817] border-2 border-[#3d2817] px-3 py-1.5 bg-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
