import { useState } from 'react';
import { Menu, X, CalendarCheck, Globe } from 'lucide-react';
import { Language } from '../data/clinicData';
import { UI_TRANSLATIONS } from '../data/translations';
import { MercyMedLogo } from './MercyMedLogo';

export type PageId = 'home' | 'services' | 'about-team' | 'organizations' | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export function Header({
  currentPage,
  onNavigate,
  language,
  onLanguageChange,
  onOpenBooking,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_TRANSLATIONS[language].nav;

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.home },
    { id: 'services', label: t.services },
    { id: 'about-team', label: t.aboutTeam },
    { id: 'organizations', label: t.organizations },
    { id: 'contact', label: t.contact },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark / Logo */}
          <div className="shrink-0">
            <button
              onClick={() => handleLinkClick('home')}
              className="text-left focus-visible:ring-2 focus-visible:ring-[#E86014] rounded-lg transition-transform active:scale-98 cursor-pointer"
              aria-label="MercyMed Home"
            >
              <MercyMedLogo className="h-10 sm:h-11" />
            </button>
          </div>

          {/* Zone 2: 5 Clean Single-Line Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative cursor-pointer ${
                    isActive
                      ? 'text-[#E86014] font-semibold'
                      : 'hover:text-slate-900 text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E86014] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Selector & Primary Action (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Language Selector */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-lg border border-slate-200/70 text-xs font-semibold">
              <Globe className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-1" />
              {(['en', 'ky', 'ru'] as Language[]).map((lang) => {
                const isActive = language === lang;
                const label = lang === 'en' ? 'EN' : lang === 'ky' ? 'КЫР' : 'РУС';
                return (
                  <button
                    key={lang}
                    onClick={() => onLanguageChange(lang)}
                    className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-xs font-bold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Primary CTA Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs tracking-wide text-white bg-[#E86014] hover:bg-[#D4530E] shadow-sm hover:shadow-md transition-all active:scale-98 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{t.bookCta}</span>
            </button>
          </div>

          {/* Mobile Right Controls: Language Selector + Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Compact Mobile Language Switcher */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-md border border-slate-200 text-xs">
              {(['en', 'ky', 'ru'] as Language[]).map((lang) => {
                const isActive = language === lang;
                const label = lang === 'en' ? 'EN' : lang === 'ky' ? 'KG' : 'RU';
                return (
                  <button
                    key={lang}
                    onClick={() => onLanguageChange(lang)}
                    className={`px-1.5 py-1 text-[11px] font-bold rounded transition-colors ${
                      isActive ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? t.close : t.menu}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-orange-50 text-[#E86014] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm text-white bg-[#E86014] hover:bg-[#D4530E] shadow-sm transition-all cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{t.bookCta}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
