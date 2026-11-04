import { useState, useEffect } from 'react';
import { X, Send, Copy, Check, MessageSquare, AlertCircle, ShieldAlert, Sparkles, UserCheck } from 'lucide-react';
import { Language, CLINIC_TEAM, CLINIC_SERVICES, CLINIC_INFO } from '../data/clinicData';
import { UI_TRANSLATIONS } from '../data/translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  preselectedDoctorId?: string;
  preselectedServiceId?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  language,
  preselectedDoctorId,
  preselectedServiceId,
}: BookingModalProps) {
  const t = UI_TRANSLATIONS[language].bookingModal;

  // Form fields
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [doctorId, setDoctorId] = useState(preselectedDoctorId || '');
  const [serviceId, setServiceId] = useState(preselectedServiceId || '');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  // Configurable WhatsApp receptionist number for testing
  const [whatsappRecipient, setWhatsappRecipient] = useState('+996555000123');
  const [showConfigNumber, setShowConfigNumber] = useState(false);
  const [copied, setCopied] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  // Sync preselected when modal opens
  useEffect(() => {
    if (preselectedDoctorId) setDoctorId(preselectedDoctorId);
    if (preselectedServiceId) setServiceId(preselectedServiceId);
  }, [preselectedDoctorId, preselectedServiceId, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedDoctor = CLINIC_TEAM.find((d) => d.id === doctorId);
  const selectedService = CLINIC_SERVICES.find((s) => s.id === serviceId);

  // Field validation
  const isNameValid = fullName.trim().length > 0;
  const isDobValid = dateOfBirth.trim().length > 0;
  const isPhoneValid = phoneNumber.trim().length >= 6;
  const isFormValid = isNameValid && isDobValid && isPhoneValid;

  // Build formatted WhatsApp message in respectful localized language
  const greeting =
    language === 'ky'
      ? 'Саламатсызбы, MercyMed кабылдамасы! Мен дарыгердин кабыл алуусуна жазылуу өтүнүчүмдү жөнөтөм:'
      : language === 'ru'
      ? 'Здравствуйте, регистратура MercyMed! Прошу записать меня на консультацию:'
      : 'Hello MercyMed Reception! I would like to request a consultation appointment:';

  const doctorName = selectedDoctor
    ? selectedDoctor.name +
      ' (' +
      (language === 'ky'
        ? selectedDoctor.roleKy
        : language === 'ru'
        ? selectedDoctor.roleRu
        : selectedDoctor.roleEn) +
      ')'
    : language === 'ky'
    ? 'Бош турган каалаган адис'
    : language === 'ru'
    ? 'Любой свободный врач'
    : 'Any available doctor';

  const serviceName = selectedService
    ? language === 'ky'
      ? selectedService.titleKy
      : language === 'ru'
      ? selectedService.titleRu
      : selectedService.titleEn
    : language === 'ky'
    ? 'Жалпы консультация'
    : language === 'ru'
    ? 'Общая консультация'
    : 'General Consultation';

  const formattedMessage = [
    greeting,
    '',
    `• ${language === 'ky' ? 'Аты-жөнү' : language === 'ru' ? 'ФИО' : 'Full Name'}: ${fullName || '—'}`,
    `• ${language === 'ky' ? 'Туулган күнү' : language === 'ru' ? 'Дата рождения' : 'Date of Birth'}: ${dateOfBirth || '—'}`,
    `• ${language === 'ky' ? 'Телефон' : language === 'ru' ? 'Телефон' : 'Phone'}: ${phoneNumber || '—'}`,
    `• ${language === 'ky' ? 'Адис' : language === 'ru' ? 'Врач/Специалист' : 'Doctor'}: ${doctorName}`,
    `• ${language === 'ky' ? 'Кызмат' : language === 'ru' ? 'Услуга' : 'Service'}: ${serviceName}`,
    preferredDate ? `• ${language === 'ky' ? 'Ыңгайлуу күн' : language === 'ru' ? 'Желаемый день/время' : 'Preferred Day'}: ${preferredDate}` : null,
    notes ? `• ${language === 'ky' ? 'Белгилер/себеби' : language === 'ru' ? 'Симптомы/примечание' : 'Notes'}: ${notes}` : null,
    '',
    `[${t.prototypeBadge}: Sent via MercyMed Web Prototype]`,
  ]
    .filter((line) => line !== null)
    .join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!isFormValid) {
      return;
    }

    const cleanNumber = whatsappRecipient.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(formattedMessage);
    const waUrl = `https://wa.me/${cleanNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleQuickDemoFill = () => {
    setFullName('Aibek Toktobaev');
    setDateOfBirth('1989-06-15');
    setPhoneNumber('+996 555 456 789');
    setDoctorId('lukas-meyer-landholt');
    setServiceId('consultations');
    setPreferredDate('Tomorrow 14:00');
    setNotes('Routine family medicine check-up and blood pressure review');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 my-8 overflow-hidden text-slate-800">
        {/* Header Bar */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#E86014]">
                <MessageSquare className="w-4 h-4 text-[#E86014]" />
                WhatsApp Direct Booking
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded font-medium">
                {t.prototypeBadge}
              </span>
            </div>
            <h2 id="booking-modal-title" className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              {t.modalTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-0.5">{t.modalSubtitle}</p>
          </div>

          <button
            onClick={onClose}
            aria-label={t.closeModal}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prototype Safety Notice Strip */}
        <div className="px-5 py-3 bg-amber-50/80 border-b border-amber-100 flex items-start gap-2.5 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-950">{t.prototypeBadge}: Safe Educational Simulation</p>
            <p className="text-amber-800/90 leading-relaxed mt-0.5">{t.prototypeExplanation}</p>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-5 sm:p-6 space-y-4">
          {/* Quick Demo Fill Helper button */}
          <div className="flex justify-between items-center text-xs text-slate-500 pb-1">
            <span>Mandatory fields: Name, Date of Birth, Phone</span>
            <button
              type="button"
              onClick={handleQuickDemoFill}
              className="inline-flex items-center gap-1 text-[#E86014] hover:text-[#C24E0E] font-medium underline underline-offset-2 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Fill Sample Data (1-Click Test)
            </button>
          </div>

          {/* Row 1: Name and DOB */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.fullNameLabel} <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t.fullNamePlaceholder}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-all bg-white ${
                  attemptedSubmit && !isNameValid
                    ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/30'
                    : 'border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100'
                }`}
              />
              {attemptedSubmit && !isNameValid && (
                <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {t.requiredField}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.dobLabel} <span className="text-rose-600">*</span>
              </label>
              <input
                type="date"
                required
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-all bg-white ${
                  attemptedSubmit && !isDobValid
                    ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/30'
                    : 'border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100'
                }`}
              />
              {attemptedSubmit && !isDobValid && (
                <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {t.requiredField}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Phone Number & Preferred Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.phoneLabel} <span className="text-rose-600">*</span>
              </label>
              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={t.phonePlaceholder}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-all bg-white ${
                  attemptedSubmit && !isPhoneValid
                    ? 'border-rose-400 focus:ring-2 focus:ring-rose-200 bg-rose-50/30'
                    : 'border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100'
                }`}
              />
              {attemptedSubmit && !isPhoneValid && (
                <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {t.requiredField}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.preferredDateLabel}
              </label>
              <input
                type="text"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                placeholder="e.g. Wednesday morning / шаршемби күнү"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm transition-all bg-white"
              />
            </div>
          </div>

          {/* Row 3: Doctor & Service Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.doctorLabel}
              </label>
              <select
                value={doctorId}
                onChange={(e) => setDoctorId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm bg-white"
              >
                <option value="">{t.anyDoctor}</option>
                {CLINIC_TEAM.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name} —{' '}
                    {language === 'ky' ? doc.roleKy : language === 'ru' ? doc.roleRu : doc.roleEn}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.serviceLabel}
              </label>
              <select
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm bg-white"
              >
                <option value="">{t.anyService}</option>
                {CLINIC_SERVICES.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {language === 'ky' ? srv.titleKy : language === 'ru' ? srv.titleRu : srv.titleEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {t.notesLabel}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.notesPlaceholder}
              className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:border-[#E86014] focus:ring-2 focus:ring-orange-100 text-sm transition-all bg-white"
            />
          </div>

          {/* Generated WhatsApp Message Preview */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                {t.generatedMessageTitle}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium px-2 py-1 rounded bg-white border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer text-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copyBtn}</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs text-slate-700 font-mono bg-white p-3 rounded-lg border border-slate-200 whitespace-pre-wrap max-h-32 overflow-y-auto leading-relaxed">
              {formattedMessage}
            </pre>
          </div>

          {/* Receptionist Number Setting for Tester convenience */}
          <div className="pt-1">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                Recipient WhatsApp:{' '}
                <strong className="text-slate-700 font-mono">{whatsappRecipient}</strong>
              </span>
              <button
                type="button"
                onClick={() => setShowConfigNumber(!showConfigNumber)}
                className="text-[#E86014] hover:underline cursor-pointer"
              >
                {showConfigNumber ? 'Done' : 'Change test number'}
              </button>
            </div>

            {showConfigNumber && (
              <div className="mt-2 p-2.5 bg-slate-100 rounded-lg border border-slate-200 text-xs flex items-center gap-2">
                <span className="text-slate-600 whitespace-nowrap">{t.configNumberTitle}</span>
                <input
                  type="text"
                  value={whatsappRecipient}
                  onChange={(e) => setWhatsappRecipient(e.target.value)}
                  placeholder={t.testNumberPlaceholder}
                  className="flex-1 px-2.5 py-1.5 bg-white border border-slate-300 rounded font-mono text-xs"
                />
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all cursor-pointer text-sm"
            >
              <Send className="w-4 h-4" />
              <span>{t.sendWhatsappBtn}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer text-sm"
            >
              {t.closeModal}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
