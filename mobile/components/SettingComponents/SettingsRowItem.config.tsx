import { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react-native';

export type IconType = ComponentType<LucideProps>;

export interface SettingsItemConfig {
  key: string;
  label: string;
  description?: string;
  icon?: IconType;
  onPressKey?: string;
  imageUri?: string;
}
