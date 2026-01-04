"use client";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Sports Excitement",
      type: "STARTUP",
      period: "Mar 2025 – Dec 2025",
      location: "New York, NY",
      achievements: [
        "Collaborated with cross-functional teams to design, implement, and deliver the MVP launch, ensuring timely delivery of key features and business value",
        "Developed responsive, high-performance, WCAG/508-compliant UIs with TypeScript, Next.js and Tailwind CSS, delivering scalable features for thousands of daily users",
        "Integrated GraphQL APIs with Node.js to streamline data fetching and improve API response performance by 30%",
        "Architected authentication/authorization (RBAC) modules and built SaaS integrations with Mapbox, Google OAuth",
        "Containerized backend services with Docker and optimized CDN delivery via Cloudflare for enhanced performance",
        "Led production debugging and incident resolution using Chrome DevTools, logs, and network analysis"
      ],
      tech: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL", "Supabase", "Docker", "Cloudflare", "Zustand", "Mapbox", "Google OAuth"]
    },
    {
      role: "Full Stack Developer",
      company: "Accenture",
      period: "May 2022 – Dec 2023",
      location: "Bangalore, India",
      achievements: [
        "Developed custom web applications using JavaScript (ES6/ES7), React.js, HTML5, CSS3, and Bootstrap, improving client workflows and operational efficiency",
        "Optimized frontend performance with Webpack and Redux state management, reducing bundle size and improving page load times by 20%",
        "Built scalable middleware and data pipelines with Node.js and Express, optimizing backend workflows for large-scale applications",
        "Integrated Razorpay payment gateway for secure, PCI-compliant online transactions, reducing checkout errors by 15%",
        "Deployed, monitored, and optimized production workloads on AWS (EC2, Lambda, S3, CloudWatch), reducing MTTD incidents by 25%"
      ],
      tech: ["JavaScript", "React.js", "Redux", "HTML5", "CSS3", "Bootstrap", "Node.js", "Express", "MySQL", "AWS", "EC2", "Lambda", "S3", "CloudWatch", "Webpack", "Jest", "Postman", "Razorpay"]
    },
    {
      role: "Teaching Assistant - Logic & Algorithms",
      company: "UNC Charlotte",
      period: "Jan 2025 – May 2025",
      location: "Charlotte, NC",
      achievements: [
        "Mentored 50+ students in core Computer Science fundamentals, including data structures, algorithm design, and Object-Oriented Programming concepts",
        "Evaluated and graded programming assignments, providing detailed feedback to improve code quality",
        "Conducted review sessions and built supplementary materials to simplify complex algorithmic concepts"
      ],
      tech: ["Data Structures", "Algorithms", "OOP", "Code Review", "Mentoring"]
    },
    {
      role: "Teaching Assistant - Software Development Projects",
      company: "UNC Charlotte",
      period: "Aug 2025 – Dec 2025",
      location: "Charlotte, NC",
      achievements: [
        "Collaborated with the professor to guide students in full-stack development, providing mentorship and support",
        "Helped students understand best practices, debugging, and problem-solving techniques",
        "Conducted code reviews and sandbox testing, ensuring students learn quality coding standards and reliable development"
      ],
      tech: ["Full-Stack Development", "Code Review", "Debugging", "Mentoring", "Testing"]
    },
    {
      role: "Member",
      company: "GDG Charlotte",
      type: "COMMUNITY",
      period: "Jan 2024 – Present",
      location: "Charlotte, NC · Remote",
      achievements: [
        "Active member of the Google Developer Group (GDG), participating in technical meetups, coding workshops, hackathons, and community events focused on fostering innovation and collaboration",
        "Continuously expanding knowledge in cutting-edge technologies such as cloud computing, web and mobile development, machine learning, and Google developer tools",
        "Contributing to open discussions and connecting with like-minded professionals who are passionate about building impactful solutions"
      ],
      tech: ["Cloud Computing", "Web Development", "Machine Learning", "Google Tools", "Community"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen relative overflow-y-auto bg-[#1a1a1a] py-16 md:py-20 px-4 md:px-8">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10">
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-2">
            <span className="text-xl md:text-3xl text-[#c4a574]">★</span>
            <span className="text-xl md:text-3xl text-[#c4a574]">★</span>
            <span className="text-xl md:text-3xl text-[#c4a574]">★</span>
          </div>
          <h2 className="cinematic-font text-3xl md:text-5xl text-white tracking-wider mb-2">
            WORK RECORDS
          </h2>
          <div className="w-24 h-1 bg-[#c4a574] mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-4 md:space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#e8dcc0] p-4 md:p-6 border-4 border-[#3d2817] shadow-lg">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="cinematic-font text-xl md:text-2xl text-[#3d2817]">
                      {exp.role}
                    </h3>
                    {exp.type && (
                      <span className="font-mono text-[9px] md:text-[10px] text-[#3d2817] border border-[#3d2817] px-2 py-0.5">
                        {exp.type}
                      </span>
                    )}
                  </div>
                  <p className="font-serif text-base md:text-lg text-[#3d2817] font-bold">
                    {exp.company}
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-mono text-xs md:text-sm text-[#3d2817] font-bold">
                    {exp.period}
                  </p>
                  <p className="font-mono text-xs text-[#3d2817] opacity-70">
                    {exp.location}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-[2px] bg-[#3d2817] mb-4"></div>

              {/* Achievements */}
              <div className="mb-4">
                <p className="font-serif text-xs md:text-sm text-[#3d2817] uppercase tracking-wide mb-3 font-bold">
                  Key Achievements:
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#3d2817] mt-1 flex-shrink-0">▸</span>
                      <p className="font-serif text-xs md:text-sm text-[#3d2817] leading-relaxed">
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              {exp.tech && (
                <div className="mb-4">
                  <p className="font-serif text-[10px] md:text-xs text-[#3d2817] uppercase tracking-wide mb-2 font-bold">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-[9px] md:text-[10px] text-[#3d2817] border border-[#3d2817] px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Badge */}
              <div className="mt-4 flex justify-end">
                <div className="border-2 border-[#3d2817] rounded-full px-3 py-1">
                  <span className="font-mono text-[10px] text-[#3d2817] font-bold">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="font-serif text-xs md:text-sm text-zinc-500 italic">
            * 2.8+ years of professional software engineering experience
          </p>
        </div>
      </div>
    </section>
  );
}
