import React, { FC, ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

interface IPadding {
  children: ReactNode;
  styleProp?: any;
}

export const Padding: FC<IPadding> = ({ children ,styleProp={}}) => {

  return (
    <View style={[styles.paddingContainer, {...styleProp}]}>
        {children}
    </View>
  );
};

