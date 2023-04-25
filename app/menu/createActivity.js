import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { NormalInput } from '../components/Inputs'
import { NormalButton } from "../components/Buttons";
import { useState } from "react";

export default function TelaInicio() {
  const [activityList,setActivityList] = useState([]);

  const [activityName,setActivityName] = useState("");
  const [activitySeries,setActivitySeries] = useState("");
  const [activityRep,setActivityRep] = useState("");

  function setActivity() {

    let activityObject = {
      "name": activityName,
      "series": activitySeries,
      "rep" : activityRep
    }

    setActivityList(content => [...content,activityObject]);

  }

  return (
    <SafeAreaView className="flex-1 items-center px-6 py-10">
      <Text className="font-poppins_bold text-4xl mb-8 w-full px-6">Criar minha lista de Atividades</Text>
      <NormalInput placeholder="Nome da sua lista" />
      <Text className="font-poppins_bold text-4xl mb-8 mt-16 w-full px-6">Exercícios</Text>
      <NormalInput placeholder="Nome do exercício" value={activityName} onChangeText={(text) => setActivityName(text)}/>
      <View className="flex-row w-full justify-between px-6 mb-6">
            <TextInput 
                placeholder="Séries"
                placeholderTextColor="gray" 
                className="py-3 w-[140px] rounded-lg pl-6 bg-black font-poppins_regular text-xl text-white"
                keyboardType="number-pad"
                value={activitySeries}
                onChangeText={(text) => setActivitySeries(text)}
            />
            <TextInput 
                placeholder="Repetições"
                placeholderTextColor="gray" 
                className="py-3 w-[140px] rounded-lg pl-6 bg-black font-poppins_regular text-xl text-white"
                keyboardType="number-pad"
                value={activityRep}
                onChangeText={(text) => setActivityRep(text)}
            />
      </View>
      <NormalButton text="Adicionar Exercício" onPress={() => setActivity()}/>
      <View className="bg-gray-300 w-full h-[160px] rounded-xl mt-6">
        {activityList.map((item) => {
          return <Text key={item.length}>{item.name+" | "+item.series+" | "+item.rep}</Text>
        })}
      </View>
    </SafeAreaView>
  )
}