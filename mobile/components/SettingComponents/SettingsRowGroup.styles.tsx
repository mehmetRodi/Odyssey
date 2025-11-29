import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Spacing } from '../../constants/Spacing';
import { ThemeName } from '../../constants/Colors';

export const settingsRowGroupStyle = (theme: ThemeName) => {

  return StyleSheet.create({
    container: {
      backgroundColor: Colors[theme].foreground,
      borderRadius: 16,
      overflow: 'hidden',
      marginHorizontal: Spacing.lg,
      marginTop: Spacing.lg,
    },
  });
};
