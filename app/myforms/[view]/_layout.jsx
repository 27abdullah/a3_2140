import { Ionicons } from "@expo/vector-icons";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../../../global.css";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
    anchor: "(tabs)",
};

export default function Layout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <Tabs screenOptions={{ tabBarActiveTintColor: "#10B981" }}>
                <Tabs.Screen
                    name="form"
                    options={{
                        title: "Form",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="records"
                    options={{
                        title: "Records",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="list" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="map"
                    options={{
                        title: "Map",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="map" size={size} color={color} />
                        ),
                    }}
                />
            </Tabs>

            <StatusBar style="auto" />
        </ThemeProvider>
    );
}
