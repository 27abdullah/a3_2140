import { Text, TouchableOpacity, View } from "react-native";

export default function Card({ id, name, description, username }) {
    console.log(id);
    return (
        <View
            className="bg-white rounded-xl shadow-lg p-4 mb-4 mx-4 border border-gray-100"
            key={id}
        >
            <Text className="text-xl font-bold text-gray-800 mb-2">{name}</Text>
            <Text className="text-gray-600 text-base mb-4 leading-5">
                {description}
            </Text>

            <View className="flex-row justify-between items-center gap-2">
                <TouchableOpacity
                    onPress={() => {}}
                    className="flex-1 bg-blue-500 py-3 rounded-lg active:bg-blue-600"
                >
                    <Text className="text-white text-center font-semibold">
                        View
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    className="flex-1 bg-amber-500 py-3 rounded-lg active:bg-amber-600"
                >
                    <Text className="text-white text-center font-semibold">
                        Edit
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {}}
                    className="flex-1 bg-red-500 py-3 rounded-lg active:bg-red-600"
                >
                    <Text className="text-white text-center font-semibold">
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
