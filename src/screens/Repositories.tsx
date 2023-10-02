import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";

import { StackParamList } from "../Types";
import AppBar from "../components/AppBar";
import RepositoryList from "../components/RepositoryList";

type RepositoriesScreenProps = NativeStackScreenProps<
  StackParamList,
  "Repositories"
>;

const Repositories = ({ navigation, route }: RepositoriesScreenProps) => {
  return (
    <View style={{ backgroundColor: "#e1e4e8" }}>
      <AppBar title="Repositories" />
      <RepositoryList />
    </View>
  );
};

export default Repositories;
