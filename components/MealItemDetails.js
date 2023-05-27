import React from "react";
import { View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealItemDetails({ route, navigation }) {
  const mealId = route.params.mealItemId;
  const meal = MEALS.find((item) => item.id === mealId);
  return (
    <View>
      <Text>MealItemDetails - {meal.title}</Text>
    </View>
  );
}

export default MealItemDetails;
