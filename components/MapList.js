import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MapList({ arrayValue }) {
  return (
    <View style={styles.listContainer}>
      {arrayValue.map((value) => (
        <View key={value} style={styles.listItemContainer}>
          <Text style={styles.listItem}>{value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: "80%",
  },
  listItem: {
    backgroundColor: "#f5a442",
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: 6,
    textAlign: "center",
    color: "white",
    fontSize: 14,
    borderRadius: 8,
  },
  listItemContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default MapList;
