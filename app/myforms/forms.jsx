import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";
export default function View() {
    const router = useRouter();
    const onPress = (link) => {
        router.push("/myforms/" + link);
    };

    return (
        <>
            <Pressable onPress={() => onPress("add")}>
                <Text>Add</Text>
            </Pressable>
            <Pressable onPress={() => onPress("edit")}>
                <Text>Edit</Text>
            </Pressable>
            <Pressable onPress={() => onPress("/view")}>
                <Text>View</Text>
            </Pressable>
        </>
    );
}
