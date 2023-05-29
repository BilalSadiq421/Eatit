import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color }) {
  return (
    <Pressable style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={icon} color={color} size={24} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton;
