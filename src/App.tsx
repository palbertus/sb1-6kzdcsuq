import React, { useEffect, useState } from 'react';
import { AnalyticsButton } from './components/AnalyticsButton';
import { ContactButton } from './components/ContactButton';
import { SocialShareButton } from './components/SocialShareButton';
import { CookieBanner } from './components/consent/CookieBanner';
import { ExternalLink } from 'lucide-react';
import { ConsentSettings } from './types/consent';
import { getStoredConsent, saveConsent } from './utils/consent';

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  
  useEffect(() => {
    const storedConsent = getStoredConsent();
    if (!storedConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleConsentSave = (settings: ConsentSettings) => {
    saveConsent(settings);
    setShowCookieBanner(false);
  };

  const handleAnalyticsClick = (buttonId: number) => {
    console.log(`Analytics button ${buttonId} clicked`);
  };

  const handleShare = (platform: string) => {
    console.log(`Sharing to ${platform}`);
  };

  const handleContact = (method: string) => {
    console.log(`Contact via ${method}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Analytics Testing Page</h1>
          <p className="text-xl text-gray-600">
            A comprehensive demo page for testing various analytics events and user interactions
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            alt="Analytics Dashboard"
            className="w-full h-64 object-cover cursor-pointer"
            onClick={() => console.log('Image clicked')}
          />
          
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Interactive Elements</h2>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <AnalyticsButton
                    key={num}
                    label={`Test Button ${num}`}
                    onClick={() => handleAnalyticsClick(num)}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Contact Options</h2>
              <div className="flex gap-4">
                <ContactButton type="whatsapp" onClick={() => handleContact('whatsapp')} />
                <ContactButton type="call" onClick={() => handleContact('call')} />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Share</h2>
              <div className="flex gap-3">
                <SocialShareButton platform="facebook" onClick={() => handleShare('facebook')} />
                <SocialShareButton platform="twitter" onClick={() => handleShare('twitter')} />
                <SocialShareButton platform="linkedin" onClick={() => handleShare('linkedin')} />
              </div>
            </div>

            <a
              href="https://example.com"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      {showCookieBanner && (
        <CookieBanner
          onSave={handleConsentSave}
          initialSettings={getStoredConsent() ?? undefined}
        />
      )}
    </div>
  );
}

export default App;