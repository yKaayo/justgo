import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

// Component
import BackBtn from "../components/BackBtn";

// Icons
import ArrowReply from "@/assets/icons/ArrowReply";
import Ticket from "@/assets/icons/Ticket";
import Wifi from "@/assets/icons/Wifi";
import Pet from "@/assets/icons/Pet";
import Camera from "@/assets/icons/Camera";

// Util
import { sendToMaps } from "../utils/GoogleMaps";

const CardInfo = () => {
  const { item } = useLocalSearchParams();
  const itemData = JSON.parse(item);

  const iconMap = {
    ticket: Ticket,
    wifi: Wifi,
    pet: Pet,
  };

  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <ScrollView>
          <View className="relative">
            <Image
              className="w-full h-[250px]"
              resizeMode="cover"
              source={itemData.img}
            />

            <LinearGradient
              colors={[
                "rgba(0,0,0,0.6)",
                "transparent",
                "transparent",
                "rgba(0,0,0,0.6)",
              ]}
              className="absolute flex-1 w-full inset-0"
            />

            <Text className="text-white font-bold text-2xl absolute bottom-3 px-3">
              {itemData.name}
            </Text>

            <SafeAreaView className="absolute top-3 left-3">
              <BackBtn />
            </SafeAreaView>

            <TouchableOpacity
              onPress={() => sendToMaps(itemData.address)}
              className="absolute z-[1] -bottom-4 right-5 flex flex-row px-3 py-1 gap-3 items-center bg-white rounded-full shadow"
            >
              <ArrowReply size={22} />
              <Text className="text-lg">Como chegar?</Text>
            </TouchableOpacity>
          </View>

          <SafeAreaView>
            <View>
              <View className="flex-row gap-5 mx-3 mb-20">
                {itemData.characteristices.map((characteristic, i) => {
                  const IconComponent = iconMap[characteristic.icon];

                  return (
                    <View key={i} className="flex-row items-center gap-1.5">
                      {<IconComponent size={22} color="#E17A65" />}
                      <Text className="text-black">{characteristic.name}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/camera",
            })
          }
          className="absolute flex justify-center items-center bg-brown rounded-full bottom-36 right-3 z-[1] p-2 shadow"
        >
          <Camera size={32} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

export default CardInfo;
