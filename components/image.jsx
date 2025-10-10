import * as ImagePicker from "expo-image-picker";
import { Image, Pressable, Text, View } from "react-native";

export default function ImageField({ name, value, setValue }) {
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            setValue(result.assets[0].uri);
        }
    };

    return (
        <View>
            {value ? (
                <>
                    <Image
                        source={{ uri: value }}
                        className="w-full h-48 rounded-lg mb-2"
                        resizeMode="cover"
                    />
                    <Pressable
                        onPress={pickImage}
                        className="bg-violet-500 p-2 rounded-lg"
                    >
                        <Text className="text-white text-center">
                            Change Photo
                        </Text>
                    </Pressable>
                </>
            ) : (
                <Pressable
                    onPress={pickImage}
                    className="border-2 border-dashed border-gray-400 rounded-lg h-48 justify-center items-center"
                >
                    <Text className="text-gray-500">Tap to Add Photo</Text>
                </Pressable>
            )}
        </View>
    );
}
