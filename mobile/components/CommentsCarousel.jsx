import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const CommentsCarousel = ({ comments = [] }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  // Cria array infinito duplicando dados
  useEffect(() => {
    if (comments.length === 0) return;

    const infiniteData = [...comments, ...comments, ...comments];
    setData(infiniteData);

    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: comments.length,
        animated: false,
      });
      setCurrentIndex(comments.length);
    }, 100);
  }, [comments]);

  // Auto-play
  useEffect(() => {
    if (isPaused || data.length === 0) return;

    const interval = setInterval(() => {
      if (flatListRef.current) {
        const nextIndex = currentIndex + 1;

        // Se chegou no final, volta para o início suavemente
        if (nextIndex >= data.length - comments.length) {
          flatListRef.current.scrollToIndex({
            index: comments.length,
            animated: false,
          });
          setCurrentIndex(comments.length);
        } else {
          flatListRef.current.scrollToIndex({
            index: nextIndex,
            animated: true,
          });
          setCurrentIndex(nextIndex);
        }
      }
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [currentIndex, data.length, isPaused, comments.length]);

  const renderComment = ({ item, index }) => (
    <View
      className="rounded-md p-5"
      style={{
        width: SCREEN_WIDTH - 40,
        marginHorizontal: 20,
      }}
      activeOpacity={0.9}
    >
      <View className="justify-center items-center flex-row w-full mx-auto">
        <Image
          source={item.photo}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 15,
          }}
          resizeMode="cover"
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "#8B4513",
              marginTop: 2,
            }}
          >
            {item.title}
          </Text>
        </View>
      </View>
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

  // Calcula qual indicador deve estar ativo (baseado nos dados originais)
  const getIndicatorIndex = (index) => {
    return index % comments.length;
  };

  if (comments.length === 0) {
    return (
      <View style={{ padding: 20, alignItems: "center" }}>
        <Text style={{ color: "#999" }}>Nenhum comentário disponível</Text>
      </View>
    );
  }

  return (
    <View className="my-5">
      {/* Header */}
      <View className="items-center mb-2">
        <Text className="text-lg font-semibold text-zinc-700">
          Últimos Comentários
        </Text>
      </View>

      {/* Carousel */}
      <View>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderComment}
          keyExtractor={(item, index) => `${item.name}-${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={SCREEN_WIDTH}
          decelerationRate="fast"
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          getItemLayout={(data, index) => ({
            length: SCREEN_WIDTH,
            offset: SCREEN_WIDTH * index,
            index,
          })}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsPaused(false), 3000);
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 15,
          gap: 8,
        }}
      >
        {comments.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              const targetIndex = index + comments.length;
              flatListRef.current?.scrollToIndex({
                index: targetIndex,
                animated: true,
              });
              setCurrentIndex(targetIndex);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 3000);
            }}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor:
                getIndicatorIndex(currentIndex) === index
                  ? "#E17A65"
                  : "#D3D3D3",
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default CommentsCarousel;
