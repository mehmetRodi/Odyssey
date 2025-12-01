import { StyleSheet } from 'react-native';
import Colors, { ThemeName } from '@/constants/Colors';

export default function getStyles(theme: ThemeName) {
  const color = Colors[theme];
  return StyleSheet.create({
    card: {
      backgroundColor: color.background,
      borderRadius: 24,
      paddingVertical: 24,
      paddingHorizontal: 20,
      marginTop: -20,
      width: '90%',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
      elevation: 4,
    },

    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    statItem: {
      alignItems: 'center',
    },
    statValue: {
      fontSize: 24,
      fontWeight: '700',
      marginTop: 4,
      color: color.text,
    },
    statLabel: {
      fontSize: 14,
      color: color.subText,
      marginTop: 4,
    },

    divider: {
      height: 1,
      backgroundColor: '#E5E5E5',
      marginVertical: 12,
    },

    bottomRow: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 4,
    },
    bottomItem: {
      alignItems: 'center',
      flex: 1,
    },
    bottomValue: {
      fontSize: 22,
      fontWeight: '600',
      color: color.text,
    },
    bottomLabel: {
      fontSize: 14,
      color: color.subText,
      marginTop: 4,
    },

    bottomDivider: {
      width: 1,
      height: 28,
      backgroundColor: '#E0E0E0',
    },
  });
}
