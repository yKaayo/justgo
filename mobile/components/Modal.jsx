import { useEffect } from "react";
import { Dimensions, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

// Icon
import CloseIcon from "@/assets/icons/Close";

const { height } = Dimensions.get("window");

const Modal = ({ children, onClose }) => {
  const translateY = useSharedValue(height);

  useEffect(() => {
    const timer = setTimeout(() => {
      translateY.value = withSpring(0, {
        damping: 20,
        stiffness: 150,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [translateY]);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationY > 0) {
        translateY.value = event.translationY;
      }
    })
    .onEnd((event) => {
      if (event.translationY > 100) {
        translateY.value = withSpring(height, {}, (finished) => {
          if (finished && onClose) {
            runOnJS(onClose)();
          }
        });
      } else {
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const handleClose = () => {
    translateY.value = withSpring(height, {}, (finished) => {
      if (finished && onClose) {
        runOnJS(onClose)();
      }
    });
  };

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl pt-4 px-3"
        style={[animatedStyle]}
      >
        <SafeAreaView edges={["bottom", "left", "right"]}>
          <Pressable onPress={handleClose} className="absolute right-3 -top-1">
            <CloseIcon size={28} />
          </Pressable>
          {children({ onClose: handleClose })}
        </SafeAreaView>
      </Animated.View>
    </GestureDetector>
  );
};

export default Modal;
