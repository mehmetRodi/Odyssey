import { ScrollView, StyleSheet } from 'react-native';
import {
  User,
  Bell,
  Shield,
  Globe,
  Palette,
  HelpCircle,
} from 'lucide-react-native';
import { Text, View } from '@/components/Themed';
import { SettingsRowItem } from '@/components/SettingComponents/SettingsRowItem';
import { SettingsRowGroup } from '@/components/SettingComponents/SettingsRowGroup';
import type { SettingsItemConfig } from '@/components/SettingComponents/SettingsRowItem.config';

type SettingsGroup = {
  title: string;
  items: SettingsItemConfig[];
};

export default function TabTwoScreen() {
  const settingsGroups: SettingsGroup[] = [
    {
      title: 'Account',
      items: [
        {
          key: 'edit_profile',
          icon: User,
          label: 'Edit Profile',
          description: 'Update your personal information',
        },
        {
          key: 'notifications',
          icon: Bell,
          label: 'Notifications',
          description: 'Manage notification preferences',
        },
        {
          key: 'privacy',
          icon: Shield,
          label: 'Privacy',
          description: 'Control your privacy settings',
        },
      ],
    },
    {
      title: 'Preferences',
      items: [
        {
          key: 'language',
          icon: Globe,
          label: 'Language',
          description: 'English',
        },
        {
          key: 'appearance',
          icon: Palette,
          label: 'Appearance',
          description: 'Light mode',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          key: 'help_support',
          icon: HelpCircle,
          label: 'Help & Support',
          description: 'Get help with the app',
        },
      ],
    },
  ];

  const handleItemPress = (groupTitle: string, item: SettingsItemConfig) => {
    // TODO: wire up navigation or actions based on groupTitle + item.key / item.label
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {settingsGroups.map((group) => (
        <View key={group.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{group.title}</Text>

          <SettingsRowGroup>
            {group.items.map((item) => (
              <SettingsRowItem
                key={item.key ?? item.label}
                item={item}
                onPress={() => handleItemPress(group.title, item)}
              />
            ))}
          </SettingsRowGroup>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingVertical: 24,
  },
  section: {
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    opacity: 0.7,
  },
});