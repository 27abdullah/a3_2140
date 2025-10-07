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
            <Tabs>
                <Tabs.Screen
                    name="form"
                    options={{ title: "Form", headerShown: false }}
                />
                <Tabs.Screen
                    name="records"
                    options={{ title: "Records", headerShown: false }}
                />
                <Tabs.Screen
                    name="map"
                    options={{ title: "Map", headerShown: false }}
                />
            </Tabs>

            <StatusBar style="auto" />
        </ThemeProvider>
    );
}
