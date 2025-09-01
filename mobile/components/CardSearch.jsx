import { TextInput, TouchableOpacity, View } from "react-native";

// Icon
import SearchIcon from "@/assets/icons/Search";

const CardSearch = ({ handleSearch, searchText, setSearchText }) => {
  return (
    <View className="relative justify-center mx-3 mb-7">
      <TextInput
        className="border-b border-zinc-700 pr-10"
        placeholder="Buscando algo perto? (Restaurante, hotel, etc)"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
        enablesReturnKeyAutomatically={true}
      />

      <TouchableOpacity
        className="absolute right-2 bg-brown p-2 rounded-full"
        onPress={handleSearch}
      >
        <SearchIcon size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default CardSearch;
