import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Images
import images from "@/constants/images";

const Register = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerClassName="flex-1 bg-white p-5 flex gap-5">
        <View className="flex-1 flex-row gap-3 justify-between">
          <View className="flex-1 gap-3">
            <Image
              source={images.img1}
              className="flex-1 w-full"
              resizeMode="cover"
            />
            <Image
              source={images.img2}
              className="flex-1 w-full"
              resizeMode="cover"
            />
            <Image
              source={images.img3}
              className="flex-1 w-full"
              resizeMode="cover"
            />
          </View>

          <View className="flex-1 gap-3">
            <Image
              source={images.img2}
              className="flex-1 w-full"
              resizeMode="cover"
            />
            <Image
              source={images.img3}
              className="flex-1 w-full"
              resizeMode="cover"
            />
            <Image
              source={images.img1}
              className="flex-1 w-full"
              resizeMode="cover"
            />
          </View>

          <View className="flex-1 gap-3">
            <Image
              source={images.img3}
              className="flex-1 w-full"
              resizeMode="cover"
            />
            <Image
              source={images.img1}
              className="flex-1 w-full"
              resizeMode="cover"
            />
            <Image
              source={images.img2}
              className="flex-1 w-full"
              resizeMode="cover"
            />
          </View>

          <View className="absolute bottom-0 left-0 h-[15%] w-full">
            <LinearGradient
              colors={["#ffffff00", "#ffffff80", "#fff", "#fff"]}
              style={{ height: "100%", width: "100%" }}
            ></LinearGradient>
          </View>
        </View>

        <Text className="font-raleway mt-5">Pão</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
