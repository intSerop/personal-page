import { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { Language } from '../data/clinicData';
import { UI_TRANSLATIONS } from '../data/translations';

export function TranslationBanner({ language }: { language: Language }) {
  const [isDismissed, setIsDismissed] = useState(false);
  const t = UI_TRANSLATIONS[language];

  if (isDismissed) return null;

  return (
    <div className="bg-amber-50 border-b border-amber-200/80 text-amber-900 text-xs px-4 py-1.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span className="font-medium">
            {t.translationNotice}
          </span>
          <span className="hidden sm:inline text-amber-500">·</span>
          <span className="hidden sm:inline text-amber-800/80">
            {language !== 'en' && 'English / Kyrgyz / Russian available'}
            {language === 'en' && 'Кыргызча жана орусча тилдер жеткиликтүү'}
          </span>
        </div>

        <button
          onClick={() => setIsDismissed(true)}
          aria-label="Dismiss translation notice"
          className="text-amber-700/80 hover:text-amber-950 p-0.5 rounded transition-colors shrink-0 cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
