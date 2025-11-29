import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const styles = StyleSheet.create({
  card: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: Colors.light.background,
    borderRadius: 15,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 20,
    borderColor: Colors.light.primary,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 200,
  }, 
  header: {
    marginTop: 4,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoContainer: {
    padding: 16,
  },
  title: {
    color: Colors.light.primary,
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 4,
  },
  author: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
    fontStyle:"italic"
  },
  metaRow: {
    marginTop: 4,
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metaText: {
    fontSize: 14,
    color: "black",
  },
});