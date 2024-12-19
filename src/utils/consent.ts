import { ConsentSettings, ConsentType } from '../types/consent';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const updateGoogleConsent = (settings: ConsentSettings) => {
  window.gtag?.('consent', 'update', {
    analytics_storage: settings.analytics ? 'granted' : 'denied',
    ad_storage: settings.advertising ? 'granted' : 'denied',
    personalization_storage: settings.personalization ? 'granted' : 'denied',
    functionality_storage: settings.functional ? 'granted' : 'denied'
  });
};

export const getStoredConsent = (): ConsentSettings | null => {
  const stored = localStorage.getItem('cookieConsent');
  return stored ? JSON.parse(stored) : null;
};

export const saveConsent = (settings: ConsentSettings) => {
  localStorage.setItem('cookieConsent', JSON.stringify(settings));
  updateGoogleConsent(settings);
};