import React from 'react';
import { BrainCircuit, Sparkles, BookOpen, Layers, Cpu, Database, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { aiMlTrainingData } from '../data/portfolioData';

export const AiDataScienceTraining: React.FC = () => {
  return (
    <section id="ai-data-science" className="py-16 sm:py-20 bg-white border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-[#7D5A50] text-white mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D2B48C]" />
              <span>Active Training & Specialization</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D241E] leading-tight">
              Data Science & AI / ML Architecture
            </h2>
            
            <p className="mt-3 text-base sm:text-lg text-[#5C4D43] leading-relaxed">
              Bridging over two decades of distributed Java microservice engineering with modern data science pipelines, predictive models, and Generative AI system architectures.
            </p>
          </div>

          <div className="shrink-0 bg-[#F2EDE4] px-5 py-3.5 rounded-2xl border border-[#D9D2C5] shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#D9D2C5] flex items-center justify-center text-[#8B735B]">
              <TrendingUp className="w-5 h-5 text-[#8B735B]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#8B735B] uppercase tracking-[0.18em] block">Status</span>
              <span className="text-sm font-bold text-[#2D241E]">{aiMlTrainingData.status}</span>
            </div>
          </div>
        </div>

        {/* Narrative & Bridge Banner matching Natural Tones Continuous Learning Card */}
        <div className="bg-[#7D5A50] p-8 sm:p-10 rounded-3xl text-white shadow-sm mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] mb-3 text-white/80">
              <BrainCircuit className="w-4 h-4 text-[#D2B48C]" />
              <span>Continuous Learning • Future Ready</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif italic text-white mb-3">
              The Architect's Edge: Enterprise Java Meets Modern AI & Data Science
            </h3>
            
            <p className="text-white/90 leading-relaxed text-sm sm:text-base max-w-4xl">
              {aiMlTrainingData.description}
            </p>
          </div>
        </div>

        {/* 4 Core Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {aiMlTrainingData.focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] p-7 sm:p-8 rounded-3xl border border-[#E8E2D9] shadow-2xs hover:border-[#D2B48C] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#D9D2C5] flex items-center justify-center text-[#4A3728] font-serif font-bold text-base shadow-2xs">
                    0{idx + 1}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-[#D9D2C5] text-[#8B735B]">
                    Focus Area
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#2D241E] mb-2">
                  {area.name}
                </h4>

                <p className="text-sm text-[#5C4D43] leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Technologies / Tools tags matching Design HTML pills */}
              <div className="pt-4 border-t border-[#E8E2D9]">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B735B] block mb-2.5">
                  Core Toolset & Frameworks:
                </span>
                <div className="flex flex-wrap gap-2">
                  {area.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-white border border-[#D9D2C5] rounded-full text-[11px] font-semibold uppercase text-[#4A3728] shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Target Applications in Deep Earth Walnut */}
        <div className="bg-[#4A3728] text-[#F2EDE4] p-8 sm:p-10 rounded-3xl shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#5C4533]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2B48C]">
                Enterprise Integration Potential
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                How Glenn Applies AI/ML to Enterprise Systems
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#D2B48C]">
              <CheckCircle className="w-4 h-4 text-[#D2B48C]" />
              <span>Production-Grade Architecture Focus</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {aiMlTrainingData.enterpriseApplications.map((app, idx) => (
              <div
                key={idx}
                className="bg-[#38281D] p-5 rounded-2xl border border-[#5C4533] flex items-start gap-3.5"
              >
                <div className="w-6 h-6 rounded-full bg-[#D2B48C] text-[#2D241E] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                  {idx + 1}
                </div>
                <p className="text-sm text-[#F2EDE4]/95 leading-relaxed">
                  {app}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-5 border-t border-[#5C4533] flex flex-wrap items-center justify-between gap-4 text-xs text-[#D9D2C5]">
            <span>Continuous professional development through applied engineering and systems-level AI workflows.</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D2B48C] hover:bg-[#C5A57C] text-[#2D241E] font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Connect on AI Opportunities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
