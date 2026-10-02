import React, { useState } from 'react';
import { Code, BrainCircuit, Database, Cpu, Server, Globe, Check, Search } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SkillCategory } from '../types';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | 'all'>('all');
  const [skillSearch, setSkillSearch] = useState<string>('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-amber-700" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const filteredCategories = skillCategories.filter((cat, idx) => {
    if (activeTab !== 'all' && activeTab !== idx) return false;

    if (!skillSearch.trim()) return true;
    const query = skillSearch.toLowerCase();
    return (
      cat.title.toLowerCase().includes(query) ||
      cat.description.toLowerCase().includes(query) ||
      cat.skills.some(s => s.toLowerCase().includes(query))
    );
  });

  return (
    <section id="skills" className="py-16 sm:py-20 bg-white border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B735B]">
            Architectural Depth
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#2D241E]">
            Technical Skills & Architecture Matrix
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C4D43] leading-relaxed">
            Spanning modern distributed microservices in Java 21, active Data Science and AI/ML competencies, and resilient mission-critical mainframe foundations.
          </p>
        </div>

        {/* Tab Selection & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'all'
                  ? 'bg-[#4A3728] text-white shadow-2xs'
                  : 'bg-[#F2EDE4] text-[#4A3728] hover:bg-[#FAF7F2] border border-[#D9D2C5]'
              }`}
            >
              All Categories ({skillCategories.length})
            </button>

            {skillCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === idx
                    ? 'bg-[#4A3728] text-white shadow-2xs'
                    : 'bg-[#F2EDE4] text-[#4A3728] hover:bg-[#FAF7F2] border border-[#D9D2C5]'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#8B735B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Camel, Python)..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#D9D2C5] rounded-full text-[#2D241E] placeholder-[#8B735B] focus:outline-hidden focus:border-[#4A3728]"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((cat: SkillCategory, idx: number) => {
            const isAiCategory = cat.title.includes('AI, ML');

            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl border transition-all hover:shadow-sm flex flex-col justify-between ${
                  isAiCategory
                    ? 'bg-white border-[#D2B48C] ring-2 ring-[#D2B48C]/30 shadow-2xs'
                    : 'bg-[#FAF7F2] border-[#E8E2D9] shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-[#D9D2C5] text-[#4A3728] flex items-center justify-center shadow-2xs">
                      {getIcon(cat.iconName)}
                    </div>

                    {isAiCategory && (
                      <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#7D5A50] text-white">
                        Active Training
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#2D241E] leading-snug">
                    {cat.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-[#5C4D43] leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="space-y-2">
                    {cat.skills.map((skill, sIdx) => {
                      const isHighlighted = skillSearch && skill.toLowerCase().includes(skillSearch.toLowerCase());

                      return (
                        <div
                          key={sIdx}
                          className={`flex items-center justify-between px-3 py-2 rounded-2xl text-xs transition-colors border ${
                            isHighlighted
                              ? 'bg-[#F2EDE4] text-[#2D241E] font-bold border-[#8B735B]'
                              : 'bg-white text-[#4A3728] border-[#E8E2D9] hover:border-[#D9D2C5]'
                          }`}
                        >
                          <span className="font-medium">{skill}</span>
                          <Check className="w-3.5 h-3.5 text-[#8B735B] shrink-0 ml-1.5" />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E8E2D9] flex items-center justify-between text-[11px] text-[#8B735B]">
                  <span>{cat.skills.length} core competencies</span>
                  <span className="font-bold text-[#4A3728]">Enterprise Production</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
