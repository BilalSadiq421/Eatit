import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderItem({ item }) {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={() =>
          navigation.navigate("MealsOverviewScreen", {
            categoryId: item.id,
            CategoryName: item.title,
          })
        }
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
