import { Linking, Platform } from "react-native";

export const sendToMaps = (address) => {
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

export const searchPlace = (address, place) => {
  const searchQuery = place ? `${place} perto de ${address}` : address;
  const encodedQuery = encodeURIComponent(searchQuery);

  if (Platform.OS === "ios") {
    Linking.openURL(`http://maps.apple.com/?q=${encodedQuery}`);
  } else {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`
    );
  }
};
