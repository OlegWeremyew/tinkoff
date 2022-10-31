import { StyleSheet } from 'react-native';
import { STYLES } from "../../../stylles";

export const styles = StyleSheet.create({
  authContainer: {...STYLES.commonContainer},
  authWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  authInfoBlock : {
    width: "75%",
  },
  authTitle: {
    color: "darkgray",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 2,
    fontSize: 26,
  },
  statusTitle: {
    color: "gray",
    opacity: 0.8,
    textAlign: "right",
    marginTop: 5,
  },
});