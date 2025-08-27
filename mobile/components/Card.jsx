import { Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Card = ({ item, onPress, recommended = false }) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className="flex-1 h-full relative w-full"
      >
        <Image source={item.img} className="w-full h-full" resizeMode="cover" />

        {recommended && (
          <View className="absolute top-3 left-3 bg-brown px-3 py-1 rounded-full">
            <Text className="text-white font-bold text-xs">Recomendado</Text>
          </View>
        )}

        <LinearGradient
          className="absolute bottom-0 px-2 w-full pb-2"
          colors={["transparent", "rgba(0,0,0,0.9)"]}
        >
          <Text className="text-white">{item.name}</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View className="">
        <Text className="text-black">{item.recomendations}</Text>
      </View>
    </>
  );
};

export default Card;
