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
    backgroundColor: "white",
    borderRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "white",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    marginRight: 10,
  },
  text: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    fontWeight: "bold",
    color: "#777",
  },
});

export default HeaderButton;
