import React, { useState, useMemo } from 'react';
import { Briefcase, Calendar, MapPin, Search, ChevronDown, ChevronUp, Layers, CheckCircle2, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { ExperienceItem } from '../types';

export const ExperienceSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedRoles, setExpandedRoles] = useState<Record<string, boolean>>({
    tcs: true,
    siriusxm: true,
    'southern-glazers': true
  });

  const industries = ['All', 'FinTech & Banking', 'Media & Telecom', 'Retail & POS', 'Enterprise & Systems'];

  const toggleExpand = (id: string) => {
    setExpandedRoles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    experiences.forEach(e => { all[e.id] = true; });
    setExpandedRoles(all);
  };

  const collapseAll = () => {
    setExpandedRoles({});
  };

  const filteredExperiences = useMemo(() => {
    return experiences.filter(exp => {
      const matchesIndustry = selectedIndustry === 'All' || exp.industry === selectedIndustry;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesIndustry;

      const matchesSearch =
        exp.company.toLowerCase().includes(query) ||
        exp.role.toLowerCase().includes(query) ||
        exp.summary.toLowerCase().includes(query) ||
        exp.technologies.some(tech => tech.toLowerCase().includes(query)) ||
        exp.highlights.some(h => h.toLowerCase().includes(query));

      return matchesIndustry && matchesSearch;
    });
  }, [selectedIndustry, searchQuery]);

  return (
    <section id="experience" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B735B]">
              Career Milestones
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#2D241E]">
              Professional Experience
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5C4D43] max-w-2xl">
              25+ continuous years of development, system architecture, performance optimization, and mission-critical production support.
            </p>
          </div>

          {/* Expand/Collapse All Buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={expandAll}
              className="px-3.5 py-1.5 text-xs font-semibold text-[#4A3728] hover:text-[#2D241E] hover:bg-[#F2EDE4] rounded-full border border-[#D9D2C5] transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-3.5 py-1.5 text-xs font-semibold text-[#4A3728] hover:text-[#2D241E] hover:bg-[#F2EDE4] rounded-full border border-[#D9D2C5] transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Filter Controls: Industry Tabs & Search Bar */}
        <div className="bg-[#F2EDE4] p-4 sm:p-5 rounded-3xl border border-[#D9D2C5] mb-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Industry Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {industries.map(ind => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedIndustry === ind
                    ? 'bg-[#4A3728] text-white shadow-2xs'
                    : 'bg-white text-[#4A3728] hover:bg-[#FAF7F2] border border-[#D9D2C5]'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#8B735B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech (e.g. Zelle, Camel, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-[#D9D2C5] rounded-full text-[#2D241E] placeholder-[#8B735B] focus:outline-hidden focus:border-[#4A3728]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8B735B] hover:text-[#2D241E]"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Experience List */}
        {filteredExperiences.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#E8E2D9]">
            <p className="text-[#5C4D43] font-medium">No roles match your search criteria "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedIndustry('All'); }}
              className="mt-3 text-xs font-semibold text-[#8B735B] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredExperiences.map((exp: ExperienceItem) => {
              const isExpanded = !!expandedRoles[exp.id];

              return (
                <div
                  key={exp.id}
                  className={`bg-white rounded-3xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                    exp.isCurrent
                      ? 'border-[#D2B48C] ring-2 ring-[#D2B48C]/30'
                      : 'border-[#E8E2D9] hover:border-[#D9D2C5]'
                  }`}
                >
                  {/* Card Header (Clickable to Toggle) */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-6 sm:p-7 cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAF7F2]/80 transition-colors"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xl sm:text-2xl font-bold text-[#2D241E]">
                          {exp.role}
                        </span>

                        {exp.isCurrent && (
                          <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#D2B48C] text-[#2D241E]">
                            Current Role
                          </span>
                        )}

                        <span className="px-3 py-0.5 rounded-full text-[11px] font-semibold bg-[#F2EDE4] text-[#4A3728] border border-[#D9D2C5]">
                          {exp.industry}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-[#5C4D43]">
                        <span className="font-bold text-[#2D241E] flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#8B735B]" />
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#8B735B]" />
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-semibold text-[#8B735B]">
                          <Calendar className="w-3.5 h-3.5 text-[#8B735B]" />
                          {exp.period}
                        </span>
                        <span>•</span>
                        <span className="text-[#8B735B]">({exp.employmentType})</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                      <span className="text-xs font-semibold text-[#8B735B] hidden sm:inline uppercase tracking-wider">
                        {isExpanded ? 'Hide Details' : 'View Achievements'}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#F2EDE4] border border-[#D9D2C5] flex items-center justify-center text-[#4A3728]">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Summary Snippet Always Visible */}
                  <div className="px-6 sm:px-7 pb-4">
                    <p className="text-xs sm:text-sm text-[#5C4D43] leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>

                  {/* Expandable Details Block */}
                  {isExpanded && (
                    <div className="px-6 sm:px-7 pb-7 pt-3 border-t border-[#E8E2D9] bg-[#FAF7F2]/50">
                      
                      {/* Key Highlights / Bullets */}
                      <div className="mt-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B735B] mb-3">
                          Key Responsibilities & System Impact:
                        </h4>
                        <ul className="space-y-2.5">
                          {exp.highlights.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3728]">
                              <CheckCircle2 className="w-4 h-4 text-[#8B735B] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Pill Grid matching Natural Tones */}
                      <div className="mt-6 pt-4 border-t border-[#E8E2D9]">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B735B] block mb-2.5">
                          Core Technology Stack:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 bg-white border border-[#D9D2C5] rounded-full text-[11px] font-semibold uppercase text-[#4A3728] shadow-2xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
