import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Copy, Check, ExternalLink, Sparkles, Download, ArrowDown, Award, Briefcase } from 'lucide-react';
import { contactInfo, keyAccomplishments } from '../data/portfolioData';
import profileImage from '../assets/Profile.jpeg';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string>(() => {
    const storedPhotoUrl = localStorage.getItem('glenn_margolis_custom_avatar');
    return storedPhotoUrl && storedPhotoUrl !== '/Profile.jpeg' ? storedPhotoUrl : profileImage;
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setCustomPhotoUrl(result);
        localStorage.setItem('glenn_margolis_custom_avatar', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#F6F0E7] to-[#FAF7F2] border-b border-[#E7DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait & Quick Attributes */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] group">
              
              {/* Outer decorative frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D2B48C] via-[#D9D2C5] to-[#F2EDE4] rounded-3xl opacity-70 blur-xs transition-all duration-300 group-hover:opacity-100" />
              
              {/* Main Card Container */}
              <div className="relative bg-[#F2EDE4] p-3.5 rounded-3xl shadow-sm border border-[#D9D2C5] overflow-hidden">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#2D241E] via-[#4A3728] to-[#1E140E] flex flex-col items-center justify-center">
                  
                  {customPhotoUrl ? (
                    <img
                      src={customPhotoUrl}
                      alt={contactInfo.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    /* High-Craft Stylized Executive Portrait SVG capturing Glenn's likeness */
                    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-[#241A14]">
                      {/* Ambient Warm Office Glow */}
                      <div className="absolute top-0 right-0 w-44 h-44 bg-[#D2B48C]/25 rounded-full blur-2xl" />
                      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#7D5A50]/30 rounded-full blur-xl" />
                      
                      {/* Stylized Executive Portrait Vector */}
                      <svg viewBox="0 0 320 420" className="w-full h-full z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1E293B" />
                            <stop offset="60%" stopColor="#0F172A" />
                            <stop offset="100%" stopColor="#090D16" />
                          </linearGradient>
                          <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#E0F2FE" />
                            <stop offset="100%" stopColor="#BAE6FD" />
                          </linearGradient>
                          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FBD3B6" />
                            <stop offset="100%" stopColor="#E2A682" />
                          </linearGradient>
                          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#A05A2C" />
                            <stop offset="100%" stopColor="#6E3A1A" />
                          </linearGradient>
                        </defs>

                        {/* Background subtle blinds */}
                        <line x1="10" y1="40" x2="310" y2="40" stroke="#FAF7F2" strokeOpacity="0.05" strokeWidth="2" />
                        <line x1="10" y1="70" x2="310" y2="70" stroke="#FAF7F2" strokeOpacity="0.05" strokeWidth="2" />
                        <line x1="10" y1="100" x2="310" y2="100" stroke="#FAF7F2" strokeOpacity="0.05" strokeWidth="2" />
                        <line x1="10" y1="130" x2="310" y2="130" stroke="#FAF7F2" strokeOpacity="0.05" strokeWidth="2" />

                        {/* Suit Shoulders & Torso */}
                        <path d="M40 420 C50 310, 80 270, 120 250 L200 250 C240 270, 270 310, 280 420 Z" fill="url(#blazerGrad)" />
                        
                        {/* Light Blue Shirt V-Collar */}
                        <path d="M120 250 L160 330 L200 250 L180 230 L140 230 Z" fill="url(#shirtGrad)" />
                        <path d="M140 235 L160 280 L180 235" stroke="#7DD3FC" strokeWidth="2" />

                        {/* Neck */}
                        <rect x="135" y="195" width="50" height="45" rx="6" fill="url(#skinGrad)" />
                        
                        {/* Head / Face */}
                        <ellipse cx="160" cy="155" rx="55" ry="65" fill="url(#skinGrad)" />

                        {/* Hair */}
                        <path d="M105 145 C100 95, 130 75, 160 75 C190 75, 220 95, 215 145 C210 120, 195 105, 160 105 C125 105, 110 120, 105 145 Z" fill="url(#hairGrad)" />
                        <path d="M145 76 C170 65, 205 75, 212 95 C200 88, 175 80, 145 76 Z" fill="#C47D48" />

                        {/* Ears */}
                        <ellipse cx="103" cy="158" rx="8" ry="14" fill="#E2A682" />
                        <ellipse cx="217" cy="158" rx="8" ry="14" fill="#E2A682" />

                        {/* Modern Dark-Rimmed Glasses */}
                        <rect x="118" y="142" width="34" height="24" rx="5" fill="none" stroke="#1E293B" strokeWidth="4.5" />
                        <rect x="168" y="142" width="34" height="24" rx="5" fill="none" stroke="#1E293B" strokeWidth="4.5" />
                        <line x1="152" y1="152" x2="168" y2="152" stroke="#1E293B" strokeWidth="4" />
                        <line x1="105" y1="148" x2="118" y2="148" stroke="#1E293B" strokeWidth="3.5" />
                        <line x1="202" y1="148" x2="215" y2="148" stroke="#1E293B" strokeWidth="3.5" />

                        {/* Eyes */}
                        <circle cx="135" cy="154" r="4" fill="#292524" />
                        <circle cx="185" cy="154" r="4" fill="#292524" />
                        <circle cx="136.5" cy="152.5" r="1.2" fill="#FFFFFF" />
                        <circle cx="186.5" cy="152.5" r="1.2" fill="#FFFFFF" />

                        {/* Nose & Friendly Smile */}
                        <path d="M158 162 L163 174 L157 175" stroke="#D18C64" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M142 190 Q160 204 178 190" stroke="#A75D3B" strokeWidth="3" fill="none" strokeLinecap="round" />
                        <path d="M146 191 Q160 198 174 191" fill="#FFFFFF" />

                        {/* Lapels of Suit */}
                        <path d="M110 250 L135 340 L160 380 L185 340 L210 250" stroke="#0F172A" strokeWidth="4" fill="none" />
                      </svg>

                      {/* Monogram watermark overlay */}
                      <div className="absolute bottom-3 right-3 text-right">
                        <span className="text-white/40 font-serif text-xs tracking-widest uppercase">
                          Dallas, Texas
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Badges Over Image */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#2D241E]/90 text-[#FAF7F2] backdrop-blur-md shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Senior Engineer
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#7D5A50]/95 text-white backdrop-blur-md shadow-xs">
                      <Sparkles className="w-3 h-3 text-[#D2B48C]" />
                      AI / ML Focus
                    </span>
                  </div>

                </div>

                {/* Photo upload toggle option */}
                <div className="mt-3 pt-2.5 border-t border-[#D9D2C5] flex items-center justify-between text-xs text-[#8B735B]">
                  <span className="font-semibold text-[#4A3728]">Glenn Ronald Margolis</span>
                  <label className="cursor-pointer text-[#4A3728] hover:text-[#2D241E] font-semibold hover:underline inline-flex items-center gap-1">
                    <span>{customPhotoUrl ? 'Change Photo' : 'Upload Photo'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

            </div>

            {/* Quick LinkedIn Link Card Under Photo */}
            <div className="w-full max-w-[340px] sm:max-w-[360px] mt-4 bg-white p-3.5 rounded-2xl border border-[#E8E2D9] shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#2D241E]">LinkedIn Profile</span>
                  <span className="text-[11px] text-[#8B735B]">in/glenn-margolis-b253a95</span>
                </div>
              </div>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#4A3728] hover:bg-[#F2EDE4] rounded-xl border border-[#D9D2C5] transition-colors"
                title="Open LinkedIn"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Hero Narrative, Objective & Quick Contact */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            
            {/* Status pill & title */}
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F2EDE4] text-[#4A3728] border border-[#D9D2C5]">
                <Award className="w-3.5 h-3.5 text-[#8B735B]" />
                <span>25+ Years Enterprise Engineering & Architectural Leadership</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2D241E] tracking-tight leading-tight">
                GLENN RONALD<br />MARGOLIS
              </h1>

              <p className="text-[#8B735B] font-medium mt-1 uppercase tracking-[0.2em] text-sm">
                Senior Software Engineer
              </p>
            </div>

            {/* Contact Chips with 1-Click Copy & Direct Links */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm">
              
              {/* Location */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#D9D2C5] text-[#4A3728] shadow-2xs">
                <span className="w-5 h-5 flex items-center justify-center bg-[#D2B48C] rounded-full text-white text-[10px] font-bold">L</span>
                <span className="text-xs font-medium">{contactInfo.address}</span>
              </div>

              {/* Email with copy */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#D9D2C5] text-[#4A3728] hover:border-[#8B735B] hover:text-[#2D241E] transition-all shadow-2xs cursor-pointer group"
                title="Click to copy email address"
              >
                <span className="w-5 h-5 flex items-center justify-center bg-[#D2B48C] rounded-full text-white text-[10px] font-bold">@</span>
                <span className="text-xs font-medium">{contactInfo.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#8B735B] group-hover:text-[#2D241E] ml-1" />
                )}
              </button>

              {/* Phone with copy */}
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#D9D2C5] text-[#4A3728] hover:border-[#8B735B] hover:text-[#2D241E] transition-all shadow-2xs cursor-pointer group"
                title="Click to copy phone number"
              >
                <span className="w-5 h-5 flex items-center justify-center bg-[#D2B48C] rounded-full text-white text-[10px] font-bold">P</span>
                <span className="text-xs font-medium">{contactInfo.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-[#8B735B] group-hover:text-[#2D241E] ml-1" />
                )}
              </button>

            </div>

            {/* Professional Objective Box matching Design HTML */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#E8E2D9] relative overflow-hidden">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B735B] mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#8B735B]" />
                <span>Professional Objective</span>
              </h2>

              <p className="text-xl font-serif text-[#2D241E] leading-relaxed italic">
                "{contactInfo.objective}"
              </p>
            </div>

            {/* Call to Actions Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4A3728] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#2D241E] shadow-sm transition-all active:scale-98"
              >
                <span>Career Milestones</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#D2B48C]" />
              </a>

              <a
                href="#ai-data-science"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#7D5A50] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#684840] shadow-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D2B48C]" />
                <span>AI & Data Science Specialization</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#4A3728] font-semibold text-xs uppercase tracking-wider border border-[#D9D2C5] hover:bg-[#F2EDE4] shadow-2xs transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[#8B735B]" />
                <span>Print Resume</span>
              </button>
            </div>

          </div>

        </div>

        {/* 4 Impact Counters Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {keyAccomplishments.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-[#E8E2D9] shadow-2xs flex flex-col justify-between hover:border-[#D2B48C] transition-colors"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2D241E] tracking-tight">
                  {item.metric}
                </span>
                <h4 className="mt-1 text-sm font-bold text-[#4A3728] leading-snug">
                  {item.label}
                </h4>
              </div>
              <p className="mt-2 text-xs text-[#8B735B] font-medium">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
