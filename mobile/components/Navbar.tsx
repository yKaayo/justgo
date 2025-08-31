import { View, Pressable } from "react-native";
import { Link, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import HomeIcon from "@/assets/icons/Home";
import FavoriteIcon from "@/assets/icons/Favorite";
import EventIcon from "@/assets/icons/Event";

const Navbar = () => {
  const pathname = usePathname(); // para saber a rota atual

  return (
    <View className="absolute bottom-0 left-0 right-0">
      <SafeAreaView>
        <View className="flex-row justify-around items-center h-14 bg-brown w-[90%] mx-auto rounded-3xl mb-3 shadow-lg">
          <Link href="/home" asChild>
            <Pressable>
              <HomeIcon color="#fff" />
            </Pressable>
          </Link>

          <Link href="/" asChild>
            <Pressable>
              <FavoriteIcon color="#fff" />
            </Pressable>
          </Link>

          <Link href="/events" asChild>
            <Pressable>
              <EventIcon color="#fff" />
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Navbar;
