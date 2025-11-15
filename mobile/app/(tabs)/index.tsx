import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { getApiBaseUrl } from "@/utils/getApiBaseUrl";


const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL ?? getApiBaseUrl();

export default function TabOneScreen() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/health/`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setStatus(json.status ?? 'ok');
      } catch (err: any) {
        setError(err.message ?? 'Unknown error');
      }
    };

    checkBackend();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      <View 
        style={styles.separator} 
        lightColor="#eee" 
        darkColor="rgba(255,255,255,0.1)" 
      />

      {/* ------------ API STATUS BOX ------------ */}
      {!status && !error && (
        <View style={styles.statusBox}>
          <ActivityIndicator />
          <Text>Checking backend…</Text>
        </View>
      )}

      {status && (
        <View style={styles.statusBox}>
          <Text>Backend status: {status}</Text>
        </View>
      )}

      {error && (
        <View style={styles.statusBox}>
          <Text style={{ color: 'red' }}>Error: {error}</Text>
        </View>
      )}
      {/* ------------ END API STATUS BOX ------------ */}

      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
  statusBox: {
    alignItems: 'center',
    marginBottom: 20,
  },
});