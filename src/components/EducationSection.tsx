import React from 'react';
import { GraduationCap, Award, BookOpen, School, CheckCircle, Sparkles } from 'lucide-react';
import { educationList, teachingExperience } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B735B]">
            Academic Rigor & Credentials
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#2D241E]">
            Education, Certifications & Foundation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C4D43] leading-relaxed">
            A strong multidisciplinary intellectual foundation spanning graduate doctoral studies, medical sciences, STEM education, and official certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Academic Degrees & Medical Studies */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-[#2D241E] flex items-center gap-2.5 pb-2 border-b border-[#E8E2D9]">
              <GraduationCap className="w-5 h-5 text-[#8B735B]" />
              <span>Higher Education & Advanced Studies</span>
            </h3>

            <div className="space-y-4">
              {educationList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E8E2D9] shadow-2xs hover:border-[#D2B48C] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="text-lg font-bold text-[#2D241E]">
                      {item.degree}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F2EDE4] text-[#4A3728] border border-[#D9D2C5] w-fit">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-[#8B735B] mb-2">
                    {item.institution}
                  </h4>

                  {item.details && (
                    <p className="text-xs sm:text-sm text-[#5C4D43] leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Official Certification Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#D2B48C] ring-2 ring-[#D2B48C]/30 shadow-2xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4A3728] text-[#F2EDE4] flex items-center justify-center shrink-0 shadow-xs">
                  <Award className="w-6 h-6 text-[#D2B48C]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#2D241E]">
                    Sun / Oracle Certified Java Programmer
                  </h4>
                  <p className="text-xs text-[#5C4D43] mt-1.5 leading-relaxed">
                    Formal industry certification validating core Java language specification, concurrency, object-oriented design patterns, memory model, and algorithmic data structures.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: STEM Teaching & Instruction History */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-[#2D241E] flex items-center gap-2.5 pb-2 border-b border-[#E8E2D9]">
              <School className="w-5 h-5 text-[#8B735B]" />
              <span>STEM Teaching & Mentorship</span>
            </h3>

            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E8E2D9] shadow-2xs space-y-4">
              <p className="text-xs text-[#5C4D43] leading-relaxed">
                Prior to senior software engineering, Glenn served as an educator in chemistry and mathematics—honing patient problem deconstruction, structured mentorship, and articulate communication.
              </p>

              <div className="space-y-3.5 pt-2">
                {teachingExperience.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E8E2D9] flex flex-col justify-between hover:border-[#D9D2C5] transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-xs sm:text-sm text-[#2D241E]">
                        {item.role}
                      </span>
                      <span className="text-[11px] font-bold text-[#8B735B] shrink-0">
                        {item.period}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#8B735B] mt-0.5">
                      {item.location}
                    </span>
                    <p className="text-xs text-[#5C4D43] mt-1.5 leading-snug">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
