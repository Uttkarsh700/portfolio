import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ObjectiveSummary } from './components/ObjectiveSummary';
import { AiDataScienceTraining } from './components/AiDataScienceTraining';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintableResumeModal } from './components/PrintableResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D241E] font-sans selection:bg-[#D2B48C] selection:text-[#2D241E]">
      {/* Sticky Header Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Executive Hero & Header with Likeness, Objective & Metrics */}
        <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 3-Pillar Summary of Qualifications */}
        <ObjectiveSummary />

        {/* Prominently Requested: AI & Data Science Specialization & Training */}
        <AiDataScienceTraining />

        {/* Full Interactive Career Experience Timeline & Filters */}
        <ExperienceSection />

        {/* Technical Skills & Architecture Matrix */}
        <SkillsMatrix />

        {/* Education, Certifications & STEM Foundation */}
        <EducationSection />

        {/* Direct Contact & Recruiter Message Drafter */}
        <ContactSection />
      </main>

      {/* Executive Dark Brown Footer */}
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* ATS-Compliant Printable Resume View Modal */}
      <PrintableResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
