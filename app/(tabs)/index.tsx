// import { Link } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// Components
import Camera from "@/components/Camera"
import Intro from "@/components/Intro";
import Register from "./register";

const Home = () => {
  return (
    <SafeAreaProvider>
      {/* <Intro /> */}
      {/* <Register /> */}
      <Camera />
    </SafeAreaProvider>
  );
};

export default Home;

{
  /* <Text className="font-semibold text-red-600">Olá</Text>
      <Link href="/register">Criar uma conta</Link> */
}
