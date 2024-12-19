export type ConsentType = 'analytics' | 'advertising' | 'personalization' | 'functional';

export interface ConsentSettings {
  analytics: boolean;
  advertising: boolean;
  personalization: boolean;
  functional: boolean;
}

export interface ConsentOption {
  id: ConsentType;
  label: string;
  description: string;
}