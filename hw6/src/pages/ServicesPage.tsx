import { useState } from 'react';
import {
  Stethoscope,
  Activity,
  Baby,
  FileText,
  CheckCircle2,
  CalendarCheck,
  Percent,
  QrCode,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Language, CLINIC_SERVICES, CLINIC_TEAM } from '../data/clinicData';
import { UI_TRANSLATIONS } from '../data/translations';

interface ServicesPageProps {
  language: Language;
  onOpenBooking: (doctorId?: string, serviceId?: string) => void;
}

export function ServicesPage({ language, onOpenBooking }: ServicesPageProps) {
  const t = UI_TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: language === 'ky' ? 'Бардык кызматтар' : language === 'ru' ? 'Все услуги' : 'All Services' },
    { id: 'consultation', label: language === 'ky' ? 'Консультациялар' : language === 'ru' ? 'Консультации' : 'Consultations' },
    { id: 'diagnostic', label: language === 'ky' ? 'Диагностика жана лаборатория' : language === 'ru' ? 'Диагностика и лаборатория' : 'Diagnostics & Lab' },
    { id: 'maternity', label: language === 'ky' ? 'Дула жана энелик' : language === 'ru' ? 'Доула и материнство' : 'Doula & Maternity' },
    { id: 'certificates', label: language === 'ky' ? 'Маалымкаттар' : language === 'ru' ? 'Справки и документы' : 'Certificates' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? CLINIC_SERVICES
      : CLINIC_SERVICES.filter((s) => s.category === activeCategory);

  const faqs = [
    {
      qEn: 'Do I need a doctor consultation before ordering specialized laboratory tests or ultrasound?',
      qKy: 'УЗИ же атайын анализдерди тапшыруудан мурда дарыгердин кабыл алуусу керекпи?',
      qRu: 'Нужна ли консультация врача перед сдачей анализов или проведением УЗИ?',
      aEn: 'Yes, we recommend seeing one of our physicians first. In evidence-based medicine, unnecessary testing causes needless anxiety and expense. Our doctors evaluate your medical history to ensure you only receive investigations that are truly indicated.',
      aKy: 'Ооба, алгач дарыгерибиздин кабыл алуусунан өтүүнү сунуштайбыз. Далилдүү медицинада керексиз анализдер бейтапка ашыкча чыгым алып келет. Биздин дарыгерлер клиникалык зарылдыгы бар гана изилдөөлөрдү белгилешет.',
      aRu: 'Да, мы рекомендуем предварительную консультацию врача. Согласно принципам доказательной медицины, избыточные исследования создают лишний стресс и финансовые расходы. Врач определит, какие именно тесты действительно необходимы в вашем случае.',
    },
    {
      qEn: 'How does the 30% discount on Express Plus laboratory tests work?',
      qKy: 'Express Plus лабораториясынын анализдерине 30% арзандатуу кандай иштейт?',
      qRu: 'Как работает скидка 30% на анализы в партнерской лаборатории Express Plus?',
      aEn: 'Express Plus operates an authorized collection room inside our MercyMed clinic. MercyMed patients receive a 30% direct discount on all test panels. Test results are securely retrieved by the patient via the official Express Plus QR code system.',
      aKy: 'Express Plus тармагы биздин MercyMed клиникасынын ичинде забор бөлмөсүн иштетет. MercyMedдин бейтаптарына бардык панелдерге 30% түз арзандатуу берилет. Жыйынтыктар Express Plus коопсуз QR-коду аркылуу түз алынат.',
      aRu: 'Лаборатория Express Plus разместила авторизованный кабинет забора анализов прямо в здании нашей клиники. Пациентам MercyMed предоставляется прямая скидка 30% от стандартного прейскуранта. Результаты выдаются пациенту конфиденциально по QR-коду лаборатории.',
    },
    {
      qEn: 'Which languages can consultations be conducted in?',
      qKy: 'Кабыл алуулар кайсы тилдерде жүргүзүлөт?',
      qRu: 'На каких языках проводятся консультации?',
      aEn: 'Our diverse medical team speaks Kyrgyz, Russian, English, German, French, and Chinese. International residents and expats can consult comfortably in their preferred language.',
      aKy: 'Биздин көп улуттуу команда кыргыз, орус, англис, немис, француз жана кытай тилдеринде сүйлөйт. Жергиликтүү тургундар да, чет элдик жарандар да өздөрүнө ыңгайлуу тилде кеңеш ала алышат.',
      aRu: 'Врачи клиники ведут прием на кыргызском, русском, английском, немецком, французском и китайском языках. Иностранные граждане и экспаты могут комфортно общаться на родном языке.',
    },
    {
      qEn: 'Are birth preparation courses conducted by certified specialists?',
      qKy: 'Төрөткө даярдоо курстарын сертификатталган адис өтөбү?',
      qRu: 'Проводятся ли курсы подготовки к родам сертифицированным специалистом?',
      aEn: 'Yes. Our clinic director, Mahabat Alieva, is an experienced registered nurse and certified doula. She guides expectant mothers on breathing techniques, labor coping, and postpartum recovery.',
      aKy: 'Ооба. Клиниканын директору Махабат Алиева — тажрыйбалуу мээрман айым жана сертификатталган дула. Ал энелерге туура дем алуу, төрөт учурундагы ооруну жеңилдетүү жана төрөттөн кийинки калыбына келүү боюнча сабак өтөт.',
      aRu: 'Да. Директор клиники Махабат Алиева — дипломированная медсестра и сертифицированная доула с многолетним опытом. Она проводит дородовую подготовку, обучает техникам дыхания и сопровождает после родов.',
    },
  ];

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-[#E86014] uppercase tracking-wider">
            {t.services.sectionTitle}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 mt-2 mb-4">
            {t.services.sectionSubtitle}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Every service at MercyMed follows modern evidence-based guidelines. We aim to keep diagnostic procedures focused, respectful of your time, and transparent in cost.
          </p>
        </div>

        {/* Doctor Consultation First Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E86014] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-xs uppercase tracking-wider text-[#E86014]">
                Clinical Best Practice Notice
              </p>
              <p className="text-xs sm:text-sm text-slate-700 mt-0.5 leading-relaxed">
                {t.services.seeDoctorFirstNotice}
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-[#E86014] hover:bg-[#D4530E] transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Book Doctor Consultation</span>
          </button>
        </div>
      </section>

      {/* 2. Category Filter & Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="space-y-6">
          {filteredServices.map((service) => {
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
            const note =
              language === 'ky'
                ? service.noteKy
                : language === 'ru'
                ? service.noteRu
                : service.noteEn;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs hover:border-slate-300 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                {/* Left 4 Cols: Service Identity */}
                <div className="lg:col-span-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#E86014] mb-4">
                    {service.category === 'consultation' && <Stethoscope className="w-6 h-6" />}
                    {service.category === 'diagnostic' && <Activity className="w-6 h-6" />}
                    {service.category === 'maternity' && <Baby className="w-6 h-6" />}
                    {service.category === 'certificates' && <FileText className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-2">{title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{description}</p>

                  {service.id === 'laboratory' && (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1 mb-4 text-xs text-emerald-900">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                        <Percent className="w-4 h-4" />
                        <span>{t.services.labDiscountBadge}</span>
                      </div>
                      <p className="text-[11px] text-emerald-800/80 leading-normal">
                        Partnered with Express Plus laboratory chain. 30% reduction applied directly.
                      </p>
                    </div>
                  )}

                  {note && (
                    <p className="text-[11px] text-slate-500 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      {note}
                    </p>
                  )}
                </div>

                {/* Middle 5 Cols: Features / Protocols */}
                <div className="lg:col-span-5 bg-slate-50/60 p-5 rounded-xl border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Service Inclusions & Protocols
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {service.id === 'laboratory' && (
                    <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2 text-[11px] text-slate-600">
                      <QrCode className="w-4 h-4 text-[#E86014] shrink-0" />
                      <span>{t.services.labDisclaimer}</span>
                    </div>
                  )}
                </div>

                {/* Right 3 Cols: Action Trigger */}
                <div className="lg:col-span-3 flex flex-col justify-center items-start lg:items-end w-full space-y-3">
                  <span className="text-xs text-slate-500">Outpatient Bishkek</span>
                  <button
                    onClick={() => onOpenBooking(undefined, service.id)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs text-white bg-[#E86014] hover:bg-[#D4530E] shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>{t.services.bookThisService}</span>
                  </button>
                  <p className="text-[10px] text-slate-500 text-left lg:text-right">
                    Pre-formats request for WhatsApp receptionist
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Laboratory Deep-Dive Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <QrCode className="w-4 h-4" />
              <span>Diagnostic Integrity · Express Plus Partnership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">
              Secure, Independent Lab Results with 30% Clinic Savings
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              MercyMed hosts an in-clinic diagnostic room operated alongside Express Plus, one of Kyrgyzstan’s premier medical laboratories. All patients receive an automatic 30% reduction. Results are secured with a private QR code directly by the laboratory, ensuring full patient confidentiality.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <button
              onClick={() => onOpenBooking(undefined, 'laboratory')}
              className="px-5 py-3 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 transition-all cursor-pointer text-center"
            >
              Inquire About Lab Tests
            </button>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Questions (Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold font-heading text-slate-900">
            {t.services.faqTitle}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Common questions on consultations, procedures, and evidence-based standards
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            const q = language === 'ky' ? faq.qKy : language === 'ru' ? faq.qRu : faq.qEn;
            const a = language === 'ky' ? faq.aKy : language === 'ru' ? faq.aRu : faq.aEn;

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900">{q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
