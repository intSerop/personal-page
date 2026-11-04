import { useState } from 'react';
import {
  Heart,
  BookOpen,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  Award,
  Globe,
  Stethoscope,
  Filter,
} from 'lucide-react';
import { Language, CLINIC_TEAM, CLINIC_INFO } from '../data/clinicData';
import { UI_TRANSLATIONS } from '../data/translations';

interface AboutTeamPageProps {
  language: Language;
  onOpenBooking: (doctorId?: string, serviceId?: string) => void;
}

export function AboutTeamPage({ language, onOpenBooking }: AboutTeamPageProps) {
  const t = UI_TRANSLATIONS[language];
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: t.team.filterAll },
    { id: 'pediatrics', label: t.team.filterPediatrics },
    { id: 'family', label: t.team.filterFamily },
    { id: 'maternity', label: t.team.filterMaternity },
    { id: 'specialist', label: t.team.filterSpecialists },
    { id: 'therapy', label: t.team.filterTherapy },
  ];

  const filteredStaff =
    selectedFilter === 'all'
      ? CLINIC_TEAM
      : CLINIC_TEAM.filter((member) => {
          if (selectedFilter === 'pediatrics') return member.category === 'pediatrics';
          if (selectedFilter === 'family') return member.category === 'family';
          if (selectedFilter === 'maternity') return member.category === 'maternity';
          if (selectedFilter === 'specialist') return member.category === 'specialist';
          if (selectedFilter === 'therapy')
            return member.category === 'therapy' || member.category === 'diagnostic';
          return true;
        });

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-[#E86014] uppercase tracking-wider">
            {t.team.sectionTitle}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2 mb-4">
            {t.team.sectionSubtitle}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Our clinic unites experienced Kyrgyz medical professionals and international specialists. Together, we practice evidence-based, compassionate care for all generations.
          </p>
        </div>
      </section>

      {/* 2. Team Directory with Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          <Filter className="w-4 h-4 text-slate-400 mr-1 shrink-0" />
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                selectedFilter === tab.id
                  ? 'bg-[#E86014] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Staff Grid (10 confirmed members) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((member) => {
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

            const initials = member.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2);

            return (
              <div
                key={member.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top: Avatar & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#E86014] to-[#F59E0B] text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0 font-heading">
                      {initials}
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-heading text-slate-900 leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#E86014] mt-1">{role}</p>
                      {member.credentials && (
                        <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                          {member.credentials}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{bio}</p>

                  {/* Languages Spoken */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 text-[11px]">
                    <span className="text-slate-500 font-medium block mb-1">
                      {t.team.languagesSpoken}:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.languages.map((lang, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700 font-medium"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Action */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onOpenBooking(member.id)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-[#E86014] bg-orange-50/70 hover:bg-[#E86014] hover:text-white border border-orange-200/80 hover:border-transparent transition-all cursor-pointer"
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>{t.team.bookWithDoctor}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Story, History & Mobile Clinics */}
      <section className="bg-slate-50/80 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E86014]">
                Origins & Ongoing Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
                {t.team.historyTitle}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.team.historyText1}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.team.historyText2}
              </p>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <MapPin className="w-4 h-4 text-[#E86014]" />
                  <span>Clinic Coordinates in Bishkek</span>
                </div>
                <p className="text-xs text-slate-600">
                  {language === 'ky'
                    ? CLINIC_INFO.locationDetailsKy
                    : language === 'ru'
                    ? CLINIC_INFO.locationDetailsRu
                    : CLINIC_INFO.locationDetailsEn}
                </p>
                <p className="text-[11px] text-amber-700 italic">
                  {CLINIC_INFO.addressPlaceholder}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-7 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E86014]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900">
                The Charitable Heart of MercyMed
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                While MercyMed operates as a sustainable private clinic in Bishkek, its foundational purpose remains serving vulnerable communities. The clinic serves as logistical headquarters, drug storage, and licenced hub for ongoing rural outreach throughout the Kyrgyz Republic.
              </p>
              <div className="pt-2 text-xs text-slate-500 border-t border-slate-100 flex items-center justify-between">
                <span>Active since 2013</span>
                <span className="font-semibold text-slate-800">All 7 Oblasts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Evidence-Based Philosophy & Medical Education */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900">
              What Evidence-Based Medicine Means at MercyMed
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dr. Lukas explains: “Rather than prescribing long lists of 10–15 supplements or vitamins that lack clinical evidence, we adhere to internationally tested protocols. This prevents adverse drug interactions, spares children unnecessary discomfort, and prevents families from incurring burdensome medical expenses.”
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900">
              {t.team.trainingTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.team.trainingText} We host clinical rotations for medical students from local universities, conduct clinical journal clubs, and prepare residency curricula to strengthen the future healthcare workforce in Kyrgyzstan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
