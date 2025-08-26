import {
  CameraView,
  CameraType,
  FlashMode,
  useCameraPermissions,
  CameraPictureOptions,
} from "expo-camera";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  const [albums, setAlbums] = useState(null);

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

  if (mediaPermission.status !== "granted") {
    <View style={styles.container}>
      <Text style={styles.message}>Por favor, permita o acesso à galeria</Text>
      <Button onPress={requestMediaPermission} title="Permitir acesso" />
    </View>;
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
        base64: true,
        quality: 1,
        skipProcessing: false,
        flashMode: flash,
      };

      const photo = await cameraRef.current.takePictureAsync(options);

      if (mediaPermission?.granted) {
        const asset = await createAssetAsync(photo.uri);

        setAlbums(await getAlbumAsync("JUSTGO"));

        if (albums) {
          await addAssetsToAlbumAsync([asset], albums, false);
        } else {
          await createAlbumAsync("JUSTGO", asset, false);
        }
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

              <TouchableOpacity onPress={takePicture}>
                <View style={styles.circleBorder}>
                  <View style={styles.circle}></View>
                </View>
              </TouchableOpacity>
            </SafeAreaView>
          </BlurView>
        </CameraView>
      </SafeAreaProvider>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
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
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  circleBorder: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 50,
  },
  circle: {
    backgroundColor: "#fff",
    height: 28,
    width: 28,
    borderRadius: 50,
  },
});

export default Camera;
