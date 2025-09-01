import { View, Pressable, Text } from "react-native";
import { Link, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import HomeIcon from "@/assets/icons/Home";
import HeartIcon from "@/assets/icons/HeartOutline";
import EventIcon from "@/assets/icons/Event";

const Navbar = () => {
  const pathname = usePathname();

  const getColor = (route) => {
    return pathname === route ? "#E17A65" : "#000000";
  };

  return (
    <View>
      <SafeAreaView>
        <View className="flex-row justify-around items-center w-full mx-auto -mt-4">
          <Link href="/home" asChild>
            <Pressable className="items-center gap-1">
              <HomeIcon color={getColor("/home")} />
              <Text
                className="text-sm font-bold"
                style={{ color: getColor("/home") }}
              >
                Início
              </Text>
            </Pressable>
          </Link>

          <Link href="/favorites" asChild>
            <Pressable className="items-center gap-1">
              <HeartIcon color={getColor("/favorites")} />
              <Text
                className="text-sm font-bold"
                style={{ color: getColor("/favorites") }}
              >
                Recomendados
              </Text>
            </Pressable>
          </Link>

          <Link href="/events" asChild>
            <Pressable className="items-center gap-1">
              <EventIcon color={getColor("/events")} />
              <Text
                className="text-sm font-bold"
                style={{ color: getColor("/events") }}
              >
                Rotas
              </Text>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Navbar;
