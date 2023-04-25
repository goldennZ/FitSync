import { TextInput, View } from "react-native";

export function NormalInput(props) {
    return (
        <View className="w-full px-6 mb-4">
            <TextInput 
                placeholder={props.placeholder} 
                placeholderTextColor="gray" 
                className="py-3 rounded-lg pl-6 bg-black font-poppins_regular text-xl text-white"
                value={props.value}
                onChangeText={(text) => props.onChangeText(text)}
            />
        </View>
    )
}