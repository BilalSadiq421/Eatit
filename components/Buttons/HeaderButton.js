import React from "react";
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

function HeaderButton({ children, onPress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable android_ripple={{ color: "white" }} onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "purple",
    borderRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  text: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    fontWeight: "bold",
    color: "white",
  },
});

export default HeaderButton;
