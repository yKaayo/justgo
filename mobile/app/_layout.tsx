import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import "react-native-reanimated";
import "../styles/global.css";

// Components
import Navbar from "@/components/Navbar";

export default function RootLayout() {
  const [loaded] = useFonts({
    Antonio: require("../assets/fonts/Antonio-Regular.ttf"),
    Raleway: require("../assets/fonts/Raleway-Regular.ttf"),
  });

  const pathname = usePathname();
  const hideNavbar = pathname === "/camera";

  if (!loaded) {
    return null;
  }

  return (
    <>
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
    </>
  );
}