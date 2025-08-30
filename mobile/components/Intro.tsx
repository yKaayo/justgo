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

// Image
import IntroImg from "@/assets/images/intro.jpg";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

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

  // Cálculo para manter proporção da logo
  const logoWidth = SCREEN_WIDTH - 40; // Menos 20px de cada lado (m-5)
  const logoHeight = (logoWidth * 15) / 42; // Proporção original: 42x15

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
        source={IntroImg}
        resizeMode="cover"
        style={{ width: "100%", height: SCREEN_HEIGHT }}
      />

      <SafeAreaView className="absolute inset-0">
        <View className="mx-5 flex-1 justify-center">
          <LogoIcon width={logoWidth} height={logoHeight} color="#fff" />
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Intro;
