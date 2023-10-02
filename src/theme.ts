import { TextStyle } from "react-native";

type Colors = {
  primary: string;
  textPrimary: string;
  textSecondary: string;
  textDarkBackground: string;
  textTitle: string;
};

type FontSizes = {
  body: number;
  subheading: number;
  heading: number;
};

type Fonts = {
  main: string;
};

type FontWeights = {
  normal: TextStyle["fontWeight"];
  bold: TextStyle["fontWeight"];
};

type StatusBar = {
  lightTheme: "dark";
  darkTheme: "light";
};

type Theme = {
  colors: Colors;
  fontSizes: FontSizes;
  fonts: Fonts;
  fontWeights: FontWeights;
  statusBar: StatusBar;
};

const theme: Theme = {
  statusBar: {
    lightTheme: "dark",
    darkTheme: "light",
  },
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    textDarkBackground: "white",
    textTitle: "white",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 25,
  },
  fonts: {
    main: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
