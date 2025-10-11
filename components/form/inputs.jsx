import { Picker } from "@react-native-picker/picker";
import * as Location from "expo-location";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

function TextField({ is_num, setValue, value }) {
    return (
        <View>
            <TextInput
                className="border border-gray-300 rounded-md p-2 mt-2"
                placeholder={is_num ? "Enter number" : "Enter text"}
                keyboardType={is_num ? "numeric" : "default"}
                onChangeText={setValue}
                value={value}
            />
        </View>
    );
}

function MultilineField({ is_num, setValue, value }) {
    return (
        <View>
            <TextInput
                className="border border-gray-300 rounded-md p-2 mt-2"
                placeholder="Enter multiline text"
                keyboardType={is_num ? "numeric" : "default"}
                onChangeText={setValue}
                multiline={true}
                numberOfLines={4}
                value={value}
            />
        </View>
    );
}

function DropdownField({ options, setValue, value }) {
    return (
        <View>
            <View className="border border-gray-300 rounded-md p-2 mt-2">
                <Picker
                    className="borderrounded-md mt-2"
                    onValueChange={(itemValue) => setValue(itemValue)}
                    selectedValue={value}
                >
                    <Picker.Item label="Select an option" value="" />
                    {options.map((opt, index) => (
                        <Picker.Item key={index} label={opt} value={opt} />
                    ))}
                </Picker>
            </View>
        </View>
    );
}

function LocationField({ setValue, value }) {
    const [errorMsg, setErrorMsg] = useState(null);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            return;
        }

        let loc = await Location.getCurrentPositionAsync({});
        setValue([loc.coords.latitude, loc.coords.longitude]);
    };

    return (
        <View>
            <Pressable
                className="bg-violet-500 rounded-md p-3 mt-2 active:opacity-70"
                onPress={getLocation}
                disabled={value !== ""}
            >
                <Text className="text-white text-md text-center">
                    {value !== ""
                        ? `Lat: ${value[0]}, Lon: ${value[1]}`
                        : "Get Location"}
                </Text>
            </Pressable>
            {errorMsg ? <Text className="text-red-500">{errorMsg}</Text> : null}
        </View>
    );
}

export { DropdownField, LocationField, MultilineField, TextField };
