import { Text, View } from "react-native";

export default function About() {
    return (
        <View className="h-full bg-gray-100 p-6 flex flex-col gap-y-4 mt-4">
            <View className="bg-emerald-300 p-6 rounded-xl flex items-center justify-center h-52 shadow-lg">
                <Text className="text-3xl font-bold mb-2 text-gray-900">
                    FormBase
                </Text>
                <Text className="text-lg text-gray-900">
                    Build, Collect & Explore
                </Text>
            </View>

            <View className="bg-white p-6 rounded-xl flex shadow-lg">
                <Text className="text-xl font-semibold mb-2 text-gray-900">
                    Features
                </Text>
                <Text> - Create forms</Text>
                <Text> - Collect records</Text>
                <Text> - Search and filter</Text>
                <Text> - Visualise location data</Text>
            </View>

            <View className="bg-white p-6 rounded-xl flex shadow-lg">
                <Text className="text-xl font-semibold mb-2 text-gray-900">
                    Powered By
                </Text>
                <Text> - Expo</Text>
                <Text> - React Native</Text>
                <Text> - PostgREST API</Text>
                <Text> - and more!</Text>
            </View>

            <View className="bg-violet-500 rounded-2xl py-4 mt-48">
                <Text className="text-center text-white font-bold">
                    Made by 27abdullah
                </Text>
            </View>
        </View>
    );
}
