import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { insertField } from "../../scripts/app";

export default function ManageFields({ id }) {
    const [open, setOpen] = useState(false);
    const [fieldName, setFieldName] = useState("");
    const [isRequired, setIsRequired] = useState(false);
    const [isNumeric, setIsNumeric] = useState(false);
    const [selectedType, setSelectedType] = useState("");
    const [dropdownOptions, setDropdownOptions] = useState("");

    const handleTypeChange = (value) => {
        setSelectedType(value);
        if (value !== "dropdown") {
            setDropdownOptions("");
        }
    };
    const addField = async () => {
        const payload = {
            name: fieldName,
            field_type: selectedType,
            required: isRequired,
            is_num: isNumeric, // TODO fix below two
            order_index: 1,
            username: "testuser",
        };
        if (dropdownOptions.trim() !== "") {
            // payload.options = dropdownOptions
            //     .split(",")
            //     .map((opt) => opt.trim())
            //     .filter((opt) => opt !== "");
        }
        await insertField(id, payload);
        router.refresh();
    };

    return (
        <View className="bg-white mb-5 rounded-xl">
            <Text className=" py-2 text-center text-xl font-bold rounded-t-xl">
                Manage Fields
            </Text>

            {open && (
                <View className="bg-white rounded-t-3xl p-6">
                    <View className="flex-row items-center justify-between mb-6">
                        <Text className="text-lg font-semibold text-gray-900">
                            Add a Field
                        </Text>
                        <Pressable
                            onPress={() => setOpen(false)}
                            className="bg-red-200 rounded-full p-2 active:bg-gray-200"
                        >
                            <Text className="text-gray-600 font-medium px-2">
                                ✕
                            </Text>
                        </Pressable>
                    </View>
                    <TextInput
                        placeholder="Field Name"
                        value={fieldName}
                        onChangeText={setFieldName}
                        className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-base"
                        placeholderTextColor="#9ca3af"
                    />

                    <View className="border border-gray-300 rounded-lg overflow-hidden mb-6">
                        <Picker
                            selectedValue={selectedType}
                            onValueChange={handleTypeChange}
                        >
                            <Picker.Item label="Select Field Type" value="" />
                            <Picker.Item label="Text" value="text" />
                            <Picker.Item label="Multiline" value="multiline" />
                            <Picker.Item label="Dropdown" value="dropdown" />
                            <Picker.Item label="Location" value="location" />
                            <Picker.Item label="Image" value="image" />
                        </Picker>
                    </View>

                    {selectedType === "dropdown" && (
                        <View className="mb-6">
                            <Text className="text-base font-medium text-gray-700 mb-2">
                                Dropdown Options
                            </Text>
                            <TextInput
                                placeholder="Option 1, Option 2, Option 3,.."
                                value={dropdownOptions}
                                onChangeText={setDropdownOptions}
                                className="border border-gray-300 rounded-lg px-4 py-3 text-base"
                                multiline
                            />
                            <Text className="text-sm text-gray-500 mt-1">
                                Separate each option with a comma
                            </Text>
                        </View>
                    )}

                    <View className="mb-6">
                        <View className="flex-row items-center justify-between py-3 border-b border-gray-200">
                            <Text className="text-base text-gray-700">
                                Required
                            </Text>
                            <Switch
                                value={isRequired}
                                onValueChange={setIsRequired}
                            />
                        </View>
                        <View className="flex-row items-center justify-between py-3">
                            <Text className="text-base text-gray-700">
                                Numeric
                            </Text>
                            <Switch
                                value={isNumeric}
                                onValueChange={setIsNumeric}
                            />
                        </View>
                    </View>

                    <Pressable className="bg-blue-600 rounded-lg py-3 active:bg-blue-700">
                        <Text className="text-white text-center font-semibold text-base">
                            Save Field
                        </Text>
                    </Pressable>
                </View>
            )}
            {!open && (
                <Pressable onPress={() => setOpen(true)}>
                    <Text className="text-lg font-semibold text-blue-500 p-6">
                        Add a Field
                    </Text>
                </Pressable>
            )}
        </View>
    );
}
