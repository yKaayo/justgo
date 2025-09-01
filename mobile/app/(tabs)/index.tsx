import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";

// Images
import images from "@/constants/images";

// Icons
import GoogleIcon from "@/assets/icons/GoogleIcon";
import LogoIcon from "@/assets/icons/Logo";
import AppleIcon from "@/assets/icons/Apple";

const Register = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerClassName="bg-white"
      contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }}
    >
      <SafeAreaView className="flex-1 px-5 justify-between gap-5">
        <View className="flex-1 flex-row justify-between gap-3">
          <View className="flex-1 gap-3 opacity-60">
            <Image
              source={images.img1}
              className="w-full flex-1"
              resizeMode="cover"
            />
            <Image
              source={images.img2}
              className="w-full flex-grow"
              resizeMode="cover"
            />
            <Image
              source={images.img3}
              className="w-full flex-grow"
              resizeMode="cover"
            />
          </View>

          <View className="flex-1 gap-3 opacity-60">
            <Image
              source={images.img2}
              className="w-full flex-1"
              resizeMode="cover"
            />
            <Image
              source={images.img3}
              className="w-full flex-1"
              resizeMode="cover"
            />
            <Image
              source={images.img1}
              className="w-full flex-1"
              resizeMode="cover"
            />
          </View>

          <View className="flex-1 gap-3 opacity-60">
            <Image
              source={images.img3}
              className="w-full flex-grow"
              resizeMode="cover"
            />
            <Image
              source={images.img1}
              className="w-full flex-grow"
              resizeMode="cover"
            />
            <Image
              source={images.img2}
              className="w-full flex-1"
              resizeMode="cover"
            />
          </View>

          <View className="absolute -bottom-2 left-0 h-[15%] w-full">
            <LinearGradient
              colors={["#ffffff00", "#ffffff80", "#fff", "#fff"]}
              style={{ height: "100%", width: "100%" }}
            ></LinearGradient>
          </View>

          <View className="absolute h-full w-full items-center justify-center">
            <LogoIcon width={"60%"} height={"100%"} color={"#000"} />
          </View>
        </View>

        <View className="items-center gap-3">
          <View>
            <Text className="text-center text-2xl font-semibold text-gray w-full">
              Você está pronto para as arquiteturas
            </Text>
            <Text className="-mt-8 mb-2 text-center font-bold text-brown text-2xl text-primary">
              mais incríveis de São Paulo?
            </Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/home",
              })
            }
            className="mt-2 w-full flex-row items-center justify-center gap-3 rounded-lg border border-zinc-100 bg-white px-5 py-2 text-black shadow shadow-zinc-400"
          >
            <GoogleIcon width={"26"} height={"100%"} />
            <Text className="text-lg text-gray font-semibold">
              Entrar com Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/home",
              })
            }
            className="mt-2 w-full flex-row items-center justify-center gap-3 rounded-lg border border-zinc-100 bg-white px-5 py-2 text-black shadow shadow-zinc-400"
          >
            <AppleIcon size={26} />
            <Text className="text-lg text-gray font-semibold">
              Entrar com Apple
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;
