import { useState } from 'react';
import {
  Building2,
  GraduationCap,
  Briefcase,
  BookOpen,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
  FileCheck,
  Mail,
  Copy,
  Check,
} from 'lucide-react';
import { Language, CLINIC_INFO } from '../data/clinicData';
import { UI_TRANSLATIONS } from '../data/translations';

export function OrganizationsPage({ language }: { language: Language }) {
  const t = UI_TRANSLATIONS[language].organizations;

  const [orgName, setOrgName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [orgType, setOrgType] = useState('corporate');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const formattedInquiry = [
    `Organization Partnership Inquiry — MercyMed Clinic:`,
    `• Organization: ${orgName || '—'}`,
    `• Type: ${orgType}`,
    `• Contact Person: ${contactPerson || '—'}`,
    `• Phone / WhatsApp: ${phone || '—'}`,
    `• Email: ${email || '—'}`,
    `• Request Details: ${message || 'Inquiry regarding corporate healthcare packages / medical examinations'}`,
  ].join('\n');

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(formattedInquiry);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const cleanNumber = CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(formattedInquiry);
    const waUrl = `https://wa.me/${cleanNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-[#E86014] uppercase tracking-wider">
            {t.sectionTitle}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2 mb-4">
            {t.sectionSubtitle}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            MercyMed partners with corporate organizations, diplomatic missions, educational institutions, and healthcare faculties across Bishkek to deliver structured preventative health programs.
          </p>
        </div>
      </section>

      {/* 2. Four Organizational Sectors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sector 1: Embassies */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">{t.embassyTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.embassyDesc}</p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multilingual medical reports in English, German, French, and Russian</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Travel clearance & fitness-to-fly certificates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct coordination for international insurance reimbursement</span>
              </li>
            </ul>
          </div>

          {/* Sector 2: Schools */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">{t.schoolTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.schoolDesc}</p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Comprehensive annual student health check-ups</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pediatric vision and audiometry sensory screenings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sports participation and physical education health clearances</span>
              </li>
            </ul>
          </div>

          {/* Sector 3: Corporate */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E86014]">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">{t.corporateTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.corporateDesc}</p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Periodic occupational examinations for staff</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custom executive check-up programs with lab panels</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Corporate retainer arrangements with priority scheduling</span>
              </li>
            </ul>
          </div>

          {/* Sector 4: Medical Education */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">{t.trainingTitle}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{t.trainingDesc}</p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Clinical rotations for medical students from AUCA and Kyrgyz medical universities</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hands-on training in outpatient evidence-based diagnosis</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Participation in regional mobile clinic outreach missions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Partnership Inquiry Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-xl mb-8">
            <h2 className="text-2xl font-bold font-heading text-slate-900">{t.formTitle}</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">{t.formSubtitle}</p>
          </div>

          <form onSubmit={handleSendWhatsApp} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.orgName} <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="e.g. European Delegation / International Academy"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.contactPerson} <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  placeholder="e.g. Anna Schmidt"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.orgType}
                </label>
                <select
                  value={orgType}
                  onChange={(e) => setOrgType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm bg-white"
                >
                  <option value="Corporate">{t.orgTypeCorporate}</option>
                  <option value="Embassy">{t.orgTypeEmbassy}</option>
                  <option value="School">{t.orgTypeSchool}</option>
                  <option value="Medical Faculty">{t.orgTypeMedical}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.phone} <span className="text-rose-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+996 ..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.email}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@organization.kg"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.message}
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Number of staff, desired check-up date range, or training inquiry..."
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm bg-white"
              />
            </div>

            {/* Formatted Preview */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  Partnership WhatsApp Draft
                </span>
                <button
                  type="button"
                  onClick={handleCopyInquiry}
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium px-2 py-1 rounded bg-white border border-slate-200 text-xs cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Draft</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="text-xs text-slate-700 font-mono bg-white p-3 rounded-lg border border-slate-200 whitespace-pre-wrap max-h-28 overflow-y-auto leading-relaxed">
                {formattedInquiry}
              </pre>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.submitInquiry}</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
