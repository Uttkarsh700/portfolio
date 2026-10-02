import React from 'react';
import { Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D241E] text-[#FAF7F2] border-t border-[#4A3728] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#4A3728]">
          
          {/* Brand & Summary */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#4A3728] text-[#D2B48C] flex items-center justify-center font-bold text-sm border border-[#5C4533] shadow-xs">
                GM
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {contactInfo.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#D9D2C5] leading-relaxed max-w-md">
              Senior Java Developer & Enterprise Software Architect specializing in high-throughput microservices, transaction routing, and active Data Science / AI & Machine Learning applications.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4A3728] hover:bg-[#5C4533] text-white text-xs font-bold uppercase tracking-wider border border-[#5C4533] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#D2B48C]" />
                <span>LinkedIn Profile</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F2] hover:bg-[#F2EDE4] text-[#2D241E] text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>View Full Resume</span>
              </button>
            </div>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2B48C]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#D9D2C5]">
              <li><a href="#about" className="hover:text-[#D2B48C] transition-colors">About & Objective</a></li>
              <li><a href="#experience" className="hover:text-[#D2B48C] transition-colors">Career Milestones</a></li>
              <li><a href="#ai-data-science" className="hover:text-[#D2B48C] transition-colors">AI & Data Science</a></li>
              <li><a href="#skills" className="hover:text-[#D2B48C] transition-colors">Skills & Tech Stack</a></li>
              <li><a href="#education" className="hover:text-[#D2B48C] transition-colors">Education & Foundations</a></li>
              <li><a href="#contact" className="hover:text-[#D2B48C] transition-colors">Contact Information</a></li>
            </ul>
          </div>

          {/* Contact Fast Lookup */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D2B48C]">
              Direct Coordinates
            </h4>
            <div className="space-y-2 text-xs text-[#D9D2C5]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D2B48C] shrink-0" />
                <span>Dallas, Texas 75211</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D2B48C] shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-[#D2B48C] underline">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D2B48C] shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="hover:text-[#D2B48C]">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B735B]">
          <p>
            © {new Date().getFullYear()} Glenn Ronald Margolis. Natural Tones Architectural Edition.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#D9D2C5] hover:text-[#D2B48C] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D2B48C]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
