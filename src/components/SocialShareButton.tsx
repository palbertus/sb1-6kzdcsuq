import React from 'react';
import { Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

interface SocialShareButtonProps {
  platform: 'facebook' | 'twitter' | 'linkedin';
  onClick: () => void;
}

export function SocialShareButton({ platform, onClick }: SocialShareButtonProps) {
  const icons = {
    facebook: <Facebook className="w-5 h-5" />,
    twitter: <Twitter className="w-5 h-5" />,
    linkedin: <Linkedin className="w-5 h-5" />
  };

  const colors = {
    facebook: 'bg-[#1877F2] hover:bg-[#0d6aed]',
    twitter: 'bg-[#1DA1F2] hover:bg-[#0d95e8]',
    linkedin: 'bg-[#0A66C2] hover:bg-[#095197]'
  };

  return (
    <button
      onClick={onClick}
      className={`${colors[platform]} p-2 text-white rounded-lg transition-colors`}
      aria-label={`Share on ${platform}`}
    >
      {icons[platform]}
    </button>
  );
}