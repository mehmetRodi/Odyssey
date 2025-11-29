import { StyleSheet } from 'react-native';
import {
  ChevronRight,
  User,
  Bell,
  Shield,
  Globe,
  Palette,
  HelpCircle,
  LogOut,
} from 'lucide-react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { SettingsRowItem } from '@/components/SettingComponents/SettingsRowItem';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <SettingsRowItem
        item={{ key: 'YARRAK', label: 'YARRAK', description: 'Description here', icon: User }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
