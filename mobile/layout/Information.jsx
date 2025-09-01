import { View, Text } from "react-native";

// Icon
import PhoneIcon from "@/assets/icons/Phone";
import AddressIcon from "@/assets/icons/Address";
import TimeIcon from "@/assets/icons/Time";

const Information = ({ item }) => {
  return (
    <View className="mx-3 gap-3 mb-7 mt-7">
      <Text className="font-bold text-lg">O QUE SABER SOBRE O LUGAR</Text>

      <View className="gap-3">
        <View className="flex-row items-center gap-2">
          <PhoneIcon size={18} color="#E17A65" />
          <Text>{item.tel}</Text>
        </View>

        <View className=" flex-row items-center gap-2">
          <AddressIcon size={18} color="#E17A65" />
          <Text className="pe-3">{item.address}</Text>
        </View>

        <View className="flex-row items-center gap-2">
          <TimeIcon size={18} color="#E17A65" />
          <Text className="pe-3">{item.work}</Text>
        </View>
      </View>
    </View>
  );
};

export default Information;
