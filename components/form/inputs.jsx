import { Picker } from "@react-native-picker/picker";
import { Text, TextInput, View } from "react-native";

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

function LocationField() {
    return <Text>TODO</Text>;
}

function ImageField() {
    return <Text>TODO</Text>;
}

export { DropdownField, ImageField, LocationField, MultilineField, TextField };
