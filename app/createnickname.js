import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { NextPageButton } from "./components/Buttons";
import { NormalInput } from "./components/Inputs";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    name.length <= 0
    ? setDisabled(true)
    : setDisabled(false)
  },[name])

  return (
    <SafeAreaView className="flex-1 items-center px-6 py-10 relative">
        <Text className="font-poppins_bold text-4xl leading-[60px] mb-10 w-full px-6">Como podemos te chamar a partir de agora?</Text>
        <NormalInput placeholder="Digite o seu nome" value={name} onChangeText={(text) => setName(text)}/>
        <View className="absolute bottom-16 left-auto right-auto">
          <NextPageButton text="Estou pronto" router="/menu/activity" disabled={disabled}/>
        </View>
    </SafeAreaView>
  );
}
