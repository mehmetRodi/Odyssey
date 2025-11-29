import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export default function getStyles(theme: "light" | "dark") {
  return StyleSheet.create({
    card: {
      width: "92%",
      backgroundColor: Colors[theme].background,
      borderRadius: 16,
      paddingVertical: 18,
      paddingHorizontal: 20,
      alignSelf: "center",
      marginVertical: 10,
      shadowColor: "#000",
      shadowOpacity: 0.06,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3,
    },

    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    left: {
      flex: 1,
    },

    title: {
      fontSize: 20,
      fontWeight: "700",
      color: Colors[theme].text,
    },

    author: {
      marginTop: 6,
      fontSize: 15,
      color: "#7A7F87",
    },

    right: {
      flexDirection: "row",
      alignItems: "center",
    },

    rating: {
      fontSize: 17,
      fontStyle: "italic",
      fontWeight: "600",
      color: Colors[theme].text,
    },
  });
}