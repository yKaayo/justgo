import { Text, View } from "react-native";
import { router } from "expo-router";

// Contraints
import events from "@/constants/events";

// Components
import EventCarousel from "@/components/EventCarousel";

const Events = () => {
  const carouselData = events.slice(1, 4).map((item) => ({
    ...item,
    onPress: () =>
      router.push({
        pathname: "/event-info",
        params: { item: JSON.stringify(item) },
      }),
  }));

  return (
    <View className="flex-1 py-5 px-3">
      <View className="mx-auto mb-3">
        <Text className="text-3xl font-bold">EVENTOS</Text>
        <Text className="text-3xl text-brown font-bold">DE SÃO PAULO</Text>
      </View>

      <View className="w-[80%] mx-auto mb-6">
        <Text className="text-center text-balance text-zinc-700">
          Explore o mundo da arquitetura através de eventos
        </Text>
      </View>

      <View>
        <EventCarousel data={carouselData} cardWidth={250} />
      </View>
    </View>
  );
};

export default Events;
