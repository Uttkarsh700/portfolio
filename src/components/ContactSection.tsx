import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Copy, Check, UserCheck, Download, ExternalLink } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    company: '',
    inquiryType: 'Senior Software Engineer Role',
    message: ''
  });
  const [copiedDraft, setCopiedDraft] = useState(false);

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

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${formData.inquiryType}] Connecting with Glenn Margolis`);
    const body = encodeURIComponent(
      `Hello Glenn,\n\nMy name is ${formData.senderName || 'a recruiter / hiring manager'}${
        formData.company ? ` from ${formData.company}` : ''
      }.\n\nI am reaching out regarding a ${formData.inquiryType}.\n\nMessage:\n${
        formData.message || 'We would like to discuss a senior engineering opportunity with you.'
      }\n\nBest regards,\n${formData.senderName}\n${formData.senderEmail}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyDraft = () => {
    const draft = `Subject: [${formData.inquiryType}] Connecting with Glenn Margolis\n\nHello Glenn,\n\nMy name is ${
      formData.senderName || '[Your Name]'
    }${formData.company ? ` from ${formData.company}` : ''}.\n\nI am reaching out regarding a ${
      formData.inquiryType
    }.\n\nMessage:\n${formData.message || 'We would like to discuss a senior engineering opportunity with you.'}\n\nBest regards,\n${
      formData.senderName || '[Your Name]'
    }\n${formData.senderEmail || '[Your Email]'}`;

    navigator.clipboard.writeText(draft);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Glenn Ronald Margolis
N:Margolis;Glenn;Ronald;;
TITLE:Senior Java Developer & Enterprise Software Architect
TEL;TYPE=CELL:214-334-0546
EMAIL;TYPE=INTERNET:margol1962@yahoo.com
ADR;TYPE=HOME:;;2831 Claudette Ave.;Dallas;TX;75211;USA
URL:${contactInfo.linkedin}
NOTE:Senior Software Engineer & Java Architect specializing in microservices and AI/ML data science.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Glenn_Margolis_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8B735B]">
            Initiate Contact
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#2D241E]">
            Get In Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5C4D43] leading-relaxed">
            Interested in discussing senior software engineering, microservices architecture, or AI/ML initiatives? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Channels & Profile Summary */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="bg-[#FAF7F2] p-7 sm:p-8 rounded-3xl border border-[#E8E2D9] shadow-2xs space-y-5">
              <h3 className="text-xl font-bold text-[#2D241E] pb-3 border-b border-[#E8E2D9]">
                Direct Coordinates
              </h3>

              {/* Email */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#D9D2C5] flex items-center justify-center text-[#4A3728] shrink-0 shadow-2xs">
                    <Mail className="w-5 h-5 text-[#8B735B]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#8B735B] block uppercase tracking-[0.18em]">Email Address</span>
                    <a href={`mailto:${contactInfo.email}`} className="text-sm font-bold text-[#2D241E] hover:text-[#8B735B] transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-[#8B735B] hover:text-[#2D241E] hover:bg-white rounded-full border border-[#D9D2C5] transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#8B735B]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#D9D2C5] flex items-center justify-center text-[#4A3728] shrink-0 shadow-2xs">
                    <Phone className="w-5 h-5 text-[#8B735B]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#8B735B] block uppercase tracking-[0.18em]">Phone / Direct</span>
                    <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="text-sm font-bold text-[#2D241E] hover:text-[#8B735B] transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 text-[#8B735B] hover:text-[#2D241E] hover:bg-white rounded-full border border-[#D9D2C5] transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#8B735B]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white border border-[#D9D2C5] flex items-center justify-center text-[#4A3728] shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5 text-[#8B735B]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8B735B] block uppercase tracking-[0.18em]">Mailing Address</span>
                  <span className="text-sm font-bold text-[#2D241E]">
                    {contactInfo.address}
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start justify-between gap-3 pt-3 border-t border-[#E8E2D9]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#4A3728] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Linkedin className="w-5 h-5 text-[#D2B48C]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#8B735B] block uppercase tracking-[0.18em]">LinkedIn Network</span>
                    <span className="text-sm font-bold text-[#2D241E]">Glenn Margolis</span>
                  </div>
                </div>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-[#4A3728] hover:bg-[#38281D] rounded-full transition-colors"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3 text-[#D2B48C]" />
                </a>
              </div>

              {/* Download vCard CTA */}
              <div className="pt-2">
                <button
                  onClick={handleDownloadVCard}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#4A3728] bg-white hover:bg-[#F2EDE4] border border-[#D9D2C5] rounded-full transition-all shadow-2xs"
                >
                  <Download className="w-4 h-4 text-[#8B735B]" />
                  <span>Save Glenn Margolis to Contacts (.vcf)</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Recruiter Message Drafter */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] p-7 sm:p-8 rounded-3xl border border-[#E8E2D9] shadow-2xs">
              <h3 className="text-xl font-bold text-[#2D241E] mb-1">
                Send a Message or Opportunity Inquiry
              </h3>
              <p className="text-xs text-[#5C4D43] mb-6">
                Fill out the details below to launch a preformatted email or copy a polished draft message.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.18em] text-[#8B735B] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.senderName}
                      onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#D9D2C5] rounded-2xl text-[#2D241E] focus:outline-hidden focus:border-[#4A3728]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.18em] text-[#8B735B] mb-1.5">
                      Company or Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Enterprise Client / Agency"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#D9D2C5] rounded-2xl text-[#2D241E] focus:outline-hidden focus:border-[#4A3728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.18em] text-[#8B735B] mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sjenkins@company.com"
                      value={formData.senderEmail}
                      onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#D9D2C5] rounded-2xl text-[#2D241E] focus:outline-hidden focus:border-[#4A3728]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.18em] text-[#8B735B] mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#D9D2C5] rounded-2xl text-[#2D241E] focus:outline-hidden focus:border-[#4A3728]"
                    >
                      <option value="Senior Java / Microservices Role">Senior Java / Microservices Role</option>
                      <option value="AI / Data Science Engineering Role">AI / Data Science Engineering Role</option>
                      <option value="Architecture Consulting Contract">Architecture Consulting Contract</option>
                      <option value="General Recruiter Inquiry">General Recruiter Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.18em] text-[#8B735B] mb-1.5">
                    Opportunity Overview / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide role requirements, tech stack (e.g. Spring Boot, Java 21, AWS, Camel), location/remote, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-white border border-[#D9D2C5] rounded-2xl text-[#2D241E] focus:outline-hidden focus:border-[#4A3728]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#4A3728] hover:bg-[#38281D] text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-all active:scale-98"
                  >
                    <Send className="w-4 h-4 text-[#D2B48C]" />
                    <span>Open in Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyDraft}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#F2EDE4] text-[#4A3728] border border-[#D9D2C5] font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    {copiedDraft ? (
                      <>
                        <Check className="w-4 h-4 text-[#8B735B]" />
                        <span className="text-[#4A3728]">Draft Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#8B735B]" />
                        <span>Copy Message Draft</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
