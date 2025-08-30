import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";

// Layout
import MostVisited from "@/layout/MostVisited";

// Icon
import LogoIcon from "@/assets/icons/Logo";

const Home = () => {
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
      </View>
    </SafeAreaProvider>
  );
};

export default Home;