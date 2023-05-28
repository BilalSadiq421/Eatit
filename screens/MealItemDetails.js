import React from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealItemDetails({ route, navigation }) {
  const mealId = route.params.mealItemId;
  const meal = MEALS.find((item) => item.id === mealId);

  return (
    <View style={styles.rootContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.detail}>{meal.duration}m</Text>
          <Text style={styles.detail}>{meal.complexity.toUpperCase()}</Text>
          <Text style={styles.detail}>{meal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.subTitle}>Ingredients</Text>
        <View style={styles.listContainer}>
          {meal.ingredients.map((value) => (
            <View key={value} style={styles.listItemContainer}>
              <Text style={styles.listItem}>{value}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.subTitle}>Steps</Text>
        <View style={styles.listContainer}>
          {meal.steps.map((value) => (
            <View key={value} style={styles.listItemContainer}>
              <Text style={styles.listItem}>{value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "column",
  },
  scrollView: {
    alignItems: "center",
    paddingBottom: 20,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    marginVertical: 8,
    paddingTop: 12,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginVertical: 6,
    borderBottomWidth: 1.5,
    borderColor: "black",
    paddingBottom: 8,
    marginBottom: 6,
    width: "80%",
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

export default MealItemDetails;
