// Context API Usage
//1- App.js has been wrapped with context API provide
// 2- Importing the Context API Hook
import { useContext, useLayoutEffect } from "react";
import { Image, View, Text, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealStructure from "../components/MealStructure";
import MapList from "../components/MapList";
import IconButton from "../components/Buttons/IconButton";
// 3- Importing the Context API initial state value
import { FavouritesContext } from "../store/context/FavouritesContext";

function MealItemDetails({ route, navigation }) {
  const mealId = route.params.mealItemId;
  const meal = MEALS.find((item) => item.id === mealId);

  //4-initailizing the context hook with initial value,
  const favourtieMealCtx = useContext(FavouritesContext);

  //5-using the context api, and updating the global state throughout the app
  const mealIsFavourite = favourtieMealCtx.ids.includes(mealId);

  const changeFavouritesStatusHandler = () => {
    console.log(mealIsFavourite, mealId, favourtieMealCtx);
    if (mealIsFavourite) {
      favourtieMealCtx.removeFavourite(mealId);
    } else {
      favourtieMealCtx.addFavourite(mealId);
    }
  };

  // Second way of adding component to header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavourite ? "star" : "star-outline"}
          color="white"
          onPress={changeFavouritesStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavouritesStatusHandler]);

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
