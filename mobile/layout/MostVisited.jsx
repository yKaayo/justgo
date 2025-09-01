import { Text, View } from "react-native";
import { router } from "expo-router";

// Contraints
import architectures from "@/constants/architectures";

// Components
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";

const MostVisited = () => {
  const carouselData = architectures.slice(1, 4).map((item) => ({
    ...item,
    onPress: () =>
      router.push({
        pathname: "/card-info",
        params: { item: JSON.stringify(item) },
      }),
  }));

  return (
    <View className="flex-1 py-5 px-3">
      <View className="mx-auto mb-3">
        <Text className="text-3xl font-bold">LUGARES MAIS</Text>
        <Text className="text-3xl text-brown font-bold">VISITADOS</Text>
      </View>

      <View className="w-[80%] mx-auto mb-6">
        <Text className="text-center text-balance text-zinc-700">
          As arquiteturas mais populares de São Paulo
        </Text>
      </View>

      <View className="gap-3">
        {/* Main Card */}
        <View className="h-[175px]">
          <Card
            item={architectures[0]}
            onPress={() =>
              router.push({
                pathname: "/card-info",
                params: {
                  item: JSON.stringify(architectures[0]),
                },
              })
            }
            recommended
            recomendations
            closeFromYou
          />
        </View>

        {/* Carousel */}
        <Carousel data={carouselData} cardWidth={185} />
      </View>
    </View>
  );
};

export default MostVisited;
