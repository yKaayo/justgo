import { Image, View, ScrollView, Text } from "react-native";
// import { Link } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// Components
import Camera from "@/components/Camera"

const Home = () => {
  return (
    <SafeAreaProvider>
      <ScrollView className="flex-1">
        <Image
          source={require("@/assets/images/homeBg.png")}
          resizeMode="cover"
          style={{ width: "100%", minHeight: "100vh" }}
        />
        <SafeAreaView className="absolute inset-0">
          <View className="m-5">
            <Image className="size-20" resizeMode="contain" source={require("@/assets/images/logo.png")} />
          </View>
        </SafeAreaView>

        <SafeAreaView className="flex-1">
          <View>
            <Camera />
            <Text>LUGARES MAIS VISITADOS</Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Home;

{
  /* <Text className="font-semibold text-red-600">Olá</Text>
      <Link href="/register">Criar uma conta</Link> */
}
