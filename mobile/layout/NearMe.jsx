import { Text, View } from "react-native";
import { router } from "expo-router";

// Contraints
import architectures from "@/constants/architectures";

// Components
import Carousel from "@/components/Carousel";

const NearMe = () => {
  const carouselData = architectures.slice(0, 4).map((item) => ({
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
        <Text className="text-3xl font-bold">PONTOS TURÍSTICOS</Text>
        <Text className="text-3xl text-brown font-bold">PERTO DE MIM</Text>
      </View>

      <View className="w-[80%] mx-auto mb-6">
        <Text className="text-center text-balance text-zinc-700">
          As arquiteturas mais populares de São Paulo
        </Text>
      </View>

      {/* Carousel */}
      <Carousel data={carouselData} cardWidth={185} />
    </View>
  );
};

export default NearMe;
