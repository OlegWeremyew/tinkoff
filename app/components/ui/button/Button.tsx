import React, { FC } from "react";
import { Text, TouchableHighlight } from "react-native";
import { styles } from "./styles";

interface IButton {
  onPress?: () => void;
  title: string;
  colors?: [string, string];
}

export const Button: FC<IButton> = ({ onPress, title, colors = ["yellow", "#FBBF24"] }) => {

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={[styles.buttonContainer, {backgroundColor: `${colors[0]}`}]}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

