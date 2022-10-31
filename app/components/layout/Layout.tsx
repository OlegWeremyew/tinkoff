import React, { FC, ReactNode } from "react";
import { View, ScrollView } from "react-native";
import {styles} from "./styles"

interface ILayout {
  children: ReactNode
  isScrollView?: boolean
}

export const Layout: FC<ILayout> = ({children, isScrollView = true}) => {
  return (
    <View style={styles.layoutContainer}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : <>{children}</>}
    </View>
  );
};
