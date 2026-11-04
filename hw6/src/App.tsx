/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header, PageId } from './components/Header';
import { Footer } from './components/Footer';
import { TranslationBanner } from './components/TranslationBanner';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutTeamPage } from './pages/AboutTeamPage';
import { OrganizationsPage } from './pages/OrganizationsPage';
import { ContactPage } from './pages/ContactPage';
import { Language } from './data/clinicData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('mercymed_lang');
    if (saved === 'en' || saved === 'ky' || saved === 'ru') {
      return saved;
    }
    return 'en';
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedDoctorId, setPreselectedDoctorId] = useState<string | undefined>(undefined);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem('mercymed_lang', newLang);
  };

  const handleOpenBooking = (doctorId?: string, serviceId?: string) => {
    setPreselectedDoctorId(doctorId);
    setPreselectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedDoctorId(undefined);
    setPreselectedServiceId(undefined);
  };

  // Sync title with language
  useEffect(() => {
    const titles: Record<Language, string> = {
      en: 'MercyMed Clinic Bishkek | Evidence-Based Family & Specialist Medicine',
      ky: 'MercyMed клиникасы Бишкек | Далилдүү үй-бүлөлүк медицина борбору',
      ru: 'Клиника MercyMed Бишкек | Доказательный медицинский центр',
    };
    document.title = titles[language];
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-slate-800 selection:bg-[#E86014]/20 selection:text-[#E86014]">
      {/* 1. Translation review notice banner */}
      <TranslationBanner language={language} />

      {/* 2. Persistent Top Bar Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={language}
        onLanguageChange={handleLanguageChange}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 3. Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            language={language}
            onNavigate={setCurrentPage}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage language={language} onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'about-team' && (
          <AboutTeamPage language={language} onOpenBooking={handleOpenBooking} />
        )}
        {currentPage === 'organizations' && <OrganizationsPage language={language} />}
        {currentPage === 'contact' && (
          <ContactPage language={language} onOpenBooking={() => handleOpenBooking()} />
        )}
      </main>

      {/* 4. Footer */}
      <Footer
        language={language}
        onNavigate={setCurrentPage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 5. Direct WhatsApp Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        language={language}
        preselectedDoctorId={preselectedDoctorId}
        preselectedServiceId={preselectedServiceId}
      />
    </div>
  );
}
