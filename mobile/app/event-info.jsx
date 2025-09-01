import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

// Contraints
import events from "@/constants/events";

// Icons
import ArrowReply from "@/assets/icons/ArrowReply";
import Ticket from "@/assets/icons/Ticket";
import Wifi from "@/assets/icons/Wifi";
import Pet from "@/assets/icons/Pet";
import Camera from "@/assets/icons/Camera";
import HeartSolidIcon from "@/assets/icons/HeartSolid";
import HeartIcon from "@/assets/icons/HeartOutline";

// Util
import { sendToMaps, searchPlace } from "../utils/GoogleMaps";

// Components
import { Accordion } from "tamagui";
import BackBtn from "../components/BackBtn";
import AccordionItem from "../components/AccordionItem";
import Divisor from "../components/Divisor";
import Carousel from "../components/EventCarousel";
import CardSearch from "../components/CardSearch";
import Information from "../layout/Information";

const EventCardInfo = ({ free = false }) => {
  const [searchText, setSearchText] = useState("");
  const [recommended, setRecommended] = useState(false);

  const { item } = useLocalSearchParams();
  const itemData = JSON.parse(item);

  const iconMap = {
    ticket: Ticket,
    wifi: Wifi,
    pet: Pet,
  };

  const carouselData = events.slice(1, 4).map((item) => ({
    ...item,
    onPress: () =>
      router.push({
        pathname: "/event-info",
        params: { item: JSON.stringify(item) },
      }),
  }));

  const handleSearch = () => {
    if (searchText.trim()) {
      searchPlace(itemData.address, searchText.trim());
      setSearchText("");
    }
  };

  return (
    <SafeAreaProvider>
      <View className="flex-1">
        <ScrollView>
          {/* Banner */}
          <View className="relative">
            <Image
              className="w-full h-[250px]"
              resizeMode="cover"
              source={{ uri: itemData.img }}
            />

            <LinearGradient
              colors={[
                "rgba(0,0,0,0.6)",
                "transparent",
                "transparent",
                "rgba(0,0,0,0.2)",
                "rgba(0,0,0,0.4)",
                "rgba(0,0,0,0.6)",
              ]}
              className="absolute flex-1 w-full inset-0"
            />

            <Text className="text-white font-bold text-3xl absolute bottom-3 px-3">
              {itemData.title}
            </Text>

            <SafeAreaView className="absolute p-5 w-full flex-row justify-between">
              <BackBtn pathname="/home" />

              <TouchableOpacity
                className="bg-gray-300 p-1 rounded-full"
                onPress={() => setRecommended(!recommended)}
              >
                {recommended ? (
                  <HeartSolidIcon color="#E17A65" />
                ) : (
                  <HeartIcon />
                )}
              </TouchableOpacity>
            </SafeAreaView>

            <TouchableOpacity
              onPress={() => sendToMaps(itemData.address)}
              className="absolute z-[1] -bottom-6 right-5 flex flex-row px-3 py-1 gap-2 items-center bg-white rounded-full shadow"
            >
              <ArrowReply size={20} />
              <Text className="text-lg">Como chegar?</Text>
            </TouchableOpacity>
          </View>

          <SafeAreaView className="pb-[40px]">
            {/* Characteristices */}
            <View className="flex-row gap-5 mx-3 mb-6">
              {itemData.characteristices.map((characteristic, i) => {
                const IconComponent = iconMap[characteristic.icon];

                return (
                  <View key={i} className="flex-row items-center gap-1.5">
                    {<IconComponent size={22} color="#E17A65" />}
                    <Text className="text-zinc-700">{characteristic.name}</Text>
                  </View>
                );
              })}
            </View>

            {/* Search */}
            <CardSearch
              handleSearch={handleSearch}
              searchText={searchText}
              setSearchText={setSearchText}
            />

            {/* FastPass */}
            {!free && itemData.price && (
              <>
                <View className="mb-7 mx-3 gap-2">
                  {itemData.price.map((price, i) => (
                    <View
                      key={i}
                      className="flex-row items-center gap-2 mx-auto"
                    >
                      <Text>
                        Inteira{" "}
                        <Text className="font-semibold">{price.full}</Text>
                      </Text>
                      <View className="bg-brown rounded-full size-1.5"></View>
                      <Text>
                        Meia <Text className="font-semibold">{price.half}</Text>
                      </Text>
                    </View>
                  ))}

                  <TouchableOpacity className="bg-brown  items-center py-1 rounded-full px-3">
                    <Text className="text-white font-bold text-lg">
                      FastPass
                    </Text>
                  </TouchableOpacity>

                  <Text className="mx-auto text-darkGray">
                    Compre em poucos passos
                  </Text>
                </View>

                <Divisor />
              </>
            )}

            <Accordion
              marginVertical={22}
              overflow="hidden"
              width="100%"
              type="multiple"
            >
              {/* Description */}
              {itemData.content && (
                <AccordionItem
                  title="DESCRIÇÃO"
                  content={<Text className="mb-7">{itemData.content}</Text>}
                />
              )}
            </Accordion>

            <Divisor />

            {/* Information */}
            <Information item={itemData} />

            {/* <CommentsCarousel comments={itemData.comments} /> */}

            {/* Comments */}
            {/* <Accordion
              overflow="hidden"
              width="100%"
              type="multiple"
              marginVertical={22}
              gap={10}
            >
              {itemData.comments && (
                <AccordionItem
                  title="COMENTÁRIOS"
                  content={itemData.comments.map((comment, i) => (
                    <View key={i} className="gap-1.5 mb-7">
                      <View className="w-[35%] h-[.5px] bg-zinc-500 rounded-full"></View>

                      <View className="flex-row items-center gap-2">
                        <Image
                          source={comment.photo}
                          className="rounded-full"
                        />
                        <Text className="font-semibold">{comment.name}</Text>
                      </View>

                      <Text className="font-bold text-lg">{comment.title}</Text>
                      <Text className="text-sm">{comment.comment}</Text>
                    </View>
                  ))}
                />
              )}
            </Accordion> */}

            <Divisor />

            {/* Suggestion */}
            <View className="mx-3 gap-1 mt-7">
              <Text className="mx-auto font-semibold text-2xl">
                Sugestões para Você
              </Text>
              <Text className="mx-auto text-zinc-700 mb-5">
                Veja São Paulo como nunca viu antes!
              </Text>
              <Carousel data={carouselData} cardWidth={185} />
            </View>
          </SafeAreaView>
        </ScrollView>

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/camera",
            })
          }
          className="absolute flex justify-center items-center bg-brown rounded-full bottom-8 right-3 z-[1] p-2 shadow"
        >
          <Camera size={32} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

export default EventCardInfo;
