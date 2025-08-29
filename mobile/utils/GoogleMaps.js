import { Linking, Platform } from "react-native";

export const sendToMaps = (address) => {
    console.log(address);
    
  const encodedAddress = encodeURIComponent(address);

  if (Platform.OS === "ios") {
    // Apple Maps
    Linking.openURL(`http://maps.apple.com/?daddr=${encodedAddress}`);
  } else {
    // Android -> Google Maps
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`
    );
  }
};
