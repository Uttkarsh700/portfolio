import React, { useState } from 'react';
import { Linkedin, Mail, Phone, Printer, Menu, X, FileText } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'AI & Data Science', href: '#ai-data-science' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#D9D2C5] transition-all no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Monogram & Name */}
          <a href="#about" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-[#4A3728] text-[#F2EDE4] flex items-center justify-center font-serif text-xl font-bold tracking-tight shadow-xs group-hover:bg-[#2D241E] transition-colors">
              GM
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold text-[#2D241E] tracking-tight group-hover:text-[#4A3728] transition-colors leading-tight">
                Glenn R. Margolis
              </span>
              <span className="text-xs font-semibold text-[#8B735B] tracking-[0.18em] uppercase">
                Senior Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#4A3728] hover:text-[#2D241E] hover:bg-[#F2EDE4] rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#4A3728] bg-[#F2EDE4] hover:bg-[#E8E2D9] border border-[#D9D2C5] rounded-full transition-all shadow-2xs active:scale-98"
              title="View & Print Full ATS-Friendly Resume"
            >
              <Printer className="w-3.5 h-3.5 text-[#8B735B]" />
              <span>Print / PDF</span>
            </button>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#2D241E] bg-[#FFFFFF] hover:bg-[#F2EDE4] border border-[#D9D2C5] rounded-full transition-all shadow-2xs"
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#2D241E] bg-[#D2B48C] hover:bg-[#C5A57C] rounded-full transition-all shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResumeModal}
              className="p-2 text-[#4A3728] bg-[#F2EDE4] rounded-xl border border-[#D9D2C5]"
              aria-label="Resume View"
            >
              <FileText className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A3728] hover:bg-[#F2EDE4] rounded-xl transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D9D2C5] bg-[#FAF7F2] px-4 pt-3 pb-5 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#D9D2C5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-[#4A3728] bg-[#F2EDE4] border border-[#D9D2C5] rounded-full"
            >
              <Printer className="w-4 h-4 text-[#8B735B]" />
              <span>Print Resume</span>
            </button>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-[#2D241E] bg-white border border-[#D9D2C5] rounded-full"
            >
              <Linkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold uppercase tracking-wider text-[#4A3728] hover:text-[#2D241E] hover:bg-[#F2EDE4] rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2">
            <a
              href={`mailto:${contactInfo.email}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-[#2D241E] bg-[#D2B48C] hover:bg-[#C5A57C] rounded-full shadow-2xs"
            >
              <Mail className="w-4 h-4" />
              <span>Email margol1962@yahoo.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
