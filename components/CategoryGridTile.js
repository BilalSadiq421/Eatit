import React from "react";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({ title, color, onPress }) {
  // const navigation = useNavigation()
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 14,
    borderRadius: 8,
    elevation: 4,
    height: 150,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
  },
  button: { flex: 1 },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryGridTile;
