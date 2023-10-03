import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form";
import { Button, ScrollView, View } from "react-native";
import { TextInput, MD3LightTheme, Button as PaperButton } from "react-native-paper";

import { StackParamList } from "../Types";
import AppBar from "../components/AppBar";
import { MenuItemType } from "../components/Types";

type SignInScreenProps = NativeStackScreenProps<StackParamList, "SignIn">;

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn = ({ navigation, route }: SignInScreenProps) => {
  const menuItems: MenuItemType[] = [
    {
      title: "Repositories",
      onPress: () => navigation.navigate("Repositories"),
    },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <ScrollView>
      <AppBar title="Sign In" menuItems={menuItems} />
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            label="Email"
            mode="outlined"
            theme={MD3LightTheme}
            onChangeText={(text) => field.onChange(text)}
            value={field.value}
            style={{ margin: 8 }}
          />
        )}
        name="email"
        rules={{ required: "Email is required" }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            label="Password"
            mode="outlined"
            style={{ margin: 8 }}
            theme={MD3LightTheme}
            secureTextEntry
            onChangeText={(text) => field.onChange(text)}
            value={field.value}
          />
        )}
        name="password"
        rules={{ required: "Password is required" }}
        defaultValue=""
      />
      <View style={{ alignSelf: "center" }}>
        <Button
          color="black"
          onPress={handleSubmit(onSubmit)}
          title="Sign In"
        />
      </View>
    </ScrollView>
  );
};

export default SignIn;
