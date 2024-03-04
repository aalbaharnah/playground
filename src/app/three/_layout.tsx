import { Stack } from 'expo-router/stack';
import { Platform, StatusBar } from 'react-native';
export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                statusBarTranslucent: Platform.OS === 'android' ? true : undefined,
                statusBarStyle: Platform.OS === 'android' ? 'dark' : undefined,
            }}
        />
    );
}