import React from 'react';
import { X, Printer, Download, MapPin, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { contactInfo, experiences, skillCategories, educationList, teachingExperience, aiMlTrainingData } from '../data/portfolioData';

interface PrintableResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableResumeModal: React.FC<PrintableResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-2 sm:p-4 md:p-6 print:p-0 print:bg-white print:static print:block">
      
      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl my-4 sm:my-8 border border-[#D9D2C5] overflow-hidden print:border-none print:shadow-none print:my-0 print:rounded-none">
        
        {/* Top Control Bar (Hidden on Print) */}
        <div className="sticky top-0 z-20 bg-[#4A3728] text-[#FAF7F2] px-6 py-3.5 flex items-center justify-between no-print shadow-md">
          <div className="flex items-center gap-2">
            <Printer className="w-4 h-4 text-[#D2B48C]" />
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              Glenn Margolis — Standard ATS Resume View
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] text-[#2D241E] hover:bg-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-[#8B735B]" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#D9D2C5] hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-8 sm:p-12 text-[#111111] bg-white font-sans-body">
          
          {/* Header */}
          <div className="text-center pb-6 border-b-2 border-[#3C2415] mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] uppercase font-serif">
              {contactInfo.name}
            </h1>
            <p className="text-sm font-bold text-[#4A3728] mt-1 tracking-wide">
              {contactInfo.title}
            </p>
            <div className="mt-2 text-xs text-[#444444] flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
              <span>{contactInfo.address}</span>
              <span>•</span>
              <a href={`mailto:${contactInfo.email}`} className="text-[#111111] font-semibold underline">
                {contactInfo.email}
              </a>
              <span>•</span>
              <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="text-[#111111] font-semibold">
                {contactInfo.phone}
              </a>
              <span>•</span>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] font-semibold underline">
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Professional Objective */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3C2415] border-b border-[#CCCCCC] pb-1 mb-2">
              Professional Objective
            </h2>
            <p className="text-xs text-[#222222] leading-relaxed">
              {contactInfo.objective}
            </p>
          </div>

          {/* Summary of Qualifications */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3C2415] border-b border-[#CCCCCC] pb-1 mb-2">
              Summary of Qualifications
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-[#222222] leading-relaxed">
              {contactInfo.qualifications.map((q, idx) => (
                <li key={idx}>{q}</li>
              ))}
            </ul>
          </div>

          {/* Active AI / ML & Data Science Specialization */}
          <div className="mb-6 p-3 bg-[#FAF7F2] rounded-lg border border-[#D8C7B4]">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#3C2415]">
                {aiMlTrainingData.title}
              </h2>
              <span className="text-[10px] font-bold text-[#8C5835] bg-white px-2 py-0.5 rounded border border-[#D8C7B4]">
                {aiMlTrainingData.status}
              </span>
            </div>
            <p className="text-xs text-[#333333] leading-relaxed mb-2">
              {aiMlTrainingData.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#444444]">
              {aiMlTrainingData.focusAreas.map((area, idx) => (
                <div key={idx}>
                  <strong className="text-[#111111]">{area.name}:</strong> {area.tools.join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3C2415] border-b border-[#CCCCCC] pb-1 mb-2">
              Technical Skills Matrix
            </h2>
            <div className="space-y-1.5 text-xs text-[#222222]">
              <div>
                <strong>Programming & Architecture:</strong> Java 8 through OpenJDK 21, Spring Boot, Microservices, Apache Camel, REST, SOAP, SQL, COBOL/COBOL II, Natural, .Net, JCL, CICS, WebLogic, JBoss, WebSphere.
              </div>
              <div>
                <strong>Databases & Storage:</strong> Oracle 10/11g, Microsoft SQL Server, Elasticsearch, MongoDB, ADABAS, IBM DB2, Sybase, VSAM, SAP backend integration.
              </div>
              <div>
                <strong>AI & Data Science (In-Progress):</strong> Python, Pandas, NumPy, Scikit-learn, PyTorch, Predictive Modeling, Generative AI / LLM APIs, Vector Embeddings.
              </div>
              <div>
                <strong>Tools & Middleware:</strong> Jenkins CI/CD, Maven (Custom Plugins), RabbitMQ, Gatling Load Testing, MuleSoft ESB 3.8, ServiceNow, RLM, Eclipse, Git, UNIX Scripting.
              </div>
              <div>
                <strong>Web & UI Technologies:</strong> React UI - Java Interface, JavaScript, Visual Studio Reporting, JSP, Dynamic HTML, XML (DTD/CSS/JAXB), Swing GUI, Visual Basic, ASP.
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3C2415] border-b border-[#CCCCCC] pb-1 mb-4">
              Professional Experience
            </h2>

            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="print-break-inside-avoid">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <span className="font-bold text-xs sm:text-sm text-[#111111]">
                        {exp.company}
                      </span>
                      <span className="text-xs text-[#555555]"> — {exp.location}</span>
                    </div>
                    <span className="text-xs font-medium text-[#444444]">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-[#4A3728] italic mb-1">
                    {exp.role} ({exp.employmentType})
                  </div>

                  <p className="text-xs text-[#333333] mb-1.5">
                    {exp.summary}
                  </p>

                  <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11px] text-[#222222]">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>

                  <div className="mt-1 text-[10px] text-[#666666]">
                    <strong>Key Environment:</strong> {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="mb-6 print-break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#3C2415] border-b border-[#CCCCCC] pb-1 mb-2">
              Education, Certifications & STEM Foundation
            </h2>
            <div className="space-y-2 text-xs text-[#222222]">
              {educationList.map((edu, idx) => (
                <div key={idx}>
                  <strong>{edu.institution}</strong> — {edu.degree} ({edu.period})
                  {edu.details && <span className="block text-[11px] text-[#555555]">{edu.details}</span>}
                </div>
              ))}
              <div className="pt-1">
                <strong>Sun / Oracle Certified Java Programmer</strong>
              </div>
              <div className="pt-1 text-[11px] text-[#555555]">
                <strong>Prior STEM Educator Background:</strong> Fairhill School (1997-1998), Dallas Learning Center (1996-1997), North Texas Job Corps Math Instructor (1995), Garland High School Chemistry (1993-1994).
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Close Bar (Hidden on Print) */}
        <div className="bg-[#FAF7F2] border-t border-[#E8E2D9] px-6 py-4 flex justify-between items-center no-print">
          <span className="text-xs text-[#8B735B]">
            Ready for ATS systems and executive recruiters
          </span>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#4A3728] text-white rounded-full hover:bg-[#38281D] transition-colors"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-white text-[#4A3728] border border-[#D9D2C5] rounded-full hover:bg-[#F2EDE4] transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
