import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
    anchor: "(tabs)",
};

export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <Drawer
                screenOptions={{
                    headerShown: true,
                    headerTitle: "FormBase",
                    headerTitleAlign: "center",
                    drawerType: "front",
                }}
            >
                <Drawer.Screen
                    name="home"
                    options={{ title: "Home" }}
                ></Drawer.Screen>
                <Drawer.Screen
                    name="about"
                    options={{ title: "About" }}
                ></Drawer.Screen>
                <Drawer.Screen
                    name="myforms"
                    options={{ title: "My Forms" }}
                ></Drawer.Screen>
            </Drawer>

            <StatusBar style="auto" />
        </ThemeProvider>
    );
}
