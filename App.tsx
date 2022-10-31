import { StatusBar } from "expo-status-bar";
import { LogBox, View } from "react-native";
import { AuthProvider } from "./app/providers";
import { Navigation } from "./app/navigation";

export default function App() {
  return (
    <View style={{flex: 1, marginTop: 25}}>
      <AuthProvider>
        <StatusBar translucent={true} />
        <Navigation />
      </AuthProvider>
    </View>

  );
}

LogBox.ignoreAllLogs();
