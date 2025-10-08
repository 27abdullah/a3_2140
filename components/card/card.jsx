import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { deleteForm } from "../../scripts/app";

export default function Card({ id, name, description, username }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);
            await deleteForm(id);
            router.replace("/myforms");
        } catch (error) {
            Alert.alert("Error", "Failed to delete form");
            console.error(error);
        } finally {
            setIsDeleting(false);
        }
    };

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
                    onPress={() => {
                        router.push("/myforms/" + id + "/form");
                    }}
                    className="flex-1 bg-emerald-600 py-3 rounded-lg active:bg-emerald-600"
                >
                    <Text className="text-white text-center font-semibold">
                        View
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        router.push("/myforms/" + id + "/edit");
                    }}
                    className="flex-1 bg-violet-500 py-3 rounded-lg active:bg-violet-600"
                >
                    <Text className="text-white text-center font-semibold">
                        Edit
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleDelete}
                    disabled={isDeleting}
                    className={`flex-1 py-3 rounded-lg ${
                        isDeleting
                            ? "bg-red-300"
                            : "bg-red-500 active:bg-red-600"
                    }`}
                >
                    <Text className="text-white text-center font-semibold">
                        {isDeleting ? "Deleting..." : "Delete"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
