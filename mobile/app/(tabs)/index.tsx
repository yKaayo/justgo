import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import { useState } from "react";

// Components
import Intro from "@/components/Intro";

// Layout
import MostVisited from "@/layout/MostVisited";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    setShowContent(true);
  };

  return (
    <SafeAreaProvider>
      <View className="flex-1">
        {/* Conteúdo principal */}
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingBottom: 80,
            flexGrow: 1,
            minHeight: "100%",
          }}
        >
          <MostVisited />
          {/* <Navigation /> */}
          {/* <Register /> */}
          {/* <Camera /> */}
        </ScrollView>

        {/* Intro animado sobreposto */}
        <Intro onAnimationComplete={handleIntroComplete} />
      </View>
    </SafeAreaProvider>
  );
};

export default Home;
