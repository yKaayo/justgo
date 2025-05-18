import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Lexend: require("../assets/fonts/Lexend-SemiBold.ttf"),
    Raleway: require("../assets/fonts/Raleway-Regular.ttf"),
  });

  useEffect(() => {
    fontsLoaded && SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
