import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import { StackParamList } from "../Types";
import AppBar from "../components/AppBar";
import { MenuItemType } from "../components/Types";

type SignInScreenProps = NativeStackScreenProps<StackParamList, "SignIn">;

const SignIn = ({ navigation, route }: SignInScreenProps) => {
  const menuItems: MenuItemType[] = [
    {
      title: "Repositories",
      onPress: () => navigation.navigate("Repositories"),
    },
  ];
  return (
    <View>
      <AppBar title="Sign In" menuItems={menuItems} />
      <Text>This is the sign-in view</Text>
    </View>
  );
};

export default SignIn;
