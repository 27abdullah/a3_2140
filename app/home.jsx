import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Home() {
    const router = useRouter();

    return (
        <View className="h-full flex flex-col items-center justify-center bg-gray-100 px-8 gap-y-4">
            <View className="bg-emerald-300 p-6 rounded-xl flex items-center justify-center h-40 w-full">
                <Text className="text-black font-bold text-3xl">
                    Welcome to FormBase!
                </Text>
            </View>
            <View className="bg-violet-500 rounded-xl flex items-center justify-center shadow-md h-min w-min px-10 py-6">
                <Pressable onPress={() => router.push("/myforms/add")}>
                    <Text className="font-bold text-xl text-white">
                        Start Building Forms
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}
