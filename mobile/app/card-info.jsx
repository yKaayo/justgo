import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const CardInfo = () => {
  const { item } = useLocalSearchParams();
  const itemData = JSON.parse(item);

  return (
    <SafeAreaProvider>
      <View className="relative">
        <Image className="w-full h-[250px]" resizeMode="cover" source={itemData.img} />
        <Text className="text-white absolute bottom-0 px-3">{itemData.name}</Text>
      </View>

      <SafeAreaView>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CardInfo;
