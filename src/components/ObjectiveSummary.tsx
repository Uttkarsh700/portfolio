import React from 'react';
import { Target, MessageSquare, Compass, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export const ObjectiveSummary: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Results-Driven Architecture",
      subtitle: "Project Management & Demanding Deadlines",
      description: "Highly motivated software engineer with deep project management capabilities. Adept at navigating strictly defined enterprise specifications, mission-critical production deadlines, and high-load transaction systems without compromising stability."
    },
    {
      icon: MessageSquare,
      title: "Decisive Communicator",
      subtitle: "Interfacing with Teams & End Users",
      description: "Decisive problem solver with exceptional cross-functional communication. Seamlessly bridges business stakeholders, systems architects, development squads, and end users to turn ambiguous requirements into maintainable, scalable software."
    },
    {
      icon: Compass,
      title: "Mission-Oriented Analytical Mindset",
      subtitle: "Empirical Reasoning & Sound Logic",
      description: "Rooted in extensive post-graduate doctoral research at UT Austin and medical sciences training, brings methodical scientific rigor to analyze complex systems, audit deep code bottlenecks, and derive logically sound architectures."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B735B]">
            Core Competencies & Leadership
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#2D241E]">
            Summary of Qualifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C4D43] leading-relaxed">
            A proven track record of engineering resilience across banking, telematics, telecom, retail POS, and enterprise logistics.
          </p>
        </div>

        {/* 3 Qualification Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-[#E8E2D9] shadow-2xs flex flex-col justify-between hover:shadow-xs transition-shadow relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F2EDE4] rounded-bl-full -mr-6 -mt-6 group-hover:bg-[#E8E2D9] transition-colors" />
                
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#4A3728] text-[#F2EDE4] flex items-center justify-center mb-5 shadow-xs relative z-10">
                    <IconComponent className="w-6 h-6 text-[#D2B48C]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#2D241E] leading-snug">
                    {pillar.title}
                  </h3>
                  
                  <span className="inline-block mt-1 text-xs font-semibold text-[#8B735B] uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>

                  <p className="mt-4 text-sm text-[#5C4D43] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E2D9] flex items-center text-xs font-semibold text-[#4A3728]">
                  <CheckCircle2 className="w-4 h-4 text-[#8B735B] mr-2 shrink-0" />
                  <span>Enterprise Verified Standards</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Competency Strategic Summary Card matching Design HTML */}
        <div className="mt-10 bg-[#4A3728] p-8 sm:p-10 rounded-3xl text-[#F2EDE4] shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2B48C] opacity-90 mb-5 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D2B48C]" />
            <span>Strategic Competencies & Capabilities</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactInfo.qualifications.map((qual, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-[#F2EDE4]/95">
                <span className="text-[#D2B48C] text-lg font-bold leading-none mt-0.5">•</span>
                <span className="leading-relaxed">{qual}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
