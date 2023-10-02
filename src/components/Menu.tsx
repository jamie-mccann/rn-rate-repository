import React, { useState } from "react";
import { Appbar, Menu as PaperMenu } from "react-native-paper";

type MenuItemType = {
  route: string;
  onPress: () => void;
  title: string;
};

type MenuProps = {
  menuItems: MenuItemType[];
};

const Menu = ({ menuItems }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <PaperMenu
      visible={visible}
      onDismiss={closeMenu}
      anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
    >
      {menuItems.map((item, index) => (
        <PaperMenu.Item
          key={index}
          // this part might need work
          onPress={() => {
            item.onPress();
            closeMenu();
          }}
          title={item.title}
        />
      ))}
    </PaperMenu>
  );
};

export default Menu;
