import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackParamList } from "./Types";
import Repositories from "./screens/Repositories";
import SignIn from "./screens/SignIn";

const Stack = createNativeStackNavigator<StackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Repositories"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Repositories" component={Repositories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
