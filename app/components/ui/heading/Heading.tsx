import React, { FC } from "react";
import { Text } from "react-native";
import { styles } from "./styles";
import { Padding } from "../padding";

interface IHeading {
  text: string;
  isCenter?: boolean;
}

export const Heading: FC<IHeading> = ({ text, isCenter = false }) => {

  return (
    <Padding>
      <Text style={[styles.textStyle, { textAlign: isCenter ? "center" : "left" }]}>
        {text}
      </Text>
    </Padding>
  );
};

