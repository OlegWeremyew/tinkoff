import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IAvatar {
  name: string | null;
  size?: "small" | "large";
}

export const Avatar: FC<IAvatar> = ({ name, size = "small" }) => {

  const containerStyle = size === "small" ? styles.avatarSmallContainer : styles.avatarLargeContainer;
  const nameText = size === "small" ? styles.nameTextSmall : styles.nameTextLarge;

  return (
    <View style={containerStyle}>
      <Text style={nameText}>
        {name?.slice(0, 1)}
      </Text>
    </View>
  );
};
