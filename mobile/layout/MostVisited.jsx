import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MostVisited = () => {
  return (
    <SafeAreaView>
      <View className="mx-auto flex-1">
        <Text className="text-3xl font-bold text-center">LUGARES MAIS</Text>
        <Text className="text-3xl text-brown font-bold text-center">
          VISITADOS
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MostVisited;
