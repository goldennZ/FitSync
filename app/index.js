import { useCallback } from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import WelcomeImage from './assets/images/welcome.png'
import { useFonts } from "expo-font"
import { useRouter } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { NextPageButton } from './components/Buttons';

export default function Page() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
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
    <SafeAreaView className="flex-1 items-center justify-center space-y-6">
      <Text className="font-poppins_bold text-4xl w-80 leading-[50px]">Bora dar os primeiros passos?</Text>
      <Image className="w-full" source={WelcomeImage}/>
      <Text className="text-xl text-gray-400 font-poppins_regular px-8 text-justify">FitSync é um app que irá te ajudar a criar e organizar os seus treinos de forma intuitiva.</Text>
      <View>
        <NextPageButton text="Começar" router="/createnickname"/>
      </View>
    </SafeAreaView>
  );
}
