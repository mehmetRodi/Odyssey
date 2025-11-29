// components/settings/SettingsItemRow.tsx
import React, { useMemo } from 'react';
import { Pressable, View, Text } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { rowItemStyle } from './SettingsRowItem.styles';
import { getColorTheme } from '@/utils/getColorTheme';
import type { SettingsItemConfig } from './SettingsRowItem.config';

interface SettingsRowItemProps {
  item: SettingsItemConfig;
  showDivider?: boolean;
  onPress?: (item: SettingsItemConfig) => void;
}

export const SettingsRowItem: React.FC<SettingsRowItemProps> = ({
  item,
  showDivider = false,
  onPress,
}) => {
  const theme = getColorTheme();

  const styles = useMemo(() => rowItemStyle(theme), [theme]);
  const Icon = item.icon;

  return (
    <Pressable
      onPress={() => onPress?.(item)}
      style={({ pressed }) => [
        styles.row,
        pressed && styles.rowPressed,
        showDivider && styles.rowBorder,
      ]}
    >
      <View style={styles.iconContainer}>
        <Icon size={20} color={styles.icon.color as string} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>{item.label}</Text>
        {item.description ? <Text style={styles.description}>{item.description}</Text> : null}
      </View>

      <ChevronRight size={20} color={styles.chevron.color as string} />
    </Pressable>
  );
};
