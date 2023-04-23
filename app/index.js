import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  return (
    <SafeAreaView className="bg-[#2AAD7A] flex-1">
      <View>
        <Text>Hello World</Text>
        <Text>This is the first page of your app.</Text>
      </View>
    </SafeAreaView>
  );
}
