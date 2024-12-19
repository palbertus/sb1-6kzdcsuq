import React from 'react';
import { ConsentType } from '../../types/consent';

interface ConsentToggleProps {
  id: ConsentType;
  label: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

export function ConsentToggle({ id, label, description, checked, onChange }: ConsentToggleProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex items-center h-6">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      </div>
      <div className="min-w-0 flex-1 text-sm">
        <label htmlFor={id} className="font-medium text-gray-700">
          {label}
        </label>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}