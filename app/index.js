import { useCallback } from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import WelcomeImage from './assets/images/welcome.png'
import { useFonts } from "expo-font"
import { useRouter } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';

export default function Page() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'FiraCode-Bold': require('./assets/fonts/FiraCode-Bold.ttf'),
    'FiraCode-Regular': require('./assets/fonts/FiraCode-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-[#2AAD7A] flex-1 items-center">
      <Image className="w-full mt-16" source={WelcomeImage}/>
      <View className="px-6 mt-6">
        <Text className="text-4xl text-white font-firaregular">Seja</Text>
        <Text className="text-5xl leading-[62px] text-white font-firaregular">Bem-vindo</Text>
        <Text className="text-base text-white font-firaregular">FitSync é um app que irá te ajudar a criar e organizar os seus treinos de forma intuitiva.</Text>
      </View>
      <View className="flex-1 justify-center">
        <TouchableOpacity className="bg-white rounded-3xl p-6" onPress={() => router.push("/createnickname")}>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
