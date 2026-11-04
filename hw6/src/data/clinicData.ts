export type Language = 'en' | 'ky' | 'ru';

export interface Doctor {
  id: string;
  name: string;
  roleEn: string;
  roleKy: string;
  roleRu: string;
  category: 'pediatrics' | 'family' | 'specialist' | 'maternity' | 'therapy' | 'diagnostic';
  bioEn: string;
  bioKy: string;
  bioRu: string;
  languages: string[];
  isDoctor: boolean;
  credentials?: string;
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleKy: string;
  titleRu: string;
  category: 'consultation' | 'diagnostic' | 'maternity' | 'certificates';
  descriptionEn: string;
  descriptionKy: string;
  descriptionRu: string;
  featuresEn: string[];
  featuresKy: string[];
  featuresRu: string[];
  noteEn?: string;
  noteKy?: string;
  noteRu?: string;
}

export const CLINIC_TEAM: Doctor[] = [
  {
    id: 'mahabat-alieva',
    name: 'Mahabat Alieva',
    roleEn: 'Director & Certified Doula',
    roleKy: 'Директор жана сертификатталган дула',
    roleRu: 'Директор и сертифицированная доула',
    category: 'maternity',
    bioEn: 'Registered Kyrgyz nurse and certified doula with over a decade of leadership in regional mobile medical clinics. She specializes in maternal care, birth preparation, and postpartum support.',
    bioKy: 'Кыргызстандын аймактарындагы мобилдик клиникаларды жетектеген он жылдан ашык тажрыйбасы бар мээрман айым жана сертификатталган дула. Энелерге кам көрүү, төрөткө даярдык жана төрөттөн кийинки колдоо боюнча адис.',
    bioRu: 'Медицинская сестра и сертифицированная доула с более чем 10-летним стажем руководства мобильными медицинскими клиниками по регионам Кыргызстана. Специализируется на поддержке беременных, подготовке к родам и послеродовом уходе.',
    languages: ['Кыргызча', 'Русский'],
    isDoctor: false,
    credentials: 'RN, Certified Doula'
  },
  {
    id: 'jonathan-williams',
    name: 'Dr. Jonathan Williams',
    roleEn: 'Chief Doctor & Pediatrician',
    roleKy: 'Башкы дарыгер жана педиатр',
    roleRu: 'Главный врач и педиатр',
    category: 'pediatrics',
    bioEn: 'Co-founder of MercyMed’s outreach missions with extensive international clinical experience. He leads the medical team with a focus on comprehensive pediatric care and evidence-based diagnosis.',
    bioKy: 'MercyMedдин көчмө миссияларынын тең негиздөөчүсү жана кеңири эл аралык клиникалык тажрыйбага ээ. Медициналык топту жетектеп, балдарды комплекстүү дарылоого жана далилдүү медицинага басым жасайт.',
    bioRu: 'Сооснователь выездных медицинских программ MercyMed с многолетним международным клиническим опытом. Возглавляет команду клиники, специализируется на комплексной педиатрической помощи и доказательной медицине.',
    languages: ['English', 'Русский'],
    isDoctor: true,
    credentials: 'MD, Chief Physician'
  },
  {
    id: 'lukas-meyer-landholt',
    name: 'Dr. Lukas Meyer-Landholt',
    roleEn: 'Pediatrician & Pediatric Oncologist',
    roleKy: 'Педиатр жана балдар онкологу',
    roleRu: 'Педиатр и детский онколог',
    category: 'pediatrics',
    bioEn: 'Swiss-trained specialist in general pediatrics, childhood oncology, and hematology with over 15 years in clinical practice. Passionate about evidence-based care, avoiding unnecessary treatments, and medical education.',
    bioKy: 'Швейцарияда даярдалган, жалпы педиатрия, балдар онкологиясы жана гематологиясы боюнча 15 жылдан ашык тажрыйбасы бар адис. Далилдүү медицинаны колдонуп, ашыкча дарыларды жазуудан качууга жана билим берүүгө умтулат.',
    bioRu: 'Специалист из Швейцарии по общей педиатрии, детской онкологии и гематологии с более чем 15-летним стажем. Сторонник строгой доказательной медицины, отказа от полипрагмазии и развития медицинского образования.',
    languages: ['English', 'German', 'French', 'Русский'],
    isDoctor: true,
    credentials: 'MD, FMH Pediatrics (Switzerland)'
  },
  {
    id: 'irina-pak',
    name: 'Dr. Irina Pak',
    roleEn: 'Pediatrics & Family Medicine',
    roleKy: 'Педиатрия жана үй-бүлөлүк медицина',
    roleRu: 'Педиатрия и семейная медицина',
    category: 'family',
    bioEn: 'Dedicated family physician with extensive experience caring for both children and adult patients. She provides comprehensive health evaluations and continuous outpatient management.',
    bioKy: 'Балдарга да, чоңдорго да кам көрүү боюнча чоң тажрыйбасы бар тажрыйбалуу үй-бүлөлүк дарыгер. Комплекстүү текшерүүлөрдү жана туруктуу амбулатордук көзөмөлдү камсыздайт.',
    bioRu: 'Опытный семейный врач и педиатр, ведущая прием как детей, так и взрослых пациентов. Обеспечивает комплексную оценку здоровья и долгосрочное амбулаторное наблюдение.',
    languages: ['Русский', 'Кыргызча'],
    isDoctor: true,
    credentials: 'MD, Family Medicine'
  },
  {
    id: 'nasyikat-dononbaeva',
    name: 'Dr. Nasyikat Dononbaeva',
    roleEn: 'Internal Medicine & Pulmonology',
    roleKy: 'Терапия жана пульмонология',
    roleRu: 'Терапия и пульмонология',
    category: 'specialist',
    bioEn: 'Specialist in adult internal medicine and pulmonary disorders. She diagnoses and manages respiratory illnesses, chronic conditions, and complex multi-system complaints.',
    bioKy: 'Чоңдордун терапиясы жана дем алуу органдарынын оорулары боюнча адис. Дем алуу жолдорунун ооруларын, өнөкөт абалды жана комплекстүү терапиялык даттанууларды аныктайт.',
    bioRu: 'Врач-терапевт и пульмонолог, специализирующаяся на заболеваниях дыхательных путей и внутренних органов у взрослых пациентов. Проводит диагностику и терапию сложных клинических случаев.',
    languages: ['Кыргызча', 'Русский'],
    isDoctor: true,
    credentials: 'MD, Pulmonologist'
  },
  {
    id: 'nabat-gasimova',
    name: 'Dr. Nabat Gasimova',
    roleEn: 'Pediatrician & Pediatric Intensivist',
    roleKy: 'Педиатр жана балдар реаниматологу',
    roleRu: 'Педиатр и детский реаниматолог',
    category: 'pediatrics',
    bioEn: 'Skilled pediatrician with specialized expertise in pediatric intensive care and critical assessment. Focused on prompt, accurate triage and compassionate child healthcare.',
    bioKy: 'Балдар реанимациясы жана тез жардам көрсөтүү боюнча адистешкен тажрыйбалуу педиатр. Так диагноз коюуга жана балдарга камкордук менен мамиле кылууга басым жасайт.',
    bioRu: 'Врач-педиатр и детский анестезиолог-реаниматолог. Обладает глубоким опытом ранней диагностики, экстренной оценки состояния и бережного лечения детей.',
    languages: ['Русский', 'Кыргызча', 'English'],
    isDoctor: true,
    credentials: 'MD, Pediatric Intensivist'
  },
  {
    id: 'nancy-yau',
    name: 'Dr. Nancy Yau',
    roleEn: 'Pediatrician',
    roleKy: 'Педиатр',
    roleRu: 'Педиатр',
    category: 'pediatrics',
    bioEn: 'International pediatrician providing personalized medical care for infants, children, and teenagers. She consults fluently in both English and Chinese.',
    bioKy: 'Ымыркайлар, балдар жана өспүрүмдөр үчүн жекелештирилген медициналык жардам көрсөткөн эл аралык педиатр. Англис жана кытай тилдеринде кеңеш берет.',
    bioRu: 'Международный врач-педиатр, обеспечивающая чуткое наблюдение за здоровьем младенцев, детей и подростков. Ведет консультативный прием на английском и китайском языках.',
    languages: ['English', 'Chinese', 'Русский'],
    isDoctor: true,
    credentials: 'MD, Pediatrics'
  },
  {
    id: 'simbat-sadyrbaeva',
    name: 'Dr. Simbat Sadyrbaeva',
    roleEn: 'Gynecology & Women’s Health',
    roleKy: 'Гинекология жана аялдардын ден соолугу',
    roleRu: 'Гинекология и женское здоровье',
    category: 'maternity',
    bioEn: 'Compassionate gynecologist specializing in routine women’s health check-ups, reproductive wellness, and supportive prenatal care in close coordination with our clinic doula.',
    bioKy: 'Аялдардын ден соолугун текшерүү, репродуктивдик саламаттык жана кош бойлуулукту көзөмөлдөө боюнча тажрыйбалуу гинеколог. Клиниканын дуласы менен тыгыз байланышта иш алып барат.',
    bioRu: 'Акушер-гинеколог, специализирующаяся на профилактических осмотрах женщин, репродуктивном здоровье и ведении беременности в гармоничном сотрудничестве с доулой клиники.',
    languages: ['Кыргызча', 'Русский'],
    isDoctor: true,
    credentials: 'MD, Obstetrician-Gynecologist'
  },
  {
    id: 'madison-smith',
    name: 'Madison Smith',
    roleEn: 'Physical Therapist',
    roleKy: 'Физиотерапевт / реабилитолог',
    roleRu: 'Физический терапевт / реабилитолог',
    category: 'therapy',
    bioEn: 'Physical therapist focused on musculoskeletal recovery, mobility restoration, posture correction, and pediatric physical therapy interventions.',
    bioKy: 'Булчуң-кыймыл аппаратын калыбына келтирүү, кыймылды оңдоо, туура позаны калыптандыруу жана балдардын физиотерапиясы боюнча адис.',
    bioRu: 'Специалист по физической терапии и реабилитации. Проводит восстановление подвижности, коррекцию осанки и терапевтические программы для детей и взрослых.',
    languages: ['English', 'Русский'],
    isDoctor: false,
    credentials: 'DPT, Physical Therapy'
  },
  {
    id: 'nargiza-islamova',
    name: 'Dr. Nargiza Islamova',
    roleEn: 'Ultrasound Specialist',
    roleKy: 'УЗИ диагностика боюнча адис',
    roleRu: 'Врач ультразвуковой диагностики (УЗИ)',
    category: 'diagnostic',
    bioEn: 'Diagnostic sonographer performing accurate ultrasound scans of internal organs, abdominal structures, pediatric organs, and routine screenings.',
    bioKy: 'Ички органдарды, ич көңдөйүн, балдардын органдарын жана профилактикалык текшерүүлөрдү жогорку тактыкта жүргүзгөн УЗИ боюнча тажрыйбалуу адис.',
    bioRu: 'Врач ультразвуковой диагностики, проводящая исследование органов брюшной полости, щитовидной железы, детских обследований и скринингов с высокой клинической точностью.',
    languages: ['Кыргызча', 'Русский'],
    isDoctor: true,
    credentials: 'MD, Ultrasound Diagnostic'
  }
];

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'consultations',
    titleEn: 'Medical Consultations',
    titleKy: 'Дарыгердик консультациялар',
    titleRu: 'Врачебные консультации',
    category: 'consultation',
    descriptionEn: 'Daily outpatient consultations with local and international specialists in pediatrics, family medicine, internal medicine, pulmonology, and gynecology.',
    descriptionKy: 'Педиатрия, үй-бүлөлүк медицина, терапия, пульмонология жана гинекология боюнча жергиликтүү жана эл аралык адистердин күнүмдүк амбулатордук кеңештери.',
    descriptionRu: 'Ежедневные амбулаторные консультации местных и международных врачей: педиатрия, семейная медицина, терапия, пульмонология, гинекология.',
    featuresEn: [
      'Comprehensive pediatric care from infancy through adolescence',
      'Whole-family medicine and adult chronic condition management',
      'Evidence-based diagnosis avoiding unnecessary medications',
      'Multilingual doctor consultations: English, Russian, Kyrgyz, German, French, Chinese'
    ],
    featuresKy: [
      'Ымыркай курактан өспүрүм куракка чейинки балдарга комплекстүү жардам',
      'Үй-бүлөлүк медицина жана чоңдордун ден соолугун көзөмөлдөө',
      'Ашыкча дарыларды жазуудан качкан далилдүү медицина ыкмалары',
      'Көп тилдүү консультациялар: кыргыз, орус, англис, немис, француз, кытай тилдеринде'
    ],
    featuresRu: [
      'Комплексная педиатрия от периода новорожденности до подросткового возраста',
      'Семейная медицина и ведение хронических состояний у взрослых',
      'Доказательные протоколы без назначения лишних медикаментов и БАДов',
      'Консультации на нескольких языках: кыргызский, русский, английский, немецкий, французский, китайский'
    ],
    noteEn: 'Patients consult with a doctor first to assess needs before ordering procedures.',
    noteKy: 'Процедураларга чейин бейтаптын муктаждыгын тактоо үчүн алгач дарыгердин кеңеши өткөрүлөт.',
    noteRu: 'Перед назначением инструментальных процедур рекомендуется консультация врача.'
  },
  {
    id: 'preventative-checkups',
    titleEn: 'Preventative Health Check-ups',
    titleKy: 'Профилактикалык текшерүүлөр',
    titleRu: 'Профилактические чек-апы',
    category: 'consultation',
    descriptionEn: 'Proactive routine examinations focused on early detection, growth tracking, and overall wellness for all age groups.',
    descriptionKy: 'Бардык курактагылар үчүн оорулардын алдын алууга, өсүүгө көз салууга багытталган профилактикалык текшерүүлөр.',
    descriptionRu: 'Регулярные комплексные профилактические осмотры для раннего выявления нарушений и гармоничного развития всей семьи.',
    featuresEn: [
      'Pediatric growth & developmental milestone tracking',
      'Vision screening & pediatric sensory checks',
      'Screening for anemia, iron deficiency, and diabetes markers',
      'Tailored health packages for women and men'
    ],
    featuresKy: [
      'Балдардын өсүү темпин жана өнүгүүсүн системалуу көзөмөлдөө',
      'Көрүүнү текшерүү жана сезүү органдарын скринингдөө',
      'Анемияга, темир жетишсиздигине жана кант диабетине текшерүү',
      'Аялдар жана эркектер үчүн атайын профилактикалык программалар'
    ],
    featuresRu: [
      'Мониторинг физического развития и возрастных этапов у детей',
      'Скрининг остроты зрения и слуха',
      'Лабораторный скрининг анемии, дефицита железа и риска диабета',
      'Индивидуальные программы проверки здоровья для женщин и мужчин'
    ]
  },
  {
    id: 'diagnostics',
    titleEn: 'Ultrasound, EKG & Clinical Testing',
    titleKy: 'УЗИ, ЭКГ жана клиникалык диагностика',
    titleRu: 'УЗИ, ЭКГ и функциональная диагностика',
    category: 'diagnostic',
    descriptionEn: 'Modern in-clinic diagnostic equipment for timely and precise evaluation without bureaucratic hospital queues.',
    descriptionKy: 'Клиникадагы заманбап диагностикалык жабдуулар: убакытты үнөмдөгөн жана так жыйынтык берген изилдөөлөр.',
    descriptionRu: 'Современная инструментальная диагностика на месте без очередей и длительного ожидания.',
    featuresEn: [
      'Diagnostic Ultrasound (abdominal, renal, thyroid, pediatric scans)',
      '12-lead Electrocardiogram (EKG) heart examinations',
      'Visual acuity testing and screening',
      'Audiometry (hearing testing)'
    ],
    featuresKy: [
      'УЗИ диагностикасы (ички органдар, бөйрөк, калкан бези, балдар изилдөөсү)',
      'Жүрөктү текшерүүчү 12 каналдуу ЭКГ изилдөөсү',
      'Көрүүнүн курчтугун текшерүү',
      'Аудиометрия (угуу жөндөмүн текшерүү)'
    ],
    featuresRu: [
      'УЗИ-диагностика (брюшная полость, почки, щитовидная железа, детские скрининги)',
      'ЭКГ (электрокардиограмма) с квалифицированной расшифровкой',
      'Оценка остроты зрения',
      'Аудиометрия (проверка остроты слуха)'
    ]
  },
  {
    id: 'laboratory',
    titleEn: 'In-House Laboratory (Partner: Express Plus)',
    titleKy: 'Ички лаборатория (Өнөктөш: Express Plus)',
    titleRu: 'Лабораторные анализы (Партнер: Express Plus)',
    category: 'diagnostic',
    descriptionEn: 'On-site sample collection in collaboration with Express Plus laboratory chain, offering an exclusive 30% discount on all tests for MercyMed patients.',
    descriptionKy: 'Express Plus тармагы менен биргеликте клиниканын ичинде анализ тапшыруу. MercyMedдин бейтаптарына бардык тесттерге 30% арзандатуу каралган.',
    descriptionRu: 'Пункт забора анализов в клинике в партнерстве с крупной лабораторией Express Plus со скидкой 30% на все исследования для пациентов MercyMed.',
    featuresEn: [
      '30% direct patient discount on standard laboratory price lists',
      'Complete blood count, biochemistry, urinalysis, hormone & metabolic panels',
      'Direct and independent results lookup via Express Plus secure QR codes',
      'No hidden markups or unnecessary panel bundling'
    ],
    featuresKy: [
      'Стандарттык прейскуранттан бейтаптарга 30% түз арзандатуу',
      'Кандын жалпы жана биохимиялык анализи, заара, гормондор жана панелдер',
      'Express Plus коопсуз QR-коду аркылуу жыйынтыктарды түздөн-түз көрүү',
      'Ашыкча керексиз анализдерди жүктөбөй так багыт берүү'
    ],
    featuresRu: [
      'Прямая скидка 30% на все лабораторные тесты для наших пациентов',
      'Общий анализ крови, биохимия, гормоны, инфекции, метаболические маркеры',
      'Получение результатов напрямую через персональный QR-код лаборатории',
      'Прозрачность: мы не назначаем избыточных анализов'
    ],
    noteEn: 'Results are handled directly by the Express Plus laboratory system; patients receive official reports via QR code.',
    noteKy: 'Анализдердин жыйынтыктары Express Plus тутуму аркылуу түздөн-түз бейтапка QR-код аркылуу берилет.',
    noteRu: 'Результаты обрабатываются независимой лабораторией Express Plus и выдаются пациенту по защищенному QR-коду.'
  },
  {
    id: 'maternity-doula',
    titleEn: 'Maternity Support & Doula Care',
    titleKy: 'Энелик колдоо жана дула кызматы',
    titleRu: 'Сопровождение беременности и курсы доулы',
    category: 'maternity',
    descriptionEn: 'Empowering prenatal care, childbirth preparation classes, and holistic maternal guidance provided by certified doula Mahabat Alieva.',
    descriptionKy: 'Сертификатталган дула Махабат Алиева тарабынан кош бойлуулукту колдоо, төрөткө даярдоо сабактары жана төрөттөн кийинки камкордук.',
    descriptionRu: 'Курсы подготовки к мягким родам, физическая и эмоциональная поддержка будущих мам под руководством сертифицированной доулы Махабат Алиевой.',
    featuresEn: [
      'Birth preparation courses for expectant parents',
      'Breathing techniques, labor comfort measures, and pain management coping',
      'Postpartum recovery guidance and breastfeeding consultation',
      'Holistic alignment between obstetric doctor care and emotional support'
    ],
    featuresKy: [
      'Ата-эне болууга даярдануучу атайын курстар',
      'Төрөт учурундагы туура дем алуу, ооруну басаңдатуучу көнүгүүлөр',
      'Төрөттөн кийинки калыбына келүү жана баланы эмизүү боюнча кеңештер',
      'Дарыгердин медициналык көзөмөлү менен эмоционалдык колдоонун айкалышы'
    ],
    featuresRu: [
      'Курсы дородовой подготовки для будущих родителей',
      'Техники естественного дыхания и облегчения родового процесса',
      'Консультации по грудному вскармливанию и послеродовому восстановлению',
      'Гармоничное сочетание гинекологического надзора и бережной поддержки'
    ]
  },
  {
    id: 'certificates',
    titleEn: 'Medical Certificates & Documentation',
    titleKy: 'Медициналык маалымкаттар жана документтер',
    titleRu: 'Медицинские справки и документация',
    category: 'certificates',
    descriptionEn: 'Official medical certificates for international travel, school and university admission, visa clearance, employment, and insurance reimbursement.',
    descriptionKy: 'Эл аралык саякат, мектепке жана жогорку окуу жайына тапшыруу, виза, жумуш жана камсыздандыруу үчүн расмий медициналык маалымкаттар.',
    descriptionRu: 'Официальные медицинские справки и заключения для учебы, работы, выезда за рубеж, авиаперелетов и страховых компаний.',
    featuresEn: [
      'Certificates for schools, kindergartens, and university admissions',
      'Fitness-to-fly certificates and international travel health forms',
      'Pre-employment examinations and occupational health clearances',
      'Bilingual/multilingual documentation accepted by embassies and insurers'
    ],
    featuresKy: [
      'Мектепке, бала бакчага жана окуу жайларына тапшыруу маалымкаттары',
      'Учууга уруксат (fitness-to-fly) жана саякат документтери',
      'Жумушка орношуудагы медициналык текшерүү кагаздары',
      'Элчиликтер жана камсыздандыруу компаниялары тааныган көп тилдүү корутундулар'
    ],
    featuresRu: [
      'Справки для поступления в школы, детские сады и международные вузы',
      'Медицинские заключения для авиаперелетов (Fit to Fly) и туризма',
      'Осмотры при трудоустройстве и периодические проверки сотрудников',
      'Документы на английском, русском и других языках для страховых и посольств'
    ]
  }
];

export const CLINIC_INFO = {
  name: 'MercyMed Clinic',
  fullName: 'MercyMed Private Medical Center',
  taglineEn: 'Evidence-Based & International Medical Care for Your Entire Family',
  taglineKy: 'Үй-бүлөңүз үчүн далилдүү жана эл аралык стандарттагы медициналык жардам',
  taglineRu: 'Доказательная и международная медицинская помощь для всей семьи',
  city: 'Bishkek, Kyrgyzstan',
  locationDetailsEn: 'Tunguch microdistrict, near Ayu Grand / Ala-Too International University',
  locationDetailsKy: 'Тунгуч кичирайону, «Аю Гранд» жана Ала-Тоо эл аралык университетинин жанында',
  locationDetailsRu: 'Микрорайон Тунгуч, ориентир ТЦ «Аю Гранд» и Международный университет «Ала-Тоо»',
  addressPlaceholder: '[Address: Tunguch microdistrict, near Ayu Grand, Bishkek — awaiting client street address confirmation]',
  openingHoursPlaceholder: '[Opening hours: awaiting client confirmation — outpatient consultations by appointment]',
  whatsappNumber: '+996 555 000 123',
  whatsappNumberDisplay: '+996 555 000 123 (Reception Placeholder)',
  instagramUrl: 'https://instagram.com/mercymed.kg',
  instagramHandle: '@mercymed.kg',
  email: 'info@mercymed.kg',
  foundedHistoryEn: 'Opened in October 2023 to expand over 10 years of charitable mobile clinic outreach across Kyrgyzstan.',
  foundedHistoryKy: 'Кыргызстан боюнча 10 жылдан ашык убакыттан бери жүргүзүлүп келе жаткан мобилдик клиникалардын ишин улантуу максатында 2023-жылдын октябрында Бишкек шаарында ачылган.',
  foundedHistoryRu: 'Открыт в октябре 2023 года для продолжения и расширения более чем 10-летней миссии мобильных клиник по регионам Кыргызстана.'
};
