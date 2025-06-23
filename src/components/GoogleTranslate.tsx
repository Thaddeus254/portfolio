import React, { useEffect } from 'react';
import { Languages } from 'lucide-react';

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    // Initialize Google Translate when component mounts
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,sw',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');
    }
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <Languages size={16} style={{ color: '#4169E1' }} />
      <div id="google_translate_element" className="google-translate-container"></div>
      <style jsx>{`
        .google-translate-container .goog-te-combo {
          background: white;
          border: 1px solid #4169E1;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 12px;
          color: #4169E1;
          outline: none;
        }
        .google-translate-container .goog-te-combo:hover {
          background: #4169E1;
          color: white;
        }
        .goog-te-banner-frame {
          display: none !important;
        }
        .goog-te-menu-value {
          color: #4169E1 !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslate;