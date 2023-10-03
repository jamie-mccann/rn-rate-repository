import { Appbar } from "react-native-paper";

import Menu from "./Menu";
import { MenuItemType } from "./Types";

type AppBarProps = {
  title: string;
  menuItems: MenuItemType[];
};

const AppBar = ({ title, menuItems }: AppBarProps) => (
  <Appbar.Header>
    {/* <Appbar.BackAction onPress={() => {}} /> */}
    <Appbar.Content title={title} titleStyle={{ textAlign: "center" }} />
    <Menu menuItems={menuItems} />
    {/* <Appbar.Action icon="calendar" onPress={() => {}} /> */}
    {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
  </Appbar.Header>
);

export default AppBar;
