import React from 'react';
import { View, ViewStyle } from 'react-native';
import { settingsRowGroupStyle } from './SettingsRowGroup.styles';
import { SettingsRowItem } from './SettingsRowItem';
import { getColorTheme } from '@/utils/getColorTheme';
import { ThemeName } from '../../constants/Colors';


interface SettingsRowGroupProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const SettingsRowGroup: React.FC<SettingsRowGroupProps> = ({ children, style }) => {
  const theme = getColorTheme();

  const styles = settingsRowGroupStyle(theme);
  const childArray = React.Children.toArray(children);

  return (
    <View style={[styles.container, style]}>
      {childArray.map((child, index) => {
        const isLast = index === childArray.length - 1;

        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<{ showDivider?: boolean }>, {
            showDivider: !isLast,
          });
        }

        return child;
      })}
    </View>
  );
};
