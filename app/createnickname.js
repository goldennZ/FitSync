import { Link, useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 justify-center items-center px-6 space-y-10">
        <Text className="font-firabold text-5xl leading-[68px]">Nos diga o seu nome</Text>
        <TextInput placeholder="Nickname" className="h-10 w-full rounded-2xl pl-4 bg-[#2AAD7A] font-firaregular text-xl text-center text-white"/>
          <TouchableOpacity className="bg-black  rounded-3xl p-6" onPress={() => router.push("/menu/teladeinicio")}>
            <AntDesign name="arrowright" size={24} color="white" />
          </TouchableOpacity>
    </SafeAreaView>
  );
}
