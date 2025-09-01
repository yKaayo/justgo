import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity, View, TextInput } from "react-native";

// Layout
import MostVisited from "@/layout/MostVisited";
import Events from "@/layout/Events";
import NearMe from "@/layout/NearMe";

// Icon
import LogoIcon from "@/assets/icons/Logo";
import SearchIcon from "@/assets/icons/Search";

const Home = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="absolute top-0 left-0 right-0 z-10">
        <View className="px-3 py-2">
          <LogoIcon width={50} height={32} color="#000" />
        </View>
      </SafeAreaView>

      <SafeAreaView className="flex-1">
        <View className="relative justify-center mx-3 mt-10 mb-2">
          <TextInput
            className="border-b border-zinc-700 pr-10"
            placeholder="Qual lugar você está procurando?"
            returnKeyType="search"
            enablesReturnKeyAutomatically={true}
          />

          <TouchableOpacity className="absolute right-2 bg-brown p-2 rounded-full">
            <SearchIcon size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1">
          <MostVisited />
          <NearMe />
          <Events />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;
