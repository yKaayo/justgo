import {
  CameraView,
  CameraType,
  FlashMode,
  useCameraPermissions,
} from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { BlurView } from "expo-blur";
import {
  usePermissions,
  getAlbumAsync,
  createAssetAsync,
  createAlbumAsync,
  addAssetsToAlbumAsync,
} from "expo-media-library";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// Icon
import LoopIcon from "@/assets/icons/LoopIcon";

const Camera = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [flash, setFlash] = useState<FlashMode>("off");
  const [loading, setLoading] = useState(false);
  const [finalImage, setFinalImage] = useState<string | null>(null);

  const [permissionCamera, requestCameraPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = usePermissions();

  const cameraRef = useRef(null);

  if (!permissionCamera || !mediaPermission) {
    return <View />;
  }

  if (!permissionCamera.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Por favor, permita o acesso à câmera</Text>
        <Button onPress={requestCameraPermission} title="Permitir acesso" />
      </View>
    );
  }

  // ✅ Correção: adicionar return
  if (mediaPermission.status !== "granted") {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Por favor, permita o acesso à galeria
        </Text>
        <Button onPress={requestMediaPermission} title="Permitir acesso" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const toggleFlashState = () => {
    setFlash((current) => (current === "on" ? "off" : "on"));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: false,
        skipProcessing: false,
        flashMode: flash,
      };

      const photo = await cameraRef.current.takePictureAsync(options);

      // 🔹 Salvar no álbum (opcional)
      if (mediaPermission?.granted) {
        try {
          const asset = await createAssetAsync(photo.uri);
          const existingAlbum = await getAlbumAsync("JUSTGO");

          // ✅ Correção: usar o valor retornado diretamente
          if (existingAlbum) {
            await addAssetsToAlbumAsync([asset], existingAlbum, false);
          } else {
            await createAlbumAsync("JUSTGO", asset, false);
          }
        } catch (error) {
          console.error("Erro ao salvar no álbum:", error);
        }
      }

      // 🔹 Enviar pro backend
      setLoading(true);
      const formData = new FormData();
      formData.append("person", {
        uri: photo.uri,
        name: "person.jpg",
        type: "image/jpeg",
      } as any);

      // ✅ Para assets estáticos, você pode precisar convertê-los primeiro
      // ou usar uma abordagem diferente, dependendo da sua necessidade

      try {
        const response = await fetch("http://localhost:3000/generate-scene", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const { finalImage } = await response.json();
        setFinalImage(finalImage);
      } catch (err) {
        console.error("Erro ao enviar imagem:", err);
        // Adicionar feedback para o usuário
        alert("Erro ao processar imagem. Tente novamente.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <BlurView intensity={100} tint="dark" style={{ flex: 1 }}>
      <SafeAreaProvider style={styles.container}>
        <CameraView
          ref={cameraRef}
          style={styles.camera}
          facing={facing}
          flash={flash}
        >
          <BlurView intensity={100} tint="dark" style={styles.buttonContainer}>
            <SafeAreaView
              style={{
                position: "relative",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "80%",
                }}
              >
                <TouchableOpacity onPress={toggleCameraFacing}>
                  <Text style={styles.text}>
                    <LoopIcon />
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={toggleFlashState}
                  style={{ marginLeft: 40 }}
                >
                  <Text style={{ color: "white" }}>
                    {flash === "on" ? "🔦 On" : "🔦 Off"}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={takePicture} disabled={loading}>
                <View style={styles.circleBorder}>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
            </SafeAreaView>
          </BlurView>
        </CameraView>

        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="white" />
            <Text style={styles.loadingText}>Processando imagem...</Text>
          </View>
        )}

        {finalImage && (
          <Image source={{ uri: finalImage }} style={styles.resultImage} />
        )}
      </SafeAreaProvider>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  message: { textAlign: "center", paddingBottom: 10, color: "white" },
  camera: { flex: 1 },
  buttonContainer: {
    position: "absolute",
    paddingTop: 8,
    paddingBottom: 20,
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontSize: 24, fontWeight: "bold", color: "white" },
  circleBorder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 50,
  },
  circle: { backgroundColor: "#fff", height: 28, width: 28, borderRadius: 50 },
  loadingContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: "center",
  },
  loadingText: {
    color: "white",
    marginTop: 10,
    fontSize: 16,
  },
  resultImage: {
    width: 300,
    height: 400,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 8,
  },
});

export default Camera;
