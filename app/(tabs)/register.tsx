import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// Images
import images from "@/constants/images";

// Icons
import GoogleIcon from "@/assets/icons/GoogleIcon";
import LogoIcon from "@/assets/icons/Logo";

const Register = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView contentContainerClassName="flex-1 p-5 flex gap-5">
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
              <LogoIcon width={"90%"} height={"100%"} color={"#003367"} />
            </View>
          </View>

          <View className="items-center gap-3">
            <Text className="font-raleway text-xl text-gray">Bem Vindo!</Text>

            <View>
              <Text className="text-center font-raleway text-2xl text-gray">
                Pronto para descobrir as obras
              </Text>
              <Text className="-mt-1 text-center font-raleway text-2xl font-bold text-primary">
                mais incríveis de São Paulo?
              </Text>
            </View>

            <TouchableOpacity className="mt-2 w-full flex-row items-center justify-center gap-3 rounded-lg border border-zinc-100 bg-white px-5 py-2 text-black shadow shadow-zinc-400">
              <GoogleIcon width={"26"} height={"100%"} />
              <Text className="font-lexend text-lg text-gray">
                Entrar com Google
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Register;
