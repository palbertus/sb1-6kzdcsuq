import React from 'react';

interface AnalyticsButtonProps {
  label: string;
  onClick: () => void;
}

export function AnalyticsButton({ label, onClick }: AnalyticsButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
    >
      {label}
    </button>
  );
}