import { Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Icons
import AddressIcon from "@/assets/icons/Address.js";
import TimeIcon from "@/assets/icons/Time.js";

const EventCard = ({ item, onPress, clean }) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className="flex-1 h-full relative w-full shadow"
      >
        <Image
          source={{ uri: item.img }}
          className="w-full h-[180px]"
          resizeMode="cover"
        />

        <LinearGradient
          className="absolute bottom-0 px-2 w-full pb-2"
          colors={["transparent", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.9)"]}
        >
          <Text className="text-white font-semibold">{item.title}</Text>
        </LinearGradient>
      </TouchableOpacity>

      {!clean && (
        <View className="flex-row items-center gap-x-3 gap-y-1 flex-wrap">
          <View className="flex-row items-center gap-1 mt-1">
            <AddressIcon size={18} color="#E17A65" />
            <Text className="text-black text-sm">{item.address}</Text>
          </View>

          <View className="bg-brown rounded-full size-1.5"></View>

          <View className="flex-row items-center gap-1.5 mt-1">
            <TimeIcon size={18} color="#E17A65" />
            <Text className="text-black text-sm">{item.time}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default EventCard;
