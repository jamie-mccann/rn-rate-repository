import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";

import { StackParamList } from "../Types";
import AppBar from "../components/AppBar";
import RepositoryList from "../components/RepositoryList";
import { MenuItemType } from "../components/Types";

type RepositoriesScreenProps = NativeStackScreenProps<
  StackParamList,
  "Repositories"
>;

const Repositories = ({ navigation, route }: RepositoriesScreenProps) => {
  const menuItems: MenuItemType[] = [
    {
      title: "Sign In",
      onPress: () => navigation.navigate("SignIn"),
    },
  ];
  return (
    <View style={{ backgroundColor: "#e1e4e8", flex: 1 }}>
      <AppBar title="Repositories" menuItems={menuItems} />
      <RepositoryList />
    </View>
  );
};

export default Repositories;
