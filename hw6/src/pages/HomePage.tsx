import {
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  Users,
  Languages,
  HeartHandshake,
  Stethoscope,
  Activity,
  Baby,
  FileText,
  Eye,
  Instagram,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Language, CLINIC_INFO, CLINIC_SERVICES, CLINIC_TEAM } from '../data/clinicData';
import { UI_TRANSLATIONS } from '../data/translations';
import { PageId } from '../components/Header';

interface HomePageProps {
  language: Language;
  onNavigate: (page: PageId) => void;
  onOpenBooking: (doctorId?: string, serviceId?: string) => void;
}

export function HomePage({ language, onNavigate, onOpenBooking }: HomePageProps) {
  const t = UI_TRANSLATIONS[language];

  return (
    <div className="space-y-20 sm:space-y-24 py-8 sm:py-12">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#E86014] uppercase tracking-wider mb-3">
              <span>{t.hero.badge}</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">Tunguch, Bishkek</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 tracking-tight leading-[1.15] text-balance mb-5">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {t.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#E86014] hover:bg-[#D4530E] shadow-sm hover:shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{t.hero.primaryCta}</span>
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all cursor-pointer"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div>
                <p className="font-extrabold text-slate-900 text-lg font-heading">10+ Years</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Mobile Clinic Outreach</p>
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-lg font-heading">6 Languages</p>
                <p className="text-slate-500 text-[11px] mt-0.5">Consultation Capacity</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-extrabold text-emerald-700 text-lg font-heading">30% Off</p>
                <p className="text-slate-500 text-[11px] mt-0.5">In-House Express Plus Lab</p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Integrity Visual Carrier */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-slate-50 p-6 sm:p-8 rounded-3xl border border-amber-200/60 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-amber-200/30 to-transparent pointer-events-none rounded-full blur-2xl" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-amber-200/60 mb-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">MercyMed Care Model</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Evidence-Based & Patient-First</p>
                </div>
                <span className="text-[11px] font-semibold text-[#E86014] bg-orange-100/80 px-2.5 py-1 rounded-md">
                  Oct 2023 – Bishkek
                </span>
              </div>

              {/* Pillars checklist */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-slate-200/80">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Zero Unnecessary Prescriptions</h4>
                    <p className="text-[11px] text-slate-600 leading-normal mt-0.5">
                      Treatments based on validated clinical research, not commercial over-prescribing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-slate-200/80">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Baby className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Pediatrics & Holistic Doula</h4>
                    <p className="text-[11px] text-slate-600 leading-normal mt-0.5">
                      Caring for mothers from prenatal preparation through childhood development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/80 backdrop-blur-xs p-3.5 rounded-xl border border-slate-200/80">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#E86014] flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Charitable Outreaches</h4>
                    <p className="text-[11px] text-slate-600 leading-normal mt-0.5">
                      Our permanent clinic anchors regular voluntary clinics in all oblasts of Kyrgyzstan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action footer inside card */}
            <div className="pt-6 mt-6 border-t border-amber-200/60 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Have a health concern?</span>
              <button
                onClick={() => onOpenBooking()}
                className="text-[#E86014] hover:text-[#C24E0E] font-bold flex items-center gap-1 cursor-pointer"
              >
                Request consultation <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Values & Practice Philosophy */}
      <section className="bg-slate-50/70 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-[#E86014] uppercase tracking-wider">
              {t.values.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-1">
              {t.values.sectionSubtitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E86014]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900">
                {t.values.evidenceTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.values.evidenceText}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900">
                {t.values.familyTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.values.familyText}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900">
                {t.values.multilingualTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.values.multilingualText}
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900">
                {t.values.charityTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.values.charityText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Grid (with working Book CTAs) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold text-[#E86014] uppercase tracking-wider">
              {t.services.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-1">
              {t.services.sectionSubtitle}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E86014] hover:text-[#C24E0E] transition-colors cursor-pointer"
          >
            <span>View All Medical Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Note on Doctor Evaluation First */}
        <div className="mb-6 px-4 py-3 bg-amber-50 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-center gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
          <span>{t.services.seeDoctorFirstNotice}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINIC_SERVICES.slice(0, 6).map((service) => {
            const title =
              language === 'ky'
                ? service.titleKy
                : language === 'ru'
                ? service.titleRu
                : service.titleEn;
            const description =
              language === 'ky'
                ? service.descriptionKy
                : language === 'ru'
                ? service.descriptionRu
                : service.descriptionEn;
            const features =
              language === 'ky'
                ? service.featuresKy
                : language === 'ru'
                ? service.featuresRu
                : service.featuresEn;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#E86014]">
                      {service.category === 'consultation' && <Stethoscope className="w-5 h-5" />}
                      {service.category === 'diagnostic' && <Activity className="w-5 h-5" />}
                      {service.category === 'maternity' && <Baby className="w-5 h-5" />}
                      {service.category === 'certificates' && <FileText className="w-5 h-5" />}
                    </div>

                    {service.id === 'laboratory' && (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        -30% on Tests
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold font-heading text-slate-900 mb-2">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{description}</p>

                  <ul className="space-y-1.5 mb-6 text-xs text-slate-500">
                    {features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#E86014] font-bold mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Outpatient Care</span>
                  <button
                    onClick={() => onOpenBooking(undefined, service.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#E86014] hover:text-white hover:bg-[#E86014] border border-[#E86014]/40 hover:border-transparent transition-all cursor-pointer"
                  >
                    <span>{t.services.bookThisService}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Team Spotlight Preview */}
      <section className="bg-slate-50/70 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold text-[#E86014] uppercase tracking-wider">
                {t.team.sectionTitle}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 mt-1">
                {t.team.sectionSubtitle}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('about-team')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E86014] hover:text-[#C24E0E] transition-colors cursor-pointer"
            >
              <span>View Full Team of 10 Specialists</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINIC_TEAM.slice(0, 4).map((member) => {
              const role =
                language === 'ky'
                  ? member.roleKy
                  : language === 'ru'
                  ? member.roleRu
                  : member.roleEn;
              const bio =
                language === 'ky'
                  ? member.bioKy
                  : language === 'ru'
                  ? member.bioRu
                  : member.bioEn;

              // Stylized initials avatar matching brand colors
              const initials = member.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2);

              return (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Top: Initials Badge + Category */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#E86014] to-[#F59E0B] text-white flex items-center justify-center font-bold text-sm shadow-xs font-heading">
                        {initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold font-heading text-slate-900 leading-tight">
                          {member.name}
                        </h4>
                        <p className="text-[11px] font-medium text-[#E86014] mt-0.5">{role}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{bio}</p>

                    <div className="text-[11px] text-slate-500 mb-4">
                      <span className="font-medium text-slate-700">Languages: </span>
                      {member.languages.join(' · ')}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <button
                      onClick={() => onOpenBooking(member.id)}
                      className="w-full text-center py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#E86014] hover:bg-orange-50 border border-slate-200 hover:border-orange-200 transition-colors cursor-pointer"
                    >
                      {t.team.bookWithDoctor}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Institutional & Corporate Partnerships */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {t.organizations.sectionTitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading mt-2 mb-4">
              Healthcare Collaboration for Embassies, Schools & Businesses
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              MercyMed provides dedicated annual health check-up packages, bilingual medical documentation for travel and insurance, and clinical partnerships in Bishkek.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('organizations')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-slate-900 bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer"
              >
                <span>Learn About Organizational Packages</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Instagram Community Connection (Link, Not Live Feed) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-slate-900">
                Follow MercyMed on Instagram
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 max-w-xl">
                {t.contact.instagramDesc} Doctor schedules, pediatric care tips, and updates on regional mobile clinics.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                <span>Direct handle:</span>
                <span className="font-mono font-semibold text-slate-800">{CLINIC_INFO.instagramHandle}</span>
              </div>
            </div>
          </div>

          <a
            href={CLINIC_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{t.contact.followInstagram}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>
    </div>
  );
}
