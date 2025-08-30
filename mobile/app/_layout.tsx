import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-reanimated";
import "../styles/global.css";
import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "../tamagui.config";

// Components
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";

export default function RootLayout() {
  const [loaded] = useFonts({
    Antonio: require("../assets/fonts/Antonio-Regular.ttf"),
    Raleway: require("../assets/fonts/Raleway-Regular.ttf"),
  });

  const [showIntro, setShowIntro] = useState(true);

  const pathname = usePathname();
  const hideNavbar = pathname === "/camera";

  const handleIntroComplete = async () => {
    await AsyncStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  if (!loaded || showIntro === null) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="camera" />
      </Stack>

      {!hideNavbar && <Navbar />}

      {showIntro && <Intro onAnimationComplete={handleIntroComplete} />}
    </TamaguiProvider>
  );
}
