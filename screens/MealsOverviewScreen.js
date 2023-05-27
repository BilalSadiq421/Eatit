import React, { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  //set dynamic react navigation screen title for every  page
  //set Title : 2nd way
  useLayoutEffect(() => {
    const title = CATEGORIES.find((item) => item.id == catId).title;
    navigation.setOptions({ title: title });
  }, [catId, navigation]);
  //!Attention : If you see any sort of rendering issue use this with useLayoutEffect

  const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(catId) >= 0);

  function renderItem(itemData) {
    return (
      <MealItem
        item={itemData.item}
        onPress={() =>
          navigation.navigate("MealItemDetails", {
            mealItemId: itemData.item.id,
          })
        }
      />
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={meals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
