import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import Provider from '../context/provider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function Layout() {

    const [fontsLoaded] = useFonts({
        ['Lateef-Bold']: require('../../assets/fonts/Lateef-Bold.ttf'),
        ['Lateef-Light']: require('../../assets/fonts/Lateef-Light.ttf'),
        ['Lateef-ExtraBold']: require('../../assets/fonts/Lateef-ExtraBold.ttf'),
        ['Lateef-ExtraLight']: require('../../assets/fonts/Lateef-ExtraLight.ttf'),
        ['Lateef-Medium']: require('../../assets/fonts/Lateef-Medium.ttf'),
        ['Lateef-Regular']: require('../../assets/fonts/Lateef-Regular.ttf'),
        ['Lateef-SemiBold']: require('../../assets/fonts/Lateef-SemiBold.ttf'),
        ['Rakkas-Regular']: require('../../assets/fonts/Rakkas-Regular.ttf'),
        ['RawasiDisplay-Regular']: require('../../assets/fonts/RawasiDisplay-Regular.otf'),
        ['RawasiDisplay-Bold']: require('../../assets/fonts/RawasiDisplay-Bold.otf'),
        ['RawasiDisplay-Black']: require('../../assets/fonts/RawasiDisplay-Black.otf'),
    });

    if (!fontsLoaded) {
        return (
            <View className="flex-1 items-center justify-center bg-background">
                <Text>...دقيقة</Text>
            </View>
        )
    }

    return (
        <Provider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View className="flex-1 bg-background">
                    {/* Main Stack */}
                    <Stack screenOptions={{ headerShown: false }} />
                </View>
            </GestureHandlerRootView>
        </Provider>
    )
}