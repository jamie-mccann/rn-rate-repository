import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import { StackParamList } from "../Types";
import AppBar from "../components/AppBar";

type SignInScreenProps = NativeStackScreenProps<StackParamList, "SignIn">;

const SignIn = ({ navigation, route }: SignInScreenProps) => {
  return (
    <View>
      <AppBar title="Sign In" />
      <Text>This is the sign-in view</Text>
    </View>
  );
};

export default SignIn;
