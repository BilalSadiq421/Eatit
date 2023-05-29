import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MealStructure({ duration, complexity, affordability }) {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detail}>{duration}m</Text>
      <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default MealStructure;
