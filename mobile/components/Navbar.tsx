import { View, Pressable } from "react-native";
import { Link, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// Icons
import HomeIcon from "@/assets/icons/Home";
import FavoriteIcon from "@/assets/icons/Favorite";

const Navbar = () => {
  const pathname = usePathname(); // para saber a rota atual

  return (
    <SafeAreaView
      edges={["bottom"]}
      className="absolute bottom-0 left-0 right-0 bg-brown rounded-t-3xl w-full"
    >
      <View className="flex-row justify-around items-center h-14">
        <Link href="/" asChild>
          <Pressable>
            <HomeIcon color={pathname === "/" ? "#fff" : "#aaa"} />
          </Pressable>
        </Link>

        <Link href="/register" asChild>
          <Pressable>
            <FavoriteIcon color={pathname === "/register" ? "#fff" : "#aaa"} />
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
