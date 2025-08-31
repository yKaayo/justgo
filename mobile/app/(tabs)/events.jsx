import { Text, View, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";

// Contraints
import events from "@/constants/events";

// Components
import EventCard from "@/components/EventCard";

const Events = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 ">
        <ScrollView>
          <View className="flex-1 py-5 px-3 pb-20">
            <View className="mx-auto mb-3">
              <Text className="text-3xl font-bold">EVENTOS</Text>
              <Text className="text-3xl text-brown font-bold">
                DE SÃO PAULO
              </Text>
            </View>

            <View className="w-[80%] mx-auto mb-10">
              <Text className="text-center text-balance text-zinc-700">
                TODOS EVENTOS DA CIDADE PARA VOCÊ SE AVENTURAR
              </Text>
            </View>

            <View className="gap-7">
              {events.map((event, i) => (
                <View key={i} className="">
                  <EventCard
                    item={event}
                    onPress={() =>
                      router.push({
                        pathname: "/event-info",
                        params: {
                          item: JSON.stringify(event),
                        },
                      })
                    }
                    free
                  />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Events;
