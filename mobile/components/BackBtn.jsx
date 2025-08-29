import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

// Icon
import ArrowLeft from "../assets/icons/ArrowLeft";

const BackBtn = ({ pathname = "/" }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname,
        })
      }
      className="bg-gray-500 p-1 rounded-full"
    >
      <ArrowLeft size={24} />
    </TouchableOpacity>
  );
};

export default BackBtn;
