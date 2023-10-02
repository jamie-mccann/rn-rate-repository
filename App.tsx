import { StatusBar } from "expo-status-bar";
import { MD3DarkTheme, Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Main from "./src/Main";
import theme from "./src/theme";

export default function App() {
  return (
    <PaperProvider theme={MD3DarkTheme}>
      <SafeAreaProvider>
        <Main />
        <StatusBar style={theme.statusBar.darkTheme} />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
