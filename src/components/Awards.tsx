"use client";

export default function Awards() {
  const award = {
    title: "Most Technical Award",
    event: "HAVK Web Development Competition",
    date: "Nov 2025",
    description: "Recognized for exceptional technical execution in a 3.5-hour front-end prototype challenge.",
    liveLink: "https://hawk-web-prototyping.vercel.app/",
    githubLink: "https://github.com/Sergio799/HAWK-WEB-PROTOTYPING"
  };

  const certifications = [
    {
      title: "Get Started with Redis",
      issuer: "Redis",
      date: "Nov 2025",
      link: "https://cdn.flockjay.com/ta8oxxfpolwozu-certificates-14q8m6gilfwltm.pdf?Expires=1767560830&Signature=Tjtxf7tzXfQUt3HUiGeoYWuPxWco4gajQzkduowKDQ79ET6EikC5qNWFdvKXuYqouZRXS4nC5~tyxrW2sp8J9R2DMHUjDS~hzoJJB2rWn1eIX0g75vu0MJv2xbx4hrsPgAL6FdGyBUI6ab-dOFUL~NnoBhq9miPBAGlNV5-F~SxDDCIcYZ1YkZDiYyQaqQks7qF4xjERTC6~BPe508SlzmIXf5t~7EkpNKu1BUJVnOEOSrlTNOa2jmP884bljaKvHj8g03kbEm751FzkRKc~ln0TG5oOOU0ECLzHgc4uGqqZyTJS4oMsl0ozJrlL3BcqYQzMDY-KcWR0iA4G9uUeaw__&Key-Pair-Id=K2Q8P6RBFZ27L1"
    },
    {
      title: "Graph Developer - Associate",
      issuer: "Apollo GraphQL",
      date: "Nov 2025",
      link: "https://www.apollographql.com/tutorials/certifications/8dc930d2-5ef2-4c79-97f7-d996a13e0939"
    },
    {
      title: "Understanding Prompt Engineering",
      issuer: "DataCamp",
      date: "Nov 2025",
      link: "https://www.datacamp.com/skill-verification/UPE0015874256653"
    },
    {
      title: "Working with OpenAI API",
      issuer: "DataCamp",
      date: "Nov 2025",
      link: "https://www.datacamp.com/skill-verification/WWOA0010429318930"
    },
    {
      title: "OCI 2025 AI Foundations Associate",
      issuer: "Oracle",
      date: "Oct 2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=270DD75B6F54A4C5CD899CBD69263090DFE8B0EA7C6EE62A6A4441B8B68638C5"
    }
  ];

  return (
    <section id="awards" className="min-h-screen relative overflow-y-auto bg-[#1a1a1a] py-16 md:py-20 px-4 md:px-8">
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
            AWARDS & CERTIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-[#c4a574] mx-auto"></div>
        </div>

        {/* Award Section */}
        <div className="mb-8 md:mb-12">
          <div className="bg-[#e8dcc0] p-5 md:p-6 border-4 border-[#3d2817] shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl md:text-3xl text-[#c4a574]">★</span>
              <span className="text-2xl md:text-3xl text-[#c4a574]">★</span>
              <span className="text-2xl md:text-3xl text-[#c4a574]">★</span>
            </div>
            
            <div className="mb-3">
              <span className="font-mono text-[10px] md:text-xs text-[#3d2817] uppercase tracking-wide">
                AWARD
              </span>
            </div>

            <h3 className="cinematic-font text-xl md:text-2xl text-[#3d2817] mb-2">
              {award.title}
            </h3>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-serif text-sm md:text-base text-[#3d2817] font-bold">
                {award.event}
              </span>
              <span className="text-[#3d2817]">•</span>
              <span className="font-mono text-xs md:text-sm text-[#3d2817]">
                {award.date}
              </span>
            </div>

            <p className="font-serif text-xs md:text-sm text-[#3d2817] mb-4 leading-relaxed">
              {award.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={award.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-xs md:text-sm text-[#3d2817] border-2 border-[#3d2817] px-4 py-2 hover:bg-[#c4a574] transition-colors"
              >
                VIEW PROJECT →
              </a>
              <a
                href={award.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-xs md:text-sm text-[#3d2817] border-2 border-[#3d2817] px-4 py-2 hover:bg-[#c4a574] transition-colors"
              >
                VIEW CODE →
              </a>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-[#e8dcc0] p-4 md:p-5 border-4 border-[#3d2817] shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="mb-3">
                <span className="font-mono text-[9px] md:text-[10px] text-[#3d2817] uppercase tracking-wide border border-[#3d2817] px-2 py-1">
                  CERTIFICATION
                </span>
              </div>

              <h3 className="cinematic-font text-base md:text-lg text-[#3d2817] mb-2 leading-tight">
                {cert.title}
              </h3>

              <div className="mb-3 pb-3 border-b-2 border-dashed border-[#3d2817]">
                <p className="font-serif text-xs md:text-sm text-[#3d2817] font-bold">
                  {cert.issuer}
                </p>
                <p className="font-mono text-[10px] md:text-xs text-[#3d2817] opacity-70">
                  {cert.date}
                </p>
              </div>

              <a
                href={cert.link}
                className="inline-block font-mono text-[10px] md:text-xs text-[#3d2817] hover:font-bold transition-all"
              >
                VIEW →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
