import { Image, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { useEffect } from "react";

// Icon
import LogoIcon from "@/assets/icons/Logo";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

interface IntroProps {
  onAnimationComplete: () => void;
}

const Intro = ({ onAnimationComplete }: IntroProps) => {
  const translateY = useSharedValue(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      translateY.value = withTiming(
        -SCREEN_HEIGHT,
        {
          duration: 800,
        },
        (finished) => {
          if (finished) {
            runOnJS(onAnimationComplete)();
          }
        }
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete, translateY]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
        },
        animatedStyle,
      ]}
    >
      <Image
        source={require("@/assets/images/homeBg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: SCREEN_HEIGHT }}
      />

      <SafeAreaView className="absolute inset-0">
        <View className="m-5">
          <LogoIcon />
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Intro;
