import React, { useState } from 'react';
import { ConsentOption, ConsentSettings } from '../../types/consent';
import { ConsentToggle } from './ConsentToggle';
import { X } from 'lucide-react';

interface CookieBannerProps {
  onSave: (settings: ConsentSettings) => void;
  initialSettings?: ConsentSettings;
}

const consentOptions: ConsentOption[] = [
  {
    id: 'analytics',
    label: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website'
  },
  {
    id: 'advertising',
    label: 'Advertising Cookies',
    description: 'Used to show you relevant personalized ads'
  },
  {
    id: 'personalization',
    label: 'Personalization Cookies',
    description: 'Allow us to remember your preferences'
  },
  {
    id: 'functional',
    label: 'Functional Cookies',
    description: 'Essential for basic website functionality'
  }
];

export function CookieBanner({ onSave, initialSettings }: CookieBannerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>(initialSettings ?? {
    analytics: false,
    advertising: false,
    personalization: false,
    functional: true
  });

  const handleAcceptAll = () => {
    const allEnabled = {
      analytics: true,
      advertising: true,
      personalization: true,
      functional: true
    };
    onSave(allEnabled);
  };

  const handleSavePreferences = () => {
    onSave(settings);
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40" />
      
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-6 animate-slide-up z-50">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900">Cookie Preferences</h3>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <p className="text-sm text-gray-600">
            We use cookies to enhance your browsing experience and analyze our traffic.
            Please choose your preferences below.
          </p>

          {isExpanded && (
            <div className="space-y-4 border-t border-gray-200 pt-4">
              {consentOptions.map((option) => (
                <ConsentToggle
                  key={option.id}
                  id={option.id}
                  label={option.label}
                  description={option.description}
                  checked={settings[option.id]}
                  onChange={(value) => 
                    setSettings(prev => ({ ...prev, [option.id]: value }))
                  }
                />
              ))}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Accept All
            </button>
            {isExpanded ? (
              <button
                onClick={handleSavePreferences}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Save Preferences
              </button>
            ) : (
              <button
                onClick={() => setIsExpanded(true)}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Customize
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}