import { Language } from './clinicData';

export const UI_TRANSLATIONS: Record<Language, {
  nav: {
    home: string;
    services: string;
    aboutTeam: string;
    organizations: string;
    contact: string;
    bookCta: string;
    menu: string;
    close: string;
  };
  translationNotice: string;
  prototypeNotice: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
  };
  values: {
    sectionTitle: string;
    sectionSubtitle: string;
    evidenceTitle: string;
    evidenceText: string;
    familyTitle: string;
    familyText: string;
    multilingualTitle: string;
    multilingualText: string;
    charityTitle: string;
    charityText: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    bookThisService: string;
    labDiscountBadge: string;
    labDisclaimer: string;
    seeDoctorFirstNotice: string;
    faqTitle: string;
  };
  team: {
    sectionTitle: string;
    sectionSubtitle: string;
    filterAll: string;
    filterPediatrics: string;
    filterFamily: string;
    filterSpecialists: string;
    filterMaternity: string;
    filterTherapy: string;
    bookWithDoctor: string;
    languagesSpoken: string;
    experience: string;
    historyTitle: string;
    historyText1: string;
    historyText2: string;
    trainingTitle: string;
    trainingText: string;
  };
  organizations: {
    sectionTitle: string;
    sectionSubtitle: string;
    embassyTitle: string;
    embassyDesc: string;
    schoolTitle: string;
    schoolDesc: string;
    corporateTitle: string;
    corporateDesc: string;
    trainingTitle: string;
    trainingDesc: string;
    formTitle: string;
    formSubtitle: string;
    orgName: string;
    contactPerson: string;
    orgType: string;
    orgTypeCorporate: string;
    orgTypeEmbassy: string;
    orgTypeSchool: string;
    orgTypeMedical: string;
    phone: string;
    email: string;
    message: string;
    submitInquiry: string;
    inquirySentSuccess: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    clinicLocation: string;
    addressLabel: string;
    hoursLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    instagramLabel: string;
    instagramDesc: string;
    followInstagram: string;
    howToFindUs: string;
    routeHint: string;
    directMessageTitle: string;
  };
  bookingModal: {
    modalTitle: string;
    modalSubtitle: string;
    prototypeBadge: string;
    prototypeExplanation: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    dobLabel: string;
    phoneLabel: string;
    phonePlaceholder: string;
    doctorLabel: string;
    anyDoctor: string;
    serviceLabel: string;
    anyService: string;
    preferredDateLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    generatedMessageTitle: string;
    sendWhatsappBtn: string;
    copyBtn: string;
    copied: string;
    configNumberTitle: string;
    testNumberPlaceholder: string;
    requiredField: string;
    closeModal: string;
  };
  footer: {
    aboutMercyMed: string;
    quickLinks: string;
    hoursAndLocation: string;
    contactDirect: string;
    allRightsReserved: string;
    prototypeDisclaimer: string;
  };
}> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Medical Services',
      aboutTeam: 'About & Team',
      organizations: 'For Organizations',
      contact: 'Contact',
      bookCta: 'Book an Appointment',
      menu: 'Menu',
      close: 'Close',
    },
    translationNotice: 'Translation not checked yet · Clinical accuracy review in progress',
    prototypeNotice: 'Prototype Version · No patient medical records are stored. Submissions prepare a direct WhatsApp consultation request.',
    hero: {
      badge: 'Private Medical Center in Bishkek',
      title: 'Evidence-Based Care for Your Entire Family',
      subtitle: 'Modern medical consultations and diagnostics with compassionate local and international physicians in Bishkek. No unnecessary tests, no polypharmacy.',
      primaryCta: 'Book Consultation',
      secondaryCta: 'Explore Services',
      feature1Title: 'Evidence-Based Medicine',
      feature1Desc: 'We follow current international scientific research rather than outdated habits or unnecessary prescriptions.',
      feature2Title: 'Whole-Family Care',
      feature2Desc: 'From prenatal doula care and newborn pediatrics to adult family medicine in one comfortable clinic.',
      feature3Title: 'Multilingual Doctors',
      feature3Desc: 'Consultations available in Kyrgyz, Russian, English, German, French, and Chinese.',
      feature4Title: 'Charitable Regional Heart',
      feature4Desc: 'Over 10 years of ongoing mobile clinic outreach serving rural villages throughout Kyrgyzstan.',
    },
    values: {
      sectionTitle: 'How We Work',
      sectionSubtitle: 'A different approach to family healthcare in Bishkek',
      evidenceTitle: 'Strict Evidence-Based Practice',
      evidenceText: 'In many clinics, patients are prescribed long lists of unproven vitamins and medications. At MercyMed, our treatments are based on validated international studies. We protect your health and your wallet by avoiding unnecessary medical interventions.',
      familyTitle: 'One Place for the Whole Family',
      familyText: 'Pregnant mothers, newborns, children, teenagers, and adult family members can all be cared for in our clinic without being passed between disconnected commercial entities.',
      multilingualTitle: 'International & Local Expertise',
      multilingualText: 'Our clinical team blends Swiss and international medical training with deep Kyrgyz local healthcare expertise, offering consultations in six languages.',
      charityTitle: 'Rooted in Mobile Outreach',
      charityText: 'MercyMed grew out of more than a decade of voluntary medical expeditions to remote Kyrgyz villages. The Bishkek outpatient clinic serves as a lasting home for this ongoing mission.',
    },
    services: {
      sectionTitle: 'Our Medical Services',
      sectionSubtitle: 'Outpatient consultations, in-clinic diagnostics, and supportive care',
      bookThisService: 'Book Consultation',
      labDiscountBadge: '30% Discount on Lab Tests',
      labDisclaimer: 'Laboratory services operate on-site with Express Plus; patients receive reports directly via official QR code.',
      seeDoctorFirstNotice: 'Doctor Consultation First: We advise an initial physician evaluation before scheduling specialized diagnostics to prevent unneeded expenses.',
      faqTitle: 'Frequently Asked Questions',
    },
    team: {
      sectionTitle: 'Our Medical Team',
      sectionSubtitle: 'Meet our doctors, nurses, doula, and therapists',
      filterAll: 'All Staff',
      filterPediatrics: 'Pediatrics',
      filterFamily: 'Family & Adults',
      filterSpecialists: 'Specialists',
      filterMaternity: 'Doula & Maternity',
      filterTherapy: 'Therapy & Diagnostics',
      bookWithDoctor: 'Book with Specialist',
      languagesSpoken: 'Consultation Languages',
      experience: 'Specialty & Role',
      historyTitle: 'Our Story & Clinic Mission',
      historyText1: 'MercyMed started over 10 years ago when Dr. Jonathan Williams and nurse Mahabat Alieva began organizing voluntary medical teams to visit rural regions and villages across all oblasts of Kyrgyzstan, bringing free consultations and essential medications.',
      historyText2: 'In October 2023, the permanent clinic was opened in Bishkek’s Tunguch microdistrict. It provides a stable base for ongoing regional mobile clinics, continuous patient follow-ups, and clinical education.',
      trainingTitle: 'Medical Education & Academic Training',
      trainingText: 'We actively partner with medical schools to train medical students and resident doctors in evidence-based clinical decision-making, clinical ethics, and modern diagnostic standards.',
    },
    organizations: {
      sectionTitle: 'Services for Organizations',
      sectionSubtitle: 'Partnering with embassies, international schools, businesses, and universities',
      embassyTitle: 'Embassies & Expatriate Missions',
      embassyDesc: 'Multilingual consultations and English medical reports for foreign diplomats, visiting delegations, and expat families residing in Bishkek.',
      schoolTitle: 'International & Local Schools',
      schoolDesc: 'Annual student health check-ups, sports clearances, vision screening, and health documentation for admission.',
      corporateTitle: 'Corporate Employee Health',
      corporateDesc: 'Annual workplace preventative screenings, occupational health documentation, and discounted healthcare packages for company teams.',
      trainingTitle: 'Medical School Partnerships',
      trainingDesc: 'Clinical placements and mentorship for medical students and residency programs in evidence-based outpatient medicine.',
      formTitle: 'Request Partnership Information',
      formSubtitle: 'Contact our administrative team to arrange a corporate package or clinical collaboration.',
      orgName: 'Organization Name',
      contactPerson: 'Contact Person Name',
      orgType: 'Organization Type',
      orgTypeCorporate: 'Corporate / Business',
      orgTypeEmbassy: 'Embassy / Diplomatic Mission',
      orgTypeSchool: 'School / University',
      orgTypeMedical: 'Hospital / Medical School',
      phone: 'Phone / WhatsApp',
      email: 'Work Email Address',
      message: 'Brief details on your organization’s needs',
      submitInquiry: 'Submit Partnership Request',
      inquirySentSuccess: 'Thank you! Your partnership inquiry has been formatted. You can now send it to our administration via WhatsApp.',
    },
    contact: {
      sectionTitle: 'Contact & Location',
      sectionSubtitle: 'Visit us in Bishkek or connect directly via WhatsApp',
      clinicLocation: 'Clinic Location',
      addressLabel: 'Address',
      hoursLabel: 'Opening Hours',
      whatsappLabel: 'Receptionist WhatsApp',
      emailLabel: 'Official Email',
      instagramLabel: 'Instagram',
      instagramDesc: 'We post health tips, doctor schedules, and community updates on Instagram.',
      followInstagram: 'Follow @mercymed.kg',
      howToFindUs: 'How to Reach Us',
      routeHint: 'Located in the Tunguch microdistrict, close to Ayu Grand Shopping Center and Ala-Too International University. Easy access by public transport and private car.',
      directMessageTitle: 'Send a Message to Reception',
    },
    bookingModal: {
      modalTitle: 'Request an Appointment',
      modalSubtitle: 'Direct booking via receptionist WhatsApp',
      prototypeBadge: 'Prototype Notice',
      prototypeExplanation: 'This is a functional prototype. No real patient health records or personal data are stored in a database. Your inputs generate an instant WhatsApp message to the MercyMed clinic receptionist.',
      fullNameLabel: 'Full Name (First and Last)',
      fullNamePlaceholder: 'e.g. Asan Bekov',
      dobLabel: 'Date of Birth (Required for booking)',
      phoneLabel: 'Contact Phone Number',
      phonePlaceholder: '+996 ...',
      doctorLabel: 'Preferred Doctor (Optional)',
      anyDoctor: 'Any Available Doctor / Not Sure',
      serviceLabel: 'Service / Reason (Optional)',
      anyService: 'General Consultation',
      preferredDateLabel: 'Preferred Day / Time (Optional)',
      notesLabel: 'Brief Notes / Symptoms (Optional)',
      notesPlaceholder: 'e.g. Child has persistent cough for 3 days; would like pediatric check-up.',
      generatedMessageTitle: 'Generated WhatsApp Request Preview:',
      sendWhatsappBtn: 'Send via WhatsApp',
      copyBtn: 'Copy Message',
      copied: 'Copied!',
      configNumberTitle: 'Reception WhatsApp Number:',
      testNumberPlaceholder: 'Change number for testing...',
      requiredField: 'This field is required',
      closeModal: 'Close',
    },
    footer: {
      aboutMercyMed: 'MercyMed is a private medical center in Bishkek dedicated to evidence-based healthcare for the whole family, regional mobile clinics, and professional training.',
      quickLinks: 'Navigation',
      hoursAndLocation: 'Clinic Coordinates',
      contactDirect: 'Appointments & Contact',
      allRightsReserved: 'MercyMed Medical Center. All rights reserved.',
      prototypeDisclaimer: 'Academic prototype version. Developed for MercyMed clinic requirements based on client source documents.',
    },
  },
  ky: {
    nav: {
      home: 'Башкы бет',
      services: 'Медициналык кызматтар',
      aboutTeam: 'Биз жөнүндө жана команда',
      organizations: 'Уюмдар үчүн',
      contact: 'Байланыш',
      bookCta: 'Кабылдамага жазылуу',
      menu: 'Меню',
      close: 'Жабуу',
    },
    translationNotice: 'Котормо текшериле элек · Медициналык терминдердин тактыгы каралууда',
    prototypeNotice: 'Прототиптик версия · Бейтаптардын жеке маалыматтары сакталбайт. Өтүнмө кабылдамачынын WhatsApp номерине жөнөтүлөт.',
    hero: {
      badge: 'Бишкектеги жеке медициналык борбор',
      title: 'Бүт үй-бүлөңүз үчүн далилдүү медициналык жардам',
      subtitle: 'Бишкекте жергиликтүү жана эл аралык дарыгерлердин заманбап консультациялары жана диагностикасы. Ашыкча дары-дармектерсиз жана керексиз анализдерсиз.',
      primaryCta: 'Кабылдамага жазылуу',
      secondaryCta: 'Кызматтарды көрүү',
      feature1Title: 'Далилдүү медицина',
      feature1Desc: 'Эски адаттарга эмес, эл аралык далилденген медициналык изилдөөлөргө таянып диагноз коюп, дарылайбыз.',
      feature2Title: 'Бүт үй-бүлөгө кам көрүү',
      feature2Desc: 'Кош бойлуу аялдардан жана ымыркайлардан баштап, чоңдорго чейин бирдиктүү клиникада кызмат көрсөтөбүз.',
      feature3Title: 'Көп тилдүү дарыгерлер',
      feature3Desc: 'Консультациялар кыргыз, орус, англис, немис, француз жана кытай тилдеринде өткөрүлөт.',
      feature4Title: 'Аймактарга кайрымдуулук жардамы',
      feature4Desc: 'Кыргызстандын айылдарында 10 жылдан ашуун убакыттан бери уюштурулуп келген мобилдик клиникалар.',
    },
    values: {
      sectionTitle: 'Биздин иш принциптерибиз',
      sectionSubtitle: 'Бишкекте үй-бүлөлүк ден соолукка жаңыча мамиле',
      evidenceTitle: 'Так далилдүү медицина',
      evidenceText: 'Көптөгөн клиникаларда бейтаптарга далилденбеген витаминдердин жана дарылардын узун тизмеси жазылат. MercyMed клиникасында биз эл аралык деңгээлде далилденген дарылоону гана колдонобуз. Бул бейтаптын ден соолугун жана каражатын ашыкча чыгымдан сактайт.',
      familyTitle: 'Бүт үй-бүлө үчүн бир жерде',
      familyText: 'Кош бойлуу аялдар, жаңы төрөлгөн ымыркайлар, балдар жана чоңдор бир клиникадан адистердин көзөмөлүнөн өтө алышат.',
      multilingualTitle: 'Эл аралык жана жергиликтүү тажрыйба',
      multilingualText: 'Биздин команда Швейцариянын жана эл аралык медициналык тажрыйбаны жергиликтүү шарттар менен айкалыштырып, 6 тилде кеңеш берет.',
      charityTitle: 'Кайрымдуулук мобилдик клиникалары',
      charityText: 'Клиника он жылдан ашуун убакыттан бери Кыргызстандын бардык облустарына барып, айыл жергесиндеги калкка бекер медициналык жардам көрсөтүп келген көчмө топтордон баштау алган.',
    },
    services: {
      sectionTitle: 'Биздин медициналык кызматтар',
      sectionSubtitle: 'Амбулатордук кабыл алуулар, диагностика жана энеликке колдоо',
      bookThisService: 'Кызматка жазылуу',
      labDiscountBadge: 'Анализдерге 30% арзандатуу',
      labDisclaimer: 'Лаборатория Express Plus тармагы менен биргеликте иштейт; жыйынтыктар бейтапка түздөн-түз QR-код аркылуу берилет.',
      seeDoctorFirstNotice: 'Алгач дарыгердин кабыл алуусу: Ашыкча чыгымдарды болтурбоо үчүн атайын процедуралардан мурда дарыгердин текшерүүсүнөн өтүүнү сунуштайбыз.',
      faqTitle: 'Көп берилүүчү суроолор',
    },
    team: {
      sectionTitle: 'Биздин медициналык команда',
      sectionSubtitle: 'Дарыгерлерибиз, мээрман айымдарыбыз жана адистерибиз менен таанышыңыз',
      filterAll: 'Баары',
      filterPediatrics: 'Педиатрия',
      filterFamily: 'Үй-бүлөлүк дарыгерлер',
      filterSpecialists: 'Адистер',
      filterMaternity: 'Дула жана энелик',
      filterTherapy: 'Терапия жана диагностика',
      bookWithDoctor: 'Адиске жазылуу',
      languagesSpoken: 'Сүйлөгөн тилдери',
      experience: 'Адистиги жана кызматы',
      historyTitle: 'Биздин тарых жана миссия',
      historyText1: 'MercyMedдин иши 10 жылдан ашуун убакыт мурун доктор Джонатан Уильямс жана мээрман айым Махабат Алиева Кыргызстандын алыскы аймактарына бекер консультация жана дары-дармектер менен барган көчмө клиникаларды уюштуруудан башталган.',
      historyText2: '2023-жылдын октябрь айында Бишкек шаарынын Тунгуч кичирайонунда туруктуу клиника ачылып, мобилдик клиникаларды туруктуу колдоо жана бейтаптарга туруктуу байкоо жүргүзүүгө шарт түздү.',
      trainingTitle: 'Медициналык билим берүү жана окутуу',
      trainingText: 'Биз медициналык окуу жайларынын студенттерин жана ординаторлорун далилдүү медицина жана заманбап диагностика принциптерине үйрөтүү боюнча кызматташабыз.',
    },
    organizations: {
      sectionTitle: 'Уюмдар жана компаниялар үчүн',
      sectionSubtitle: 'Элчиликтер, эл аралык мектептер жана компаниялар менен кызматташуу',
      embassyTitle: 'Элчиликтер жана эл аралык уюмдар',
      embassyDesc: 'Бишкекте жашаган дипломаттар, чет элдик кызматкерлер жана алардын үй-бүлөлөрү үчүн көп тилдүү медициналык кызматтар жана англис тилиндеги корутундулар.',
      schoolTitle: 'Мектептер жана университеттер',
      schoolDesc: 'Окуучулар менен студенттердин жылдык медициналык кароосу, спортко уруксат кагаздары жана көрүүнү текшерүү.',
      corporateTitle: 'Корпоративдик кардарлар үчүн',
      corporateDesc: 'Кызматкерлерди жыл сайын профилактикалык медициналык кароодон өткөрүү жана ден соолукту текшерүүчү атайын пакеттер.',
      trainingTitle: 'Окуу жайлар менен кызматташуу',
      trainingDesc: 'Медициналык студенттер жана резиденттер үчүн клиникалык практика жана тажрыйба алмашуу программалары.',
      formTitle: 'Өнөктөштүк боюнча кайрылуу',
      formSubtitle: 'Корпоративдик сунуш же кызматташуу боюнча администрацияга маалымат жөнөтүңүз.',
      orgName: 'Уюмдун аталышы',
      contactPerson: 'Байланышуучу адамдын аты-жөнү',
      orgType: 'Уюмдун түрү',
      orgTypeCorporate: 'Компания / Бизнес',
      orgTypeEmbassy: 'Элчилик / Дипломатиялык өкүлчүлүк',
      orgTypeSchool: 'Мектеп / Университет',
      orgTypeMedical: 'Оорукана / Медициналык окуу жайы',
      phone: 'Телефон / WhatsApp',
      email: 'Жумушчу электрондук почта',
      message: 'Уюмуңуздун муктаждыктары тууралуу кыскача маалымат',
      submitInquiry: 'Сурамды жөнөтүү',
      inquirySentSuccess: 'Рахмат! Сиздин сурамыңыз даярдалды. Эми аны WhatsApp аркылуу биздин кабылдамага жөнөтө аласыз.',
    },
    contact: {
      sectionTitle: 'Байланыш жана дарек',
      sectionSubtitle: 'Бишкекте бизге келиңиз же WhatsApp аркылуу байланышыңыз',
      clinicLocation: 'Клиниканын жайгашкан жери',
      addressLabel: 'Дарек',
      hoursLabel: 'Иш убактысы',
      whatsappLabel: 'Кабылдаманын WhatsApp номери',
      emailLabel: 'Расмий электрондук почта',
      instagramLabel: 'Инстаграм',
      instagramDesc: 'Инстаграм баракчабызда кеңештерди, дарыгерлердин графигин жана жаңылыктарды бөлүшөбүз.',
      followInstagram: '@mercymed.kg жазылуу',
      howToFindUs: 'Бизди кантип тапса болот',
      routeHint: 'Бишкек шаары, Тунгуч кичирайону, «Аю Гранд» соода борборунун жана «Ала-Тоо» эл аралык университетинин жанында. Коомдук унаалар менен баруу ыңгайлуу.',
      directMessageTitle: 'Кабылдамага түз билдирүү жөнөтүү',
    },
    bookingModal: {
      modalTitle: 'Кабылдамага жазылуу',
      modalSubtitle: 'WhatsApp аркылуу кабылдамачы менен түз байланышуу',
      prototypeBadge: 'Прототиптин эскертүүсү',
      prototypeExplanation: 'Бул функционалдык прототип. Бейтаптардын медициналык же жеке маалыматтары эч кандай базага сакталбайт. Маалыматтар кабылдамачынын WhatsApp номерине жөнөтүү үчүн даярдалат.',
      fullNameLabel: 'Аты-жөнүңүз (ФИО)',
      fullNamePlaceholder: 'мисалы: Асан Беков',
      dobLabel: 'Туулган күнүңүз (милдеттүү)',
      phoneLabel: 'Байланыш телефонуңуз',
      phonePlaceholder: '+996 ...',
      doctorLabel: 'Каалаган дарыгер (милдеттүү эмес)',
      anyDoctor: 'Бош турган дарыгер / Так эмес',
      serviceLabel: 'Кызматтын түрү (милдеттүү эмес)',
      anyService: 'Жалпы консультация',
      preferredDateLabel: 'Ыңгайлуу күн / убакыт (милдеттүү эмес)',
      notesLabel: 'Кыскача даттануу же себеби (милдеттүү эмес)',
      notesPlaceholder: 'мисалы: Бала 3 күндөн бери жөтөлүп жатат, педиатрга көрсөтүү керек эле.',
      generatedMessageTitle: 'WhatsApp билдирүүсүнүн алдын ала көрүнүшү:',
      sendWhatsappBtn: 'WhatsApp аркылуу жөнөтүү',
      copyBtn: 'Текстти көчүрүү',
      copied: 'Көчүрүлдү!',
      configNumberTitle: 'Кабылдаманын WhatsApp номери:',
      testNumberPlaceholder: 'Сыноо үчүн номерди өзгөртүү...',
      requiredField: 'Бул талаа милдеттүү',
      closeModal: 'Жабуу',
    },
    footer: {
      aboutMercyMed: 'MercyMed — Бишкекте бүт үй-бүлө үчүн далилдүү медицинаны, аймактарга мобилдик клиникаларды жана дарыгерлерди окутууну камсыздаган жеке медициналык борбор.',
      quickLinks: 'Бөлүмдөр',
      hoursAndLocation: 'Дарек жана координаталар',
      contactDirect: 'Кабылдама жана байланыш',
      allRightsReserved: 'MercyMed клиникасы. Бардык укуктар корголгон.',
      prototypeDisclaimer: 'Окуу процессиндеги прототиптик версия. Кардардын PRD талаптарынын негизинде иштелип чыккан.',
    },
  },
  ru: {
    nav: {
      home: 'Главная',
      services: 'Медицинские услуги',
      aboutTeam: 'О клинике и команда',
      organizations: 'Организациям',
      contact: 'Контакты',
      bookCta: 'Записаться на прием',
      menu: 'Меню',
      close: 'Закрыть',
    },
    translationNotice: 'Перевод ещё не проверен · Клиническая валидация терминов в процессе',
    prototypeNotice: 'Прототип сайта · Медицинские и персональные данные не сохраняются. Форма формирует сообщение для регистратуры в WhatsApp.',
    hero: {
      badge: 'Частный медицинский центр в Бишкеке',
      title: 'Доказательная медицина для всей вашей семьи',
      subtitle: 'Амбулаторные приемы и диагностика врачей международного уровня в Бишкеке. Без полипрагмазии, без назначений десятков ненужных БАДов и анализов.',
      primaryCta: 'Записаться на прием',
      secondaryCta: 'Список услуг',
      feature1Title: 'Доказательная медицина',
      feature1Desc: 'Назначаем только препараты с международно подтвержденной клинической эффективностью.',
      feature2Title: 'Помощь всей семье',
      feature2Desc: 'От подготовки к родам и новорожденных детей до терапевтического наблюдения взрослых в одном центре.',
      feature3Title: 'Многоязычные врачи',
      feature3Desc: 'Консультации на русском, кыргызском, английском, немецком, французском и китайском языках.',
      feature4Title: 'Благотворительное сердце',
      feature4Desc: 'Более 10 лет регулярных выездных мобильных клиник в отдаленные регионы Кыргызстана.',
    },
    values: {
      sectionTitle: 'Как мы работаем',
      sectionSubtitle: 'Современный и бережный подход к семейному здоровью в Бишкеке',
      evidenceTitle: 'Строгие принципы Evidence-Based Medicine',
      evidenceText: 'В современной практике пациентам нередко назначают длинные списки недоказанных препаратов и лишних обследований. В MercyMed мы руководствуемся международными медицинскими исследованиями, защищая здоровье пациентов и семейный бюджет от ненужных трат.',
      familyTitle: 'Все специалисты в одной клинике',
      familyText: 'Будущие мамы, новорожденные, дети, подростки и взрослые могут получить квалифицированную помощь в одном комфортном месте без направления в разные коммерческие учреждения.',
      multilingualTitle: 'Международный и местный опыт',
      multilingualText: 'Наша команда объединяет швейцарскую клиническую школу, международные стандарты и глубокое знание местной системы здравоохранения. Мы говорим на 6 языках.',
      charityTitle: 'История выездных мобильных клиник',
      charityText: 'MercyMed берет начало из более чем десятилетней истории регулярных медицинских экспедиций по всем областям Кыргызстана с предоставлением бесплатных консультаций и медикаментов жителям сёл.',
    },
    services: {
      sectionTitle: 'Медицинские услуги клиники',
      sectionSubtitle: 'Амбулаторные консультации, аппаратная диагностика и программы наблюдения',
      bookThisService: 'Записаться на услугу',
      labDiscountBadge: 'Скидка 30% на анализы',
      labDisclaimer: 'Забор анализов проводится совместно с лабораторией Express Plus; результаты выдаются пациенту напрямую через защищенный QR-код.',
      seeDoctorFirstNotice: 'Сначала консультация врача: Мы рекомендуем первичный осмотр доктора перед назначением процедур, чтобы избежать избыточных затрат.',
      faqTitle: 'Частые вопросы пациентов',
    },
    team: {
      sectionTitle: 'Наша команда специалистов',
      sectionSubtitle: 'Врачи, медицинские сестры, доула и реабилитологи клиники',
      filterAll: 'Все сотрудники',
      filterPediatrics: 'Педиатрия',
      filterFamily: 'Семейная медицина',
      filterSpecialists: 'Узкие специалисты',
      filterMaternity: 'Доула и материнство',
      filterTherapy: 'Терапия и диагностика',
      bookWithDoctor: 'Записаться к специалисту',
      languagesSpoken: 'Языки приема',
      experience: 'Специализация и роль',
      historyTitle: 'История и миссия MercyMed',
      historyText1: 'История MercyMed началась более 10 лет назад, когда доктор Джонатан Уильямс и медсестра Махабат Алиева начали организовывать выездные врачебные бригады в отдаленные села по всем областям Кыргызстана, бесплатно осматривая пациентов и предоставляя лекарства.',
      historyText2: 'В октябре 2023 года открылась стационарная амбулаторная клиника в микрорайоне Тунгуч в Бишкеке, став постоянной базой для координации мобильных клиник, диспансерного наблюдения и обучения врачей.',
      trainingTitle: 'Обучение и передача опыта',
      trainingText: 'Клиника активно сотрудничает с медицинскими вузами, обучая студентов и врачей-ординаторов принципам доказательной медицины, клинического мышления и деонтологии.',
    },
    organizations: {
      sectionTitle: 'Услуги для организаций',
      sectionSubtitle: 'Сотрудничество с посольствами, международными школами, компаниями и вузами',
      embassyTitle: 'Посольства и дипломатические миссии',
      embassyDesc: 'Прием иностранных дипломатов и членов их семей с выдачей официальных заключений на английском языке и возможностью прямого взаимодействия со страховыми.',
      schoolTitle: 'Международные и частные школы',
      schoolDesc: 'Ежегодные профилактические медицинские осмотры учеников, выдача справок для поступления, проверка зрения и допуск к спортивным секциям.',
      corporateTitle: 'Корпоративное обслуживание',
      corporateDesc: 'Периодические профосмотры персонала, программы комплексной оценки здоровья (Check-up) и специальные условия обслуживания для сотрудников.',
      trainingTitle: 'Сотрудничество с медицинскими вузами',
      trainingDesc: 'Клинические стажировки и практические занятия для студентов и ординаторов на базе доказательной медицины.',
      formTitle: 'Запрос на корпоративное партнерство',
      formSubtitle: 'Свяжитесь с администрацией клиники для расчета программы обслуживания или соглашения.',
      orgName: 'Название организации',
      contactPerson: 'Контактное лицо (ФИО)',
      orgType: 'Тип организации',
      orgTypeCorporate: 'Компания / Бизнес',
      orgTypeEmbassy: 'Посольство / Дипмиссия',
      orgTypeSchool: 'Школа / Университет',
      orgTypeMedical: 'Больница / Медицинский вуз',
      phone: 'Телефон / WhatsApp',
      email: 'Рабочий Email',
      message: 'Кратко опишите потребности вашей организации',
      submitInquiry: 'Сформировать заявку',
      inquirySentSuccess: 'Спасибо! Ваша заявка сформирована. Вы можете сразу отправить ее нашему администратору в WhatsApp.',
    },
    contact: {
      sectionTitle: 'Контакты и расположение',
      sectionSubtitle: 'Как нас найти в Бишкеке и связаться с регистратурой',
      clinicLocation: 'Адрес и ориентиры',
      addressLabel: 'Адрес',
      hoursLabel: 'Режим работы',
      whatsappLabel: 'WhatsApp регистратуры',
      emailLabel: 'Официальный Email',
      instagramLabel: 'Instagram клиники',
      instagramDesc: 'В нашем Instagram мы регулярно публикуем графики приема врачей, советы по доказательной медицине и новости клиники.',
      followInstagram: 'Перейти в @mercymed.kg',
      howToFindUs: 'Как добраться',
      routeHint: 'Клиника расположена в микрорайоне Тунгуч в восточной части Бишкека, рядом с торговым центром «Аю Гранд» и Международным университетом «Ала-Тоо». Удобный подъезд на общественном транспорте и автомобиле.',
      directMessageTitle: 'Написать администратору в регистратуру',
    },
    bookingModal: {
      modalTitle: 'Запись на консультацию',
      modalSubtitle: 'Прямая связь с регистратором клиники через WhatsApp',
      prototypeBadge: 'Уведомление о прототипе',
      prototypeExplanation: 'Сайт работает в режиме прототипа. Персональные и медицинские данные пациентов не сохраняются на сервере. Введенные данные автоматически формируют готовое сообщение для отправки регистратору MercyMed в WhatsApp.',
      fullNameLabel: 'Имя и фамилия (ФИО)',
      fullNamePlaceholder: 'например: Асан Беков',
      dobLabel: 'Дата рождения (Обязательное поле для записи)',
      phoneLabel: 'Контактный номер телефона',
      phonePlaceholder: '+996 ...',
      doctorLabel: 'Желаемый специалист (не обязательно)',
      anyDoctor: 'Любой свободный врач / Требуется совет',
      serviceLabel: 'Услуга или повод обращения (не обязательно)',
      anyService: 'Общая первичная консультация',
      preferredDateLabel: 'Желаемый день или время (не обязательно)',
      notesLabel: 'Краткое описание симптомов / комментарий (не обязательно)',
      notesPlaceholder: 'например: Ребенок кашляет 3 дня, нужен осмотр педиатра.',
      generatedMessageTitle: 'Предпросмотр готового сообщения для WhatsApp:',
      sendWhatsappBtn: 'Отправить в WhatsApp',
      copyBtn: 'Скопировать текст',
      copied: 'Скопировано!',
      configNumberTitle: 'WhatsApp номер регистратуры:',
      testNumberPlaceholder: 'Изменить номер для тестирования...',
      requiredField: 'Это поле обязательно для заполнения',
      closeModal: 'Закрыть',
    },
    footer: {
      aboutMercyMed: 'MercyMed — частный медицинский центр в Бишкеке, ориентированный на доказательную семейную медицину, регулярные благотворительные мобильные клиники и подготовку врачей.',
      quickLinks: 'Навигация',
      hoursAndLocation: 'Координаты клиники',
      contactDirect: 'Запись и обращения',
      allRightsReserved: 'Медицинский центр MercyMed. Все права защищены.',
      prototypeDisclaimer: 'Учебный прототип веб-сайта. Разработан в соответствии с требованиями PRD клиники MercyMed на основе предоставленных материалов.',
    },
  },
};
