import { useColorScheme } from '@/components/useColorScheme';
import Colors, { ThemeName } from '@/constants/Colors';

export function getColorTheme() {
  const scheme = useColorScheme() ?? 'light';
  const theme = scheme as ThemeName;

  return theme;
}
