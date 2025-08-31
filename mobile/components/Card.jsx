import { Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Icon
import HeartIcon from "@/assets/icons/HeartSolid";

const Card = ({
  item,
  onPress,
  recommended = false,
  recomendations = false,
  closeFromYou = false,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className="flex-1 h-full relative w-full shadow"
      >
        <Image source={item.img} className="w-full h-full" resizeMode="cover" />

        {recommended && (
          <View className="absolute top-3 left-3 bg-brown px-3 py-1 rounded-full">
            <Text className="text-white font-bold text-xs">Recomendado</Text>
          </View>
        )}

        <LinearGradient
          className="absolute bottom-0 px-2 w-full pb-2"
          colors={["transparent", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.9)"]}
        >
          <Text className="text-white font-semibold">{item.name}</Text>

          <View className="flex-row items-center gap-1 mt-1 ">
            {recomendations && (
              <>
                <HeartIcon size={12} color="#E17A65" />
                <Text className="text-white me-2 text-sm">
                  {item.recomendations}
                </Text>
              </>
            )}

            {closeFromYou && (
              <View className="gap-2 flex-row items-center">
                <View className="bg-brown rounded-full size-1.5"></View>
                <Text className="text-white text-sm">Próximo de você</Text>
              </View>
            )}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

export default Card;
