import { Appbar } from "react-native-paper";

type AppBarProps = {
  title: string;
};

const AppBar = ({ title }: AppBarProps) => (
  <Appbar.Header>
    {/* <Appbar.BackAction onPress={() => {}} /> */}
    <Appbar.Content title={title} />
    {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
    {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
  </Appbar.Header>
);

export default AppBar;
