import React from "react";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/FavouritesContext";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function FavouritesScreen({ route, navigation }) {
  const contextValue = useContext(FavouritesContext);

  return (
    <ScrollView>
      <View style={styles.outerContainer}>
        {contextValue.ids.length == 0 && (
          <Text style={styles.Text}>No Favourite Meals Added.</Text>
        )}
        {contextValue.ids.map((mealItem) => {
          const mealData = MEALS.find((meal) => meal.id == mealItem);
          return (
            <MealItem
              key={mealData.id}
              item={mealData}
              onPress={() =>
                navigation.navigate("MealItemDetails", {
                  mealItemId: mealData.id,
                  title: mealData.title,
                })
              }
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  Text: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    marginVertical: 30,
  },
});

export default FavouritesScreen;
