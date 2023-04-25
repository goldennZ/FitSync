import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export function NextPageButton(props) {
    const router = useRouter();
    let opacityStyle = ""

    if (props.disabled) {
        opacityStyle = "opacity-50"
    }

    return (
        <TouchableOpacity className={"bg-black rounded-3xl px-14 py-3 "+opacityStyle} onPress={() => router.push(props.router)} disabled={props.disabled}>
            <Text className="font-poppins_bold text-white text-xl">{props.text}</Text>
        </TouchableOpacity>
    )
}

export function NormalButton(props) {
    const router = useRouter();
    let opacityStyle = ""

    if (props.disabled) {
        opacityStyle = "opacity-50"
    }

    return (
        <TouchableOpacity className={"bg-[#0DD196] rounded-3xl px-14 py-3 "+opacityStyle} onPress={() => props.onPress()} disabled={props.disabled}>
            <Text className="font-poppins_bold text-white text-xl">{props.text}</Text>
        </TouchableOpacity>
    )
}