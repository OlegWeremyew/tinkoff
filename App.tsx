import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { AuthProvider } from "./app/providers";
import { Navigation } from "./app/navigation";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

LogBox.ignoreAllLogs();
