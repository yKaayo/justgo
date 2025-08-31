import { View, FlatList, TouchableOpacity } from "react-native";
import { useRef, useState } from "react";
import Card from "@/components/EventCard";

const Carousel = ({ data, cardWidth = 185, cardMargin = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const SNAP_INTERVAL = cardWidth + cardMargin;

  const renderCarouselItem = ({ item }) => (
    <View className="mr-3" style={{ width: cardWidth }}>
      <Card
        item={item}
        onPress={item.onPress}
        width={cardWidth}
        clean
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
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderCarouselItem}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        snapToAlignment="start"
        className="h-[150px]"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />

      {/* Paginação */}
      <View className="flex-row justify-center mt-3 gap-2">
        {data.map((_, index) => (
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
  );
};

export default Carousel;
