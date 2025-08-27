import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import { router } from "expo-router";

// Contraints
import architectures from "@/constants/architectures";

// Components
import Card from "@/components/Card";

const MostVisited = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const carouselData = architectures.slice(1, 4);

  const CARD_WIDTH = 185;
  const CARD_MARGIN = 0;
  const SNAP_INTERVAL = CARD_WIDTH + CARD_MARGIN;

  const renderCarouselItem = ({ item, index }) => (
    <View className="mr-3" style={{ width: CARD_WIDTH }}>
      <Card
        item={item}
        onPress={() => console.log(`Card ${index + 2}`)}
        width={CARD_WIDTH}
      />
    </View>
  );

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  }).current;

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  return (
    <SafeAreaView>
      <View className="flex-1 py-5 px-3">
        <View className="mx-auto mb-3">
          <Text className="text-3xl font-bold">LUGARES MAIS</Text>
          <Text className="text-3xl text-brown font-bold">VISITADOS</Text>
        </View>

        <View className="gap-3">
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
            />
          </View>

          <FlatList
            ref={flatListRef}
            data={carouselData}
            renderItem={renderCarouselItem}
            keyExtractor={(item, i) => i.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={SNAP_INTERVAL}
            decelerationRate="fast"
            snapToAlignment="start"
            className="h-[150px]"
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />

          <View className="flex-row justify-center mt-3 gap-2">
            {carouselData.map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  flatListRef.current?.scrollToIndex({
                    index,
                    animated: true,
                  });
                }}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-brown" : "bg-gray-300"
                }`}
              />
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MostVisited;
