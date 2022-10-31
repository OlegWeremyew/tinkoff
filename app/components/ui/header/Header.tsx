import React, { FC } from "react";
import { styles } from "./styles";
import { Padding } from "../padding";
import { Avatar } from "../avatar";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useProfile } from "../../../hooks";
import { Loader } from "../loader";

export const Header: FC<any> = () => {

  const { name, isLoading } = useProfile();
  const { navigate } = useNavigation();

  return isLoading ? (
    <Loader />
  ) : (
    <Padding styleProp={styles.headerContainer}>
      <Avatar name={name ?? "XXX"} />
      <TouchableOpacity
        style={styles.goProfileContainer}
        onPress={() => navigate("Profile" as never)}
      >
        <Text style={styles.profileName}>
          {name ?? "XXX"}
        </Text>
        <Entypo
          name="chevron-small-right"
          size={28}
          style={styles.arrow}
        />
      </TouchableOpacity>
    </Padding>
  );
};

