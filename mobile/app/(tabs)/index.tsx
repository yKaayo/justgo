import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import Intro from "@/components/Intro";

// Layout
import MostVisited from "@/layout/MostVisited";

// Icon
import LogoIcon from "@/assets/icons/Logo";

const Home = () => {
  const [showIntro, setShowIntro] = useState<boolean | null>(null); // null até carregar do storage

  useEffect(() => {
    const checkIntro = async () => {
      const hasSeen = await AsyncStorage.getItem("hasSeenIntro");
      setShowIntro(!hasSeen); // se não tem no storage → mostra
    };
    checkIntro();
  }, []);

  const handleIntroComplete = async () => {
    await AsyncStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
  };

  if (showIntro === null) return null;

  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <SafeAreaView className="flex-1">
          <ScrollView
            className="flex-1"
            contentContainerStyle={{
              paddingBottom: 80,
              flexGrow: 1,
              minHeight: "100%",
            }}
          >
            <View className="absolute left-3 top-3 z-10 items-center">
              <LogoIcon color="#000" />
            </View>

            <MostVisited />
          </ScrollView>
        </SafeAreaView>

        {showIntro && <Intro onAnimationComplete={handleIntroComplete} />}
      </View>
    </SafeAreaProvider>
  );
};

export default Home;
