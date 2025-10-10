import { Text, View } from "react-native";
import {
    DropdownField,
    ImageField,
    LocationField,
    MultilineField,
    TextField,
} from "./inputs.jsx";

export default function Field({
    field_type,
    form_id,
    id,
    is_num,
    name,
    options,
    order_index,
    required,
    username,
    setValues,
    values,
}) {
    const value = values[order_index - 1] || "";
    const setValue = (v) =>
        setValues((vs) => {
            const newValues = [...vs];
            newValues[order_index - 1] = v;
            return newValues;
        });

    const fieldDisplay = () => {
        switch (field_type) {
            case "text":
                return (
                    <TextField
                        name={name}
                        setValue={setValue}
                        is_num={is_num}
                        value={value}
                    />
                );
            case "multiline":
                return (
                    <MultilineField
                        name={name}
                        setValue={setValue}
                        value={value}
                        is_num={is_num}
                    />
                );
            case "dropdown":
                return (
                    <DropdownField
                        options={options["nameofdropdown"]}
                        name={name}
                        value={value}
                        setValue={setValue}
                    />
                );
            case "location":
                return (
                    <LocationField
                        name={name}
                        setValue={setValue}
                        value={value}
                    />
                );
            case "image":
                return (
                    <ImageField name={name} setValue={setValue} value={value} />
                );
            default:
                return <Text>Unknown field type</Text>;
        }
    };

    return (
        <View>
            <Text className="text-gray-700 font-semibold">{name}</Text>
            {fieldDisplay()}
        </View>
    );
}
