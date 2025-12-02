import Constants from 'expo-constants';
import { Platform } from 'react-native';

export function getApiBaseUrl() {
  try {
    const hostUri = Constants.expoConfig?.hostUri;

    if (hostUri) {
      const host = hostUri.split(':')[0];
      return `http://${host}:8000`;
    }

    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:8000';
    }

    if (Platform.OS === 'ios') {
      return 'http://localhost:8000';
    }

    return 'http://127.0.0.1:8000';
  } catch (e) {
    console.error('Error in getApiBaseUrl:', e);
    return 'http://127.0.0.1:8000';
  }
}
