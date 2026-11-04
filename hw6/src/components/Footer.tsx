import { MessageSquare, ExternalLink, MapPin, Clock, Mail, Instagram } from 'lucide-react';
import { Language, CLINIC_INFO } from '../data/clinicData';
import { UI_TRANSLATIONS } from '../data/translations';
import { PageId } from './Header';
import { MercyMedLogo } from './MercyMedLogo';

interface FooterProps {
  language: Language;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export function Footer({ language, onNavigate, onOpenBooking }: FooterProps) {
  const t = UI_TRANSLATIONS[language];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="bg-white/95 p-2 rounded-xl inline-block shadow-sm">
              <MercyMedLogo className="h-9" />
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              {t.footer.aboutMercyMed}
            </p>
            <div className="pt-1">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{CLINIC_INFO.instagramHandle}</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-heading">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about-team')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.aboutTeam}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('organizations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.organizations}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Coordinates & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-heading">
              {t.footer.hoursAndLocation}
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E86014] shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">{CLINIC_INFO.city}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {language === 'ky'
                      ? CLINIC_INFO.locationDetailsKy
                      : language === 'ru'
                      ? CLINIC_INFO.locationDetailsRu
                      : CLINIC_INFO.locationDetailsEn}
                  </p>
                  <p className="text-[10px] text-amber-500/80 mt-1">
                    {CLINIC_INFO.addressPlaceholder}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#E86014] shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">{t.contact.hoursLabel}</p>
                  <p className="text-[11px] text-amber-500/80 mt-0.5">
                    {CLINIC_INFO.openingHoursPlaceholder}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: WhatsApp Appointment & Direct Action */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-heading">
              {t.footer.contactDirect}
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              {language === 'ky'
                ? 'Кабылдамачы менен WhatsApp аркылуу түз байланышып, кабылдамага жазылыңыз:'
                : language === 'ru'
                ? 'Прямая связь с регистратором клиники в WhatsApp для записи:'
                : 'Direct connection to our clinic receptionist via WhatsApp for bookings:'}
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all cursor-pointer mb-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.nav.bookCta}</span>
            </button>
            <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>{CLINIC_INFO.email}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {t.footer.allRightsReserved}</p>
          <p className="text-center md:text-right text-[11px] text-slate-400">
            {t.footer.prototypeDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
