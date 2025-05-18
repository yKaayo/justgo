import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

const Place = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Place {id}</Text>
    </View>
  );
};

export default Place;
