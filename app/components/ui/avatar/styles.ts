import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  avatarSmallContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    marginRight: 3,
    backgroundColor: 'gray',
    borderRadius: 50,
  },
  avatarLargeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: 'gray',
    borderRadius: 50,
  },
  nameTextSmall: {
    color: "white",
    fontWeight: "600",
    fontSize: 14
  },
  nameTextLarge: {
    color: "white",
    fontWeight: "600",
    fontSize: 16
  }
});