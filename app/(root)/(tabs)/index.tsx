import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text className="text-red-600 font-semibold">Olá</Text>
      <Link href="/register">Criar uma conta</Link>
      <Link href="/favorite">Criar uma conta</Link>
      <Link href="/trail">Criar uma conta</Link>
      <Link href="/place/1">Criar uma conta</Link>
    </View>
  );
}
