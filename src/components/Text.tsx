import { Text as NativeText, StyleSheet, TextStyle } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorDarkBackground: {
    color: theme.colors.textDarkBackground,
  },
  colorTitle: {
    color: theme.colors.textTitle,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

type TextProps = {
  children: React.ReactNode;
  color?: "textSecondary" | "primary" | "darkBackground" | "title";
  fontSize?: "subheading" | "heading";
  fontWeight?: TextStyle["fontWeight"]; // Use the fontWeight type from TextStyle
  style?: TextStyle;
};

const Text = ({ color, fontSize, fontWeight, style, ...props }: TextProps) => {
  const textStyle = [
    styles.text,
    color === "title" && styles.colorTitle,
    color === "darkBackground" && styles.colorDarkBackground,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "heading" && styles.fontSizeHeading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
