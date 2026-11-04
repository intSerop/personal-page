import { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Mail,
  Instagram,
  ExternalLink,
  Navigation,
  Send,
  AlertCircle,
  Bus,
  Car,
} from 'lucide-react';
import { Language, CLINIC_INFO } from '../data/clinicData';
import { UI_TRANSLATIONS } from '../data/translations';

interface ContactPageProps {
  language: Language;
  onOpenBooking: () => void;
}

export function ContactPage({ language, onOpenBooking }: ContactPageProps) {
  const t = UI_TRANSLATIONS[language].contact;

  const [senderName, setSenderName] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [inquiryText, setInquiryText] = useState('');

  const handleSendQuickMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = CLINIC_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    const message = [
      `Hello MercyMed Reception! Quick inquiry from website:`,
      `• Name: ${senderName || '—'}`,
      `• Phone: ${senderPhone || '—'}`,
      `• Message: ${inquiryText}`,
    ].join('\n');

    const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
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
            We welcome local patients and international visitors. You can schedule your consultation or ask any questions directly with our receptionist on WhatsApp.
          </p>
        </div>
      </section>

      {/* 2. Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Location */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E86014]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-slate-900">{t.addressLabel}</h3>
            <p className="text-xs text-slate-700 font-medium">
              {language === 'ky'
                ? CLINIC_INFO.locationDetailsKy
                : language === 'ru'
                ? CLINIC_INFO.locationDetailsRu
                : CLINIC_INFO.locationDetailsEn}
            </p>
            <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200/60 leading-tight">
              {CLINIC_INFO.addressPlaceholder}
            </p>
          </div>

          {/* Card 2: Hours */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-slate-900">{t.hoursLabel}</h3>
            <p className="text-xs text-slate-700 font-medium">Outpatient Consultations by Appointment</p>
            <p className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded-lg border border-amber-200/60 leading-tight">
              {CLINIC_INFO.openingHoursPlaceholder}
            </p>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-slate-900">{t.whatsappLabel}</h3>
            <p className="text-xs font-mono font-bold text-emerald-700">
              {CLINIC_INFO.whatsappNumberDisplay}
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Open Booking Form</span>
            </button>
          </div>

          {/* Card 4: Instagram */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
              <Instagram className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-slate-900">{t.instagramLabel}</h3>
            <p className="text-xs text-slate-600 font-medium">{CLINIC_INFO.instagramHandle}</p>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <span>{t.followInstagram}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. Location, Directions & Bishkek Map Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Directions & Transit */}
          <div className="lg:col-span-6 p-6 sm:p-10 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#E86014]">
                Directions & Orientation
              </span>
              <h2 className="text-2xl font-bold font-heading text-slate-900 mt-1">
                {t.howToFindUs}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                {t.routeHint}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <Navigation className="w-4 h-4 text-[#E86014] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Key Landmarks:</strong>
                  <span className="text-slate-600">
                    Ayu Grand Shopping Center, Ala-Too International University, Tunguch Residential District.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <Bus className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Public Transportation:</strong>
                  <span className="text-slate-600">
                    Multiple bus and marshrutka routes connect eastern Tunguch directly to central Bishkek and Chuy Avenue.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                <Car className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Parking & Access:</strong>
                  <span className="text-slate-600">
                    Street parking available near the complex entrance. Ground floor accessible entrance.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Clean Map Simulation for Bishkek / Tunguch */}
          <div className="lg:col-span-6 bg-slate-100 p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200 relative overflow-hidden">
            {/* Map styling illustration */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Bishkek Map View
                </span>
                <span className="text-[11px] font-mono text-slate-500">42.858° N, 74.685° E</span>
              </div>

              {/* Graphic map container */}
              <div className="w-full h-64 bg-slate-200/90 rounded-2xl border border-slate-300/80 relative overflow-hidden flex items-center justify-center shadow-inner">
                {/* Stylized grid streets */}
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                  }}
                />

                {/* Main thoroughfare lines */}
                <div className="absolute w-full h-3 bg-white top-1/2 -translate-y-1/2 rotate-6 shadow-xs" />
                <div className="absolute h-full w-3 bg-white left-1/3 -translate-x-1/2 rotate-12 shadow-xs" />

                {/* Central MercyMed Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#E86014] text-white flex items-center justify-center shadow-lg animate-bounce">
                    <MapPin className="w-5 h-5 fill-white" />
                  </div>
                  <div className="mt-1 px-3 py-1 bg-white rounded-lg shadow-md border border-slate-200 text-center">
                    <span className="font-extrabold text-xs text-slate-900 block font-heading">
                      MercyMed Clinic
                    </span>
                    <span className="text-[10px] text-slate-500">Tunguch · Bishkek</span>
                  </div>
                </div>

                {/* Nearby landmarks labels */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-medium text-slate-700 shadow-2xs border border-slate-200">
                  Ayu Grand Mall
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-medium text-slate-700 shadow-2xs border border-slate-200">
                  Ala-Too University
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-slate-500">
              <span>Eastern Bishkek District</span>
              <a
                href="https://maps.google.com/?q=Tunguch+Ayu+Grand+Bishkek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E86014] hover:underline flex items-center gap-1 font-semibold cursor-pointer"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Message to Receptionist Form */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs">
          <div className="mb-6">
            <h3 className="text-xl font-bold font-heading text-slate-900">{t.directMessageTitle}</h3>
            <p className="text-xs text-slate-600 mt-1">
              Have a quick medical question or inquiries on doctor availability? Send a message directly to reception via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSendQuickMessage} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Elena"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Phone Number <span className="text-rose-600">*</span>
              </label>
              <input
                type="tel"
                required
                value={senderPhone}
                onChange={(e) => setSenderPhone(e.target.value)}
                placeholder="+996 ..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Message / Question <span className="text-rose-600">*</span>
              </label>
              <textarea
                rows={3}
                required
                value={inquiryText}
                onChange={(e) => setInquiryText(e.target.value)}
                placeholder="e.g. Which days does Dr. Lukas consult? Do you provide pediatric vaccination checkups?"
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message to Reception WhatsApp</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
