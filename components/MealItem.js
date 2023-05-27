import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

function MealItem({ item, onPress }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? [styles.buttonPressed] : null,
        ]}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>{item.duration}m</Text>
          <Text style={styles.detail}>{item.complexity.toUpperCase()}</Text>
          <Text style={styles.detail}>{item.affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.45,
    overflow: "hidden",
  },
  imageContainer: {
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 4,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  detailsContainer: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detail: {
    fontSize: 14,
    marginHorizontal: 6,
  },
});

export default MealItem;
