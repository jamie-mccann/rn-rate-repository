import { View } from "react-native";

import AppBar from "./components/AppBar";
import RepositoryList from "./components/RepositoryList";

const Main = () => {
  return (
    <View style={{ backgroundColor: "#e1e4e8" }}>
      <AppBar title="Repositories" />
      <RepositoryList />
    </View>
  );
};

export default Main;
