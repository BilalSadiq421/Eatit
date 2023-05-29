import { useLayoutEffect } from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealStructure from "../components/MealStructure";
import MapList from "../components/MapList";

function MealItemDetails({ route, navigation }) {
  const mealId = route.params.mealItemId;
  const meal = MEALS.find((item) => item.id === mealId);

  //Second way of adding component to header
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => <Text>Me</Text>,
  //   });
  // }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
        <MealStructure
          duration={meal.duration}
          complexity={meal.complexity}
          affordability={meal.affordability}
        />
        <Text style={styles.subTitle}>Ingredients</Text>
        <MapList arrayValue={meal.ingredients} />
        <Text style={styles.subTitle}>Steps</Text>
        <MapList arrayValue={meal.steps} />
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
    color: "#444",
    marginVertical: 6,
    borderBottomWidth: 1.5,
    borderColor: "#f5a442",
    paddingBottom: 8,
    marginBottom: 6,
    width: "80%",
  },
});

export default MealItemDetails;
