import { Image, View, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Intro = () => {
  return (
    <ScrollView className="flex-1">
      <Image
        source={require("@/assets/images/homeBg.png")}
        resizeMode="cover"
        style={{ width: "100%", minHeight: "100vh" }}
      />
      <SafeAreaView className="absolute inset-0">
        <View className="m-5">
          <Image
            className="size-20"
            resizeMode="contain"
            source={require("@/assets/images/logo.png")}
          />
        </View>
      </SafeAreaView>

      <SafeAreaView className="flex-1">
        <View>
          <Text>LUGARES MAIS VISITADOS</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Intro;
