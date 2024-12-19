import React from 'react';
import { Phone, Share2, MessageCircle } from 'lucide-react';

interface ContactButtonProps {
  type: 'whatsapp' | 'call';
  onClick: () => void;
}

export function ContactButton({ type, onClick }: ContactButtonProps) {
  const icons = {
    whatsapp: <MessageCircle className="w-5 h-5" />,
    call: <Phone className="w-5 h-5" />
  };

  const labels = {
    whatsapp: 'WhatsApp',
    call: 'Call Now'
  };

  const colors = {
    whatsapp: 'bg-green-500 hover:bg-green-600',
    call: 'bg-blue-500 hover:bg-blue-600'
  };

  return (
    <button
      onClick={onClick}
      className={`${colors[type]} px-4 py-2 text-white rounded-lg transition-colors flex items-center gap-2`}
    >
      {icons[type]}
      {labels[type]}
    </button>
  );
}