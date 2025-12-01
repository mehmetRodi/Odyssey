import { StyleSheet } from 'react-native';
import Colors, { ThemeName } from '@/constants/Colors';

export default function getStyles(theme: ThemeName) {
  const color = Colors[theme];
  return StyleSheet.create({
    container: {
      width: '100%',
      paddingTop: 64,
      paddingBottom: 32,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color.primary,
    },
    avatarWrapper: {
      marginBottom: 16,
    },
    avatarCircle: {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: color.text,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 18,
      color: color.text,
      opacity: 0.9,
    },
  });
}
